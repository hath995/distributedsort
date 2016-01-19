"use strict";
export class Domain<T> {
    items: Array<T>;
    successor: Map<T, T>;
    constructor(items: Array<T>) {
        this.items = items;
        this.successor = new Map();
        for(let i = 0; i < items.length-1; i++) {
            this.successor.set(items[i], items[i+1]);
        }
    }
    succ(item: T) {
        return this.successor.get(item);
    }
    min() {
        return this.items[0];
    }
    max() {
        return this.items[this.items.length-1];
    }
}

export function* backtrack<T>(domain: Array<Domain<T>>, prop: (x:Array<T>, l: number) => boolean, base: Array<T>) {
    let l = 1;
    let doNotPassGo = false;
    start: while(l > 0) {
        if(l > base.length) {
            yield base;
        }else{
            if(!doNotPassGo) {
                base[l-1] = domain[l-1].min();
            }

            while(true) {
                if(prop(base, l) && !doNotPassGo) {
                    l++;
                    continue start;
                }
                if(base[l-1] !== domain[l-1].max()) {
                    if(doNotPassGo) { doNotPassGo = false}
                    base[l-1] = domain[l-1].succ(base[l-1]);
                }else{
                    if(doNotPassGo) { doNotPassGo = false}
                    break;
                }
            }
        }
        l--;
        if(l > 0) {
            doNotPassGo = true;
        }
    }
}


