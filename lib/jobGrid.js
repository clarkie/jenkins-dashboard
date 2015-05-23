
module.exports = function (numberOfJobs) {

	if (numberOfJobs > 0 && numberOfJobs <= 9) {

		var numberOfColumns = Math.ceil(Math.sqrt(numberOfJobs));
		var numberOfRows = Math.ceil(numberOfJobs / numberOfColumns);

		var w = 12 / numberOfColumns;
		var h = 12 / numberOfRows;

		var jobs = [];

		var y = 2;
		var x = 0;

		for (var i = 0; i < numberOfJobs; i++) {

			jobs.push({x: x, y: y, w: w, h: h});

			x = x + w;
			if (x === 12) {
				y = y + h;
				x = 0;
			}

		}

		return jobs;

	}

	return [];

};
