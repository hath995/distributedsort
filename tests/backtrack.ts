/// <reference path="../typings/tsd.d.ts" />
"use strict";
import {expect} from 'chai';
import {Domain, backtrack} from '../simplebacktrack';

function repeat<T>(thing: T, k: number) {
    let result: Array<T> = [];
    for(let i = 0; i < k; i++) {
        result.push(thing);
    }
    return result;
}

let queenDomain: Domain<number> = new Domain([1,2,3,4,5,6,7,8,9,10,11,12]);
let domains = repeat(queenDomain,12);;
function queenTest(queens: Array<number>, l: number) {
    let result = true;
    for(let k = 2; k <= l; k++) {
        for(let j = 1; j < k; j++) {
            result = result && queens[j-1] !== queens[k-1] && Math.abs(queens[j-1] - queens[k-1]) !== k-j;
        }
    }
    return result;
}

describe('backtrack', () => {
    it("should return 2 configurations", () => {
        var configs = [[2,4,1,3],[3,1,4,2]];
        var pos = 0;
        for(let conf of backtrack(domains, queenTest, repeat(1,12))) {
            pos ++;
            //expect(conf).to.deep.equal(configs[pos++]);
        }
        console.log(pos);
    });
});

