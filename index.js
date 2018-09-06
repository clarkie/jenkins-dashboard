var blessed = require("blessed");
var contrib = require("blessed-contrib");
var _ = require("lodash");
var moment = require("moment");

var jobGrid = require("./lib/jobGrid");

var jenkinsUrl = process.env.JENKINS_URL;
if (!jenkinsUrl) {
  throw new Error("JENKINS_URL not set");
}
jenkinsUrl = "http://" + jenkinsUrl;

var jobsFilterRegex = new RegExp(process.env.JOBS_FILTER, "i");

var cols = process.env.COLS;

var jenkins = require("jenkins")(jenkinsUrl);

var screen = blessed.screen();

var grid = new contrib.grid({ rows: 14, cols: 12, screen: screen });

var defaultStyle = { fg: "white", bg: "black", border: { fg: "#f0f0f0" } };

var addJobToGrid = function(job, displayGrid, x, y, w, h) {
  jenkins.job.get(job.name, function(err, data) {
    if (err) {
      throw err; // FIXME don't throw, fail gracefully
    }

    var lastBuilt = "";
    if (data.lastCompletedBuild && data.lastCompletedBuild.number) {
      lastBuilt = data.lastCompletedBuild.number;
    }

    var box = displayGrid.set(y, x, w, h, blessed.box, {
      content: job.name + "\n\n" + lastBuilt,
      style: defaultStyle
    });
    box.style.bg = job.color.split("_")[0];

    if (box.style.bg === "blue") {
      box.style.bg = "green";
    }

    if (job.color.split("_")[1] === "anime") {
      setTimeout(function() {
        box.style.bg = "#999999";
        box.style.fg = "black";
        screen.render();
      }, 1000);
    }

    screen.render();
  });
};

var drawGrid = function(err, buildStatus, callback) {
  var errorLog = [];

  if (err) {
    errorLog.push(err.message);
  }

  if (!buildStatus) {
    errorLog.push("No build information received");
    buildStatus = [];
  }

  if (buildStatus.length > 9) {
    errorLog.push("More than 9 jobs found!");
  }

  if (errorLog.length) {
    grid.set(0, 0, 2, 4, blessed.box, {
      content: errorLog.join("\n"),
      style: {
        fg: "red",
        bg: "black",
        border: { fg: "red" }
      }
    });
    screen.render();
  }

  grid.set(0, 4, 2, 4, blessed.box, {
    content: moment().format("YYYY-MM-DD HH:mm:ss"),
    style: defaultStyle
  });

  var coords = jobGrid(Math.min(buildStatus.length, 9), cols);

  coords.forEach(function(gridPos, i) {
    addJobToGrid(
      buildStatus[i],
      grid,
      gridPos.x,
      gridPos.y,
      gridPos.h,
      gridPos.w
    );
  });

  setTimeout(function() {
    return callback(null, drawGrid);
  }, 2000);
};

var filterJobs = function(jobs) {
  return _.filter(jobs, function(job) {
    return job.name.match(jobsFilterRegex);
  });
};

var getJenkinsStatus = function(err, callback) {
  if (err) {
    return callback(err, null, getJenkinsStatus);
  }

  jenkins.info(function(error, data) {
    if (error) {
      return callback(error, null, getJenkinsStatus);
    }

    return callback(
      null,
      _.sortBy(filterJobs(data.jobs), "name"),
      getJenkinsStatus
    );
  });
};

getJenkinsStatus(null, drawGrid);
