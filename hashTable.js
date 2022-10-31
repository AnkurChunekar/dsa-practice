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
}
