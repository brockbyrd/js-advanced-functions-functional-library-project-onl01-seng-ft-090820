const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      
      for (let [key, value] of Object.entries(collection)) {
        callback(value);
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = [];
      for (let [key, value] of Object.entries(collection)){
        let newValue = callback(value);
        newCollection.push(newValue)
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      let newValue = (!!acc) ? acc : collection[0]
      let i = (!!acc) ? 0 : 1
      for(; i < collection.length; i++) {
        newValue = callback(newValue, collection[i])
      }
      return newValue;
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          return collection[i]
        }
      }
      return undefined
    },

    filter: function(collection, predicate){
      let newCollection = [];
      for (let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          newCollection.push(collection[i])
        }
      }
      return newCollection;
    },

    size: function(collection){
      let i = 0;
      for(let [k, v] of Object.entries(collection)){
        i++
      }
      return i;
    },

    first: function(array, n){
      let newCollection = [];
      let count = (!!n) ? n : 1
      if (count == 1)
        return array[0];
      for (let i = 0; i < count; i++){
        newCollection.push(array[i])
      }
      return newCollection
    },

    last: function(array, n){
      let newCollection = [];
      let count = (!!n) ? n : 1
      let current = 0;
      if (count == 1)
        return array[array.length - 1]
      for (let i = array.length - 1; current != count; i--){
        newCollection.unshift(array[i])
        current++
      }
      return newCollection;
    },

    compact: function(array){
      let newCollection = [];
      for(let i = 0; i < array.length; i++){
        if (array[i])
          newCollection.push(array[i])
      }
      return newCollection
    },

    sortBy: function(array, callback){
      let newCollection = [...array];
      return newCollection.sort(function(a,b){
        return callback(a) - callback(b)
      })
    },

    flatten: function(array, shallow){
      if (!!shallow)
        return array.flat()
      else
        return array.flat(Infinity)
    },

    uniq: function(array, sorted, callback) {
      let newCol =[];
      for (let i=0; i<array.length; i++) {
        let instance = 0;
        for (let n=0; n<newCol.length; n++) {
          if (!!callback) {
            if (callback(array[i])==callback(newCol[n]))
              instance++;
          }
          if (array[i]==newCol[n])
            instance++;
        }
          if (instance > 0) {}
          else
            newCol.push(array[i])
      }
      console.log(newCol)
      return newCol;
    },

    keys: function(objects) {
      let newCol = [];
      for (let [key] of Object.entries(objects)) {
        newCol.push(key);
      }
      return newCol
    },

    values: function(objects) {
      let newCol = [];
      for (let [key, value] of Object.entries(objects)) {
        newCol.push(value);
      }
      return newCol
    },

    functions: function(object) {
      let newCol = [];
      for (let [key, value] of Object.entries(object)) {
        if (typeof value == 'function') 
          newCol.push(key);
      }
      return newCol
    },




  }
})()

fi.libraryMethod()
