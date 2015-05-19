var expect = require('chai').expect;
var jobGrid = require('../lib/jobGrid');

describe('jobGrid', function () {

	it('should return 4 coordinates', function() {

		var coords = jobGrid(4);

		expect(coords).to.be.an.array;
		expect(coords).to.have.length(4);

		expect(coords[0]).to.deep.equal({ x: 2, y: 0, h: 5, w: 6 });
		expect(coords[1]).to.deep.equal({ x: 2, y: 6, h: 5, w: 6 });
		expect(coords[3]).to.deep.equal({ x: 7, y: 0, h: 5, w: 6 });
		expect(coords[6]).to.deep.equal({ x: 7, y: 6, h: 5, w: 6 });

	});

	it('should return 5 coordinates', function() {

		var coords = jobGrid(5);

		expect(coords).to.be.an.array;
		expect(coords).to.have.length(5);

		expect(coords[0]).to.deep.equal({ x: 2, y: 0, h: 5, w: 4 });
		expect(coords[1]).to.deep.equal({ x: 2, y: 4, h: 5, w: 4 });
		expect(coords[2]).to.deep.equal({ x: 2, y: 8, h: 5, w: 4 });
		expect(coords[3]).to.deep.equal({ x: 7, y: 0, h: 5, w: 4 });
		expect(coords[4]).to.deep.equal({ x: 7, y: 4, h: 5, w: 4 });

	});

	it('should return 6 coordinates', function() {

		var coords = jobGrid(6);

		expect(coords).to.be.an.array;
		expect(coords).to.have.length(6);

		expect(coords[0]).to.deep.equal({ x: 2, y: 0, h: 5, w: 4 });
		expect(coords[1]).to.deep.equal({ x: 2, y: 4, h: 5, w: 4 });
		expect(coords[2]).to.deep.equal({ x: 2, y: 8, h: 5, w: 4 });
		expect(coords[3]).to.deep.equal({ x: 7, y: 0, h: 5, w: 4 });
		expect(coords[4]).to.deep.equal({ x: 7, y: 4, h: 5, w: 4 });
		expect(coords[5]).to.deep.equal({ x: 7, y: 8, h: 5, w: 4 });

	});

});