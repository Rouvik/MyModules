/*
matrix.js
A simple optimised matrix class for mathematical operations---

Accessing matrix: 
- Use this.value to set or access the matrix safely without pollution

- Use this.val to access and set the matrix faster[there are chances of invalid data so check your data or use this.value]

Other properties:
- this.rows
- this.cols

The rows and cols are only set as a beginning data...

Rows and cols can be increased later

*/
class matrix
{
  constructor(rows, cols)
  {
    //variables
    this.val = Array.from(Array(rows), () => Array(cols).fill(0));
  }
  //GETTERS & SETTERS---
  get value() //gets the matrix
  {
    return this.val;
  }
  
  set value(v) //sets value to matrix
  {
    if (v.length && v[0].length)
    {
      for (let i = 0; i < v.length; i++)
        for (let j = 0; j < v[i].length; j++)
        {
          if (typeof v[i][j] != 'number')
          {
            console.error('Error: The given matrix contains non numeral values');
            return;
          }
        }
      this.val = v;
      this.rows = v.length;
      this.cols = v[0].length;
    } else
    {
      console.error('Error: The given value is not a matrix');
      return;
    }
  }
  
  set val(value) {
    this.rows = value.length;
    this.cols = value[0].length;
    this.val = value;
  }
  
  get rows() //returns no. of rows of the matrix
  {
    return this.val.length;
  }
  
  set rows(value)
  {
  	if(this.rows < value)
  	{
  		for(let i = 0; i < value-this.rows; i++)
  			this.val.push(Array(this.cols).fill(0));
  	}else if (this.rows == value)
  	{
  	  console.warn('Same row size request, not updated');
  	}else
  	{
  		for(let i = 0; i < value-this.rows; i++)
  			this.val.pop();
  	}
  }
  
  get cols() //returns no. of cols of the matrix at row 0
  {
    return this.val[0].length;
  }
  
  set cols(value)
  {
    let diff =  value - this.rows;
  	if(this.rows < value)
  	{
  	  for (let i = 0; i < this.val.length; i++)
  	  {
  	    this.val[i].splice(this.rows - diff - 1, diff);
  	  }
    } else {
  	  for (let i = 0; i < this.val.length; i++)
  	  {
  	    this.val[i].concat(new Array(diff, ()=>0));
  	  }
    }
  }
  
  //METHODS
  //Special methods---
  
  // replaces non numeral values and NaNs from
  // matrix according to argument[by default it is 0]
  sanitize(value = 0)
  {
    if (typeof value != 'number')
    {
      console.error('Error: Only numbers allowed in matrix');
      return;
    }
    for (let i = 0; i < this.val.length; i++)
      for (let j = 0; j < this.val[i].length; j++)
        if (this.val[i][j] == NaN ||
          typeof this.val[i][j] != 'number')
          this.val[i][j] = value;
  }
  
  // checks for non numeral values in matrix
  check(m)
  {
    for (let i = 0; i < m.val.length; i++)
      for (let j = 0; j < m.val[i].length; j++)
      {
        if (typeof m.val[i][j] != 'number')
          return false;
      }
    return true;
  }
  
  // fills the matrix with a number
  fill(value)
  {
    if (typeof value != 'number')
    {
      console.error('Error: Only numbers allowed');
      return;
    }
    for (let x of this.val)
      x.fill(value);
  }
  
  // returns copy of a matrix
  copy()
  {
    
    /*let array = new matrix(this.val.length, this.val[0].length);
    for (let i = 0; i < this.val.length; i++)
      for (let j = 0; j < this.val[i].length; j++)
        array.val[i][j] = this.val[i][j];
    return array;*/
  }
  
  // returns string representation of a matrix
  toString()
  {
    let str = '';
    for (let x of this.val)
    {
      for (let y of x)
        str += y + ' ';
      str += '\n';
    }
    return str;
  }
  
  // returns array representation of matrix
  toOneDim()
  {
    let array = [];
    for (let x of this.val)
      for (let y of x)
        array.push(y);
    return array;
  }
  
  //Mathematical methods---
  
  //adds up data and returns it
  sum()
  {
    let sum = 0;
    for (let x of this.val)
      for (let y of x)
        sum += y;
    return sum;
  }
  
 //multiplies up data and returns it
  product()
  {
    let product = 1;
    for (let x of this.val)
      for (let y of x)
        product *= y;
    return product;
  }
  
  // adds a value or matrix to the matrix
  add(value)
  {
    if (typeof value == 'number')
    {
      for (let i = 0; i < this.val.length; i++)
        for (let j = 0; j < this.val[i].length; j++)
          this.val[i][j] += value;
    } else if (value.val)
    {
      let cols = Math.min(this.val[0].length, value.val[0].length);
      for (let i = 0; i < this.val.length; i++)
        for (let j = 0; j < cols; j++)
          this.val[i][j] += value.val[i][j];
    } else
    {
      console.error('Error: Only numbers or matrixes allowed');
      return;
    }
  }
  
  // subtracts a value or matrix to the matrix
  subtract(value)
  {
    if (typeof value == 'number')
    {
      for (let i = 0; i < this.val.length; i++)
        for (let j = 0; j < this.val[i].length; j++)
          this.val[i][j] -= value;
    } else if (value.val)
    {
      let cols = Math.min(this.val[0].length, value.val[0].length);
      for (let i = 0; i < this.val.length; i++)
        for (let j = 0; j < cols; j++)
          this.val[i][j] -= value.val[i][j];
    } else
    {
      console.error('Error: Only numbers or matrixes allowed');
      return;
    }
  }
  
  // multiplies a value or matrix to the matrix
  multiply(value)
  {
    if (typeof value == 'number')
    {
      for (let i = 0; i < this.val.length; i++)
        for (let j = 0; j < this.val[i].length; j++)
          this.val[i][j] *= value;
    } else if (value.val)
    {
      let cols = Math.min(this.val[0].length, value.val[0].length);
      for (let i = 0; i < this.val.length; i++)
        for (let j = 0; j < cols; j++)
          this.val[i][j] *= value.val[i][j];
    } else
    {
      console.error('Error: Only numbers or matrixes allowed');
      return;
    }
  }
  
  // divides a value or matrix to the matrix
  divide(value)
  {
    if (typeof value == 'number')
    {
      for (let i = 0; i < this.val.length; i++)
        for (let j = 0; j < this.val[i].length; j++)
          this.val[i][j] /= value;
    } else if (value.val)
    {
      let cols = Math.min(this.val[0].length, value.val[0].length);
      for (let i = 0; i < this.val.length; i++)
        for (let j = 0; j < cols; j++)
          this.val[i][j] /= value.val[i][j];
    } else
    {
      console.error('Error: Only numbers or matrixes allowed');
      return;
    }
  }
  
  // does matrix multiplication of 2 matrixes and returns a new matrix object
  matrixMultiply(m)
  {
    if (m.val[0].length == this.val.length)
    {
      let m3 = new matrix(m.val.length, this.val[0].length);
      for (let i = 0; i < m.val.length; i++)
      {
        for (let j = 0; j < this.val[0].length; j++)
        {
          let sum = 0;
          for (let k = 0; k < this.val.length; k++)
            sum += m.val[i][k] * this.val[k][j];
          m3.val[i][j] = sum;
        }
      }
      return m3;
    } else
      console.warn('Warn: Rows of m1 != cols of m2...proceeding');
  }
}
