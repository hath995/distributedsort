
function generateTree(num) {
    var tree = {};
    for(var i = 1; i <= num; i++) {
        tree[i] = {};
        for(var j = 1; j < i; j++) {
            var diff = i - j;
            if(diff != j) {
                tree[i][j] =  diff;
            }
        }
    }
    return tree;
}

var n = 0;

function enumerateLessons(tree, numfield, paths) {
    var visitedaleaf = false;
    for(var branch in tree) {
        if(!numfield[branch]) {
            for(var leaf in tree[branch]) {
                //console.log(branch, leaf, tree[branch][leaf]);
                if(!numfield[leaf] && !numfield[tree[branch][leaf]]) {
                    visitedaleaf = true;
                    var numfieldcp = numfield.slice();
                    numfieldcp[branch] = true;
                    numfieldcp[leaf] = true;
                    numfieldcp[tree[branch][leaf]] = true;
                    var pathcp = paths.slice();
                    pathcp.push([branch, leaf, tree[branch][leaf]]);
                    enumerateLessons(tree, numfieldcp, pathcp);
                }
            }
            
        }
    }
    if(!visitedaleaf) {
        console.log(paths);
    }
}

var SIZE = 15
var bitfield = new Array(SIZE);
bitfield.forEach(function(x,ind,arr) {
    arr[ind] = false;
})


var seventree = generateTree(SIZE);

enumerateLessons(seventree, bitfield, []);
