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
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    if (this.count !== 3) {
      return;
    }
    return ((side1 === side2) && (side1 === side3) && (side2 === side3))
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