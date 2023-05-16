class SortedList {
  constructor(items,length) {
  this.items = [] ;
  this.length = this.items.length ;
  }

  add(item) {
    this.items.push(item) ;
    this.items.sort((a,b) => a - b) ;
    this.length = this.items.length ; //why does this need to be in the code, I get it updates it but surely this line in the constructor will do that?
  }

  get(pos) {
    if(pos >= 0 && pos < this.length){
      return this.items[pos] ;
    }else{
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.length > 0){
      return this.items[this.length - 1]
    }else{throw new Error('EmptySortedList');}
  }

  min() {
    if(this.length > 0){
      return this.items[0]
    }else{throw new Error('EmptySortedList');}
  }


  sum() {}

  avg() {}
}

module.exports = SortedList;
