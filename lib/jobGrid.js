module.exports = function(numberOfJobs, cols) {
  if (numberOfJobs > 0 && numberOfJobs <= 9) {
    var numberOfColumns = cols || Math.ceil(Math.sqrt(numberOfJobs));
    var numberOfRows = Math.ceil(numberOfJobs / numberOfColumns);

    var width = 12 / numberOfColumns;
    var height = 12 / numberOfRows;

    var jobs = [];

    var y = 2;
    var x = 0;

    for (var i = 0; i < numberOfJobs; i++) {
      jobs.push({ x: x, y: y, w: width, h: height });

      x = x + width;
      if (x === 12) {
        y = y + height;
        x = 0;
      }
    }

    return jobs;
  }

  return [];
};
