var Graph = require('algorithms').DataStructures.Graph;

var f = [9,2,2,1,1,1,1];

var g = new Graph(false);
for(var index in f) {
    g.addVertex(index);
}
var size = g.vertices.size;
for(var i = 0; i < size; i++) {
    satisfy(i, f, g);
}

function pickFirstAvailable(i,f,g) {
    for(var j = i+1; j < g.vertices.size; j++) {
        if(g.neighbors(j).length < f[j] && g.neighbors(j).indexOf(i.toString()) === -1) {
        console.log("i", i);
        console.log("j", j);
        console.log("J neighbors",g.neighbors(j))
        console.log("i neighbors", g.neighbors(i))
        console.log("j in i",g.neighbors(j).indexOf(i.toString()))
            return j
        }
    }
    return -1;
}

function satisified(i,f,g) {
    return f[i] === g.neighbors(i).length;
}

function satisfy(i,f,g) {
    var z = 5;
    while(!satisified(i,f,g) ) {
        n = pickFirstAvailable(i,f,g);
        console.log("THERE", i, f, n);
        if(n >= 0) {
            g.addEdge(i, n);
        }else{
            while(!satisified(i,f,g) ) {
                console.log("IN HERE");
                n = f.push(1)-1;
                g.addVertex(n);
                g.addEdge(i,n);
            }
        }
        z++;
    }
}

for(var k = 0; k < g.vertices.size; k++) {
    console.log("ERE", k, g.vertices.size);
    satisfy(k, f, g);
}

console.log(g);
