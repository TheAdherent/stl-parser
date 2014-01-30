var cp = require('child_process')

var stlfile = { minx: '', maxx: '', miny: '', maxy:'', minz: '', maxz: '', facets: '', volume: '' };

var command = cp.spawn('/Users/mac/Downloads/admesh-0.96/admesh', ['/Users/mac/code/stl-parser/gear.stl'])

command.on('error', function(err){
	console.log(err.message)
})

command.stdout.on('data', function(data){
	stlfile.minx = /Min X = (.*),/.exec(data)[1]
	stlfile.maxx = /Max X =\s*(.*)/.exec(data)[1]
	stlfile.miny = /Min Y = (.*),/.exec(data)[1]
	stlfile.maxy = /Max Y =\s*(.*)/.exec(data)[1]
	stlfile.minz = /Min Z = (.*),/.exec(data)[1]
	stlfile.maxz = /Max Z =\s*(.*)/.exec(data)[1]
	stlfile.facets = /Number of facets\s*:\s*(\d*)/.exec(data)[1]
	stlfile.volume = /Volume\s*:\s*(.*)/.exec(data)[1]
	console.log(stlfile)
})