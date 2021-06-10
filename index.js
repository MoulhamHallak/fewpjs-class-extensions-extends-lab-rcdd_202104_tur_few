// Your code here

class Polygon {
  constructor(array) {
    this.sides = array;
  }
  
  get countSides() {
    return this.sides.length;
  }
  
  get perimeter() {
    return this.sides.reduce((acc, curr) => acc + curr, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if(this.countSides === 3){
      return true;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if(this.countSides === 4){
      return true;
    }
  }
  
  get area(){
    return this.sides.reduce((acc, curr) => acc * curr, 1)
  }
}