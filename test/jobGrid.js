/* eslint no-unused-expressions: 1 */

var expect = require('chai').expect;
var jobGrid = require('../lib/jobGrid');

describe('jobGrid', function () {

	it('should return 1 coordinates', function () {

		var coords = jobGrid(1);

		expect(coords).to.be.an.array;
		expect(coords).to.have.length(1);

		expect(coords[0]).to.deep.equal({ x: 0, y: 2, h: 12, w: 12 });

	});

	it('should return 2 coordinates', function () {

		var coords = jobGrid(2);

		expect(coords).to.be.an.array;
		expect(coords).to.have.length(2);

		expect(coords[0]).to.deep.equal({ x: 0, y: 2, h: 12, w: 6 });
		expect(coords[1]).to.deep.equal({ x: 6, y: 2, h: 12, w: 6 });

	});

	it('should return 3 coordinates', function () {

		var coords = jobGrid(3);

		expect(coords).to.be.an.array;
		expect(coords).to.have.length(3);

		expect(coords[0]).to.deep.equal({ x: 0, y: 2, h: 6, w: 6 });
		expect(coords[1]).to.deep.equal({ x: 6, y: 2, h: 6, w: 6 });
		expect(coords[2]).to.deep.equal({ x: 0, y: 8, h: 6, w: 6 });

	});

	it('should return 4 coordinates', function () {

		var coords = jobGrid(4);

		expect(coords).to.be.an.array;
		expect(coords).to.have.length(4);

		expect(coords[0]).to.deep.equal({ x: 0, y: 2, h: 6, w: 6 });
		expect(coords[1]).to.deep.equal({ x: 6, y: 2, h: 6, w: 6 });
		expect(coords[2]).to.deep.equal({ x: 0, y: 8, h: 6, w: 6 });
		expect(coords[3]).to.deep.equal({ x: 6, y: 8, h: 6, w: 6 });

	});

	it('should return 5 coordinates', function () {

		var coords = jobGrid(5);

		expect(coords).to.be.an.array;
		expect(coords).to.have.length(5);

		expect(coords[0]).to.deep.equal({ x: 0, y: 2, h: 6, w: 4 });
		expect(coords[1]).to.deep.equal({ x: 4, y: 2, h: 6, w: 4 });
		expect(coords[2]).to.deep.equal({ x: 8, y: 2, h: 6, w: 4 });
		expect(coords[3]).to.deep.equal({ x: 0, y: 8, h: 6, w: 4 });
		expect(coords[4]).to.deep.equal({ x: 4, y: 8, h: 6, w: 4 });

	});

	it('should return 6 coordinates', function () {

		var coords = jobGrid(6);

		expect(coords).to.be.an.array;
		expect(coords).to.have.length(6);

		expect(coords[0]).to.deep.equal({ x: 0, y: 2, h: 6, w: 4 });
		expect(coords[1]).to.deep.equal({ x: 4, y: 2, h: 6, w: 4 });
		expect(coords[2]).to.deep.equal({ x: 8, y: 2, h: 6, w: 4 });
		expect(coords[3]).to.deep.equal({ x: 0, y: 8, h: 6, w: 4 });
		expect(coords[4]).to.deep.equal({ x: 4, y: 8, h: 6, w: 4 });
		expect(coords[5]).to.deep.equal({ x: 8, y: 8, h: 6, w: 4 });

	});

	it('should return 7 coordinates', function () {

		var coords = jobGrid(7);

		expect(coords).to.be.an.array;
		expect(coords).to.have.length(7);

		expect(coords[0]).to.deep.equal({ x: 0, y: 2, h: 4, w: 4 });
		expect(coords[1]).to.deep.equal({ x: 4, y: 2, h: 4, w: 4 });
		expect(coords[2]).to.deep.equal({ x: 8, y: 2, h: 4, w: 4 });
		expect(coords[3]).to.deep.equal({ x: 0, y: 6, h: 4, w: 4 });
		expect(coords[4]).to.deep.equal({ x: 4, y: 6, h: 4, w: 4 });
		expect(coords[5]).to.deep.equal({ x: 8, y: 6, h: 4, w: 4 });
		expect(coords[6]).to.deep.equal({ x: 0, y: 10, h: 4, w: 4 });

	});

	it('should return 8 coordinates', function () {

		var coords = jobGrid(8);

		expect(coords).to.be.an.array;
		expect(coords).to.have.length(8);

		expect(coords[0]).to.deep.equal({ x: 0, y: 2, h: 4, w: 4 });
		expect(coords[1]).to.deep.equal({ x: 4, y: 2, h: 4, w: 4 });
		expect(coords[2]).to.deep.equal({ x: 8, y: 2, h: 4, w: 4 });
		expect(coords[3]).to.deep.equal({ x: 0, y: 6, h: 4, w: 4 });
		expect(coords[4]).to.deep.equal({ x: 4, y: 6, h: 4, w: 4 });
		expect(coords[5]).to.deep.equal({ x: 8, y: 6, h: 4, w: 4 });
		expect(coords[6]).to.deep.equal({ x: 0, y: 10, h: 4, w: 4 });
		expect(coords[7]).to.deep.equal({ x: 4, y: 10, h: 4, w: 4 });

	});

	it('should return 9 coordinates', function () {

		var coords = jobGrid(9);

		expect(coords).to.be.an.array;
		expect(coords).to.have.length(9);

		expect(coords[0]).to.deep.equal({ x: 0, y: 2, h: 4, w: 4 });
		expect(coords[1]).to.deep.equal({ x: 4, y: 2, h: 4, w: 4 });
		expect(coords[2]).to.deep.equal({ x: 8, y: 2, h: 4, w: 4 });
		expect(coords[3]).to.deep.equal({ x: 0, y: 6, h: 4, w: 4 });
		expect(coords[4]).to.deep.equal({ x: 4, y: 6, h: 4, w: 4 });
		expect(coords[5]).to.deep.equal({ x: 8, y: 6, h: 4, w: 4 });
		expect(coords[6]).to.deep.equal({ x: 0, y: 10, h: 4, w: 4 });
		expect(coords[7]).to.deep.equal({ x: 4, y: 10, h: 4, w: 4 });
		expect(coords[8]).to.deep.equal({ x: 8, y: 10, h: 4, w: 4 });

	});

});
