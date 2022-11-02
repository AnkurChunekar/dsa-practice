class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  // _hash function generates and returns an index from 0 - 7 (or whatever size defined) using the key passed to it.
  // '_' specfies it can only be used by internal methods.
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  //  Concept of Separate chaining will be used to save data with same hash
  set(key, value) {
    const index = this._hash(key);

    if (!this.dataMap[index]) this.dataMap[index] = [];

    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    const index = this._hash(key);
    if (this.dataMap[index]) {
      for (let item of this.dataMap[index]) {
        if (key === item[0]) return item[1];
      }
    }

    return undefined;
  }

  keys() {
    const result = [];

    for (let item of this.dataMap) {
      if (item) {
        for (let el of item) result.push(el[0]);
      }
    }

    return result;
  }
}

/* 
Write a function to find if two arrays have something in common
*/
// O(n)
const isCommonItemPresent = (arr1, arr2) => {
  const temp = {};
  for (let item of arr1) temp[item] = true;
  for (let item of arr2) if (temp[item]) return true;

  return false;
};

console.log(isCommonItemPresent([1,2,3], [4,5,6]));
console.log(isCommonItemPresent([1,2,3], [4,5,3]));