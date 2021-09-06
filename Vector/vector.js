// class for 2D vector
function vec2(x, y) {
  if (x instanceof vec3 || x instanceof vec2) {
    this.x = x.x;
    this.y = x.y;
  } else if (typeof x == 'number' && typeof y == 'number') {
    this.x = x;
    this.y = y;
  } else if (x == undefined && y == undefined) {
    this.x = 0;
    this.y = 0;
  } else {
    throwError('No overloaded constructor => (' + typeof x + ', ' + typeof y + ') exists for vec2');
  }

  // safely re-initialises the x and y of  vec2
  this.set = (x, y) => {
    if (x instanceof vec3 || x instanceof vec2) {
      this.x = x.x;
      this.y = x.y;
    } else if (typeof x == 'number' && typeof y == 'number') {
      this.x = x;
      this.y = y;
    } else if (x == undefined && y == undefined) {
      this.x = 0;
      this.y = 0;
    } else {
      throwError('Cannot initialise with values => (' + typeof x + ', ' + typeof y + ') in vec2');
    }
    return this;
  }

  // adds a value or vec2 to vector
  this.add = (value) => {
    let v = new vec2(this);
    if (value instanceof vec2) {
      v.x += value.x;
      v.y += value.y;
    } else if (typeof value == 'number') {
      v.x += value;
      v.y += value;
    } else {
      throwError('Cannot add value of type => ' + typeof value);
    }
    return v;
  }

  // subtracts a value or vec2 to vector
  this.subtract = (value) => {
    let v = new vec2(this);
    if (value instanceof vec2) {
      v.x -= value.x;
      v.y -= value.y;
    } else if (typeof value == 'number') {
      v.x -= value;
      v.y -= value;
    } else {
      throwError('Cannot subtract value of type => ' + typeof value);
    }
    return v;
  }

  // multiplies a value or vec2 to vector
  this.multiply = (value) => {
    let v = new vec2(this);
    if (value instanceof vec2) {
      v.x *= value.x;
      v.y *= value.y;
    } else if (typeof value == 'number') {
      v.x *= value;
      v.y *= value;
    } else {
      throwError('Cannot multiply value of type => ' + typeof value);
    }
    return v;
  }

  // divides a value or vec2 to vector
  this.divide = (value) => {
    let v = new vec2(this);
    if (value instanceof vec2) {
      v.x /= value.x;
      v.y /= value.y;
    } else if (typeof value == 'number') {
      v.x /= value;
      v.y /= value;
    } else {
      throwError('Cannot divide value of type => ' + typeof value);
    }
    return v;
  }

  // returns the square of magnitude
  this.magnitudeSquare = () => {
    return this.x ** 2 + this.y ** 2;
  }

  // returns magnitude
  this.magnitude = () => {
    return this.magnitudeSquare() ** 0.5;
  }

  // returns normal of vector
  this.normalize = () => {
    return this.divide(this.magnitude());
  }

  // returns distance between 2 vectors
  this.distance = (v) => {
    return ((this.x - v.x) ** 2 + (this.y - v.y) ** 2) ** 0.5;
  }

  // throws error for vec2 specifically
  function throwError(message) {
    throw new Error('vec2 error: ' + message);
  }

}

// class for 3D vector
function vec3(x, y, z) {
  if (x instanceof vec2 || x instanceof vec3) {
    this.x = x.x;
    this.y = x.y;
    this.z = y || x.z || 0;
  } else if (typeof x == 'number' && typeof y == 'number' && typeof z == 'number') {
    this.x = x;
    this.y = y;
    this.z = z;
  } else if (x == undefined && y == undefined && z == undefined) {
    this.x = 0;
    this.y = 0;
    this.z = 0;
  } else {
    throwError('No overloaded constructor => (' + typeof x + ', ' + typeof y + ', ' + typeof z + ') exists for vec3');
  }

  this.set = (x, y, z) => {
    if (x instanceof vec2) {
      this.x = x.x;
      this.y = x.y;
      this.z = y || 0;
    } else if (typeof x == 'number' && typeof y == 'number' && typeof z == 'number') {
      this.x = x;
      this.y = y;
      this.z = z;
    } else if (x == undefined && y == undefined && z == undefined) {
      this.x = 0;
      this.y = 0;
      this.z = 0;
    } else {
      throwError('Cannot initialise with values => (' + typeof x + ', ' + typeof y + ', ' + typeof z + ') in vec3');
    }
    return this;
  }

  // adds a value or vec3 to vector
  this.add = (value) => {
    let v = new vec3(this);
    if (value instanceof vec3) {
      v.x += value.x;
      v.y += value.y;
      v.z += value.z;
    } else if (typeof value == 'number') {
      v.x += value;
      v.y += value;
      v.z += value;
    } else {
      throwError('Cannot add value of type => ' + typeof value);
    }
    return v;
  }

  // subtracts a value or vec3 to vector
  this.subtract = (value) => {
    let v = new vec3(this);
    if (value instanceof vec3) {
      v.x -= value.x;
      v.y -= value.y;
      v.z -= value.z;
    } else if (typeof value == 'number') {
      v.x -= value;
      v.y -= value;
      v.z -= value;
    } else {
      throwError('Cannot subtract value of type => ' + typeof value);
    }
    return v;
  }

  // multiplies a value or vec3 to vector
  this.multiply = (value) => {
    let v = new vec3(this);
    if (value instanceof vec3) {
      v.x *= value.x;
      v.y *= value.y;
      v.z *= value.z;
    } else if (typeof value == 'number') {
      v.x *= value;
      v.y *= value;
      v.z *= value;
    } else {
      throwError('Cannot multiply value of type => ' + typeof value);
    }
    return v;
  }

  // divides a value or vec3 to vector
  this.divide = (value) => {
    let v = new vec3(this);
    if (value instanceof vec3) {
      v.x /= value.x;
      v.y /= value.y;
      v.z /= value.z;
    } else if (typeof value == 'number') {
      v.x /= value;
      v.y /= value;
      v.z /= value;
    } else {
      throwError('Cannot divide value of type => ' + typeof value);
    }
    return v;
  }

  // returns the square of magnitude
  this.magnitudeSquare = () => {
    return this.x ** 2 + this.y ** 2 + this.z ** 2;
  }

  // returns magnitude
  this.magnitude = () => {
    return this.magnitudeSquare() ** 0.5;
  }

  // returns normal of vector
  this.normalize = () => {
    return this.divide(this.magnitude());
  }

  // returns distance between 2 vectors
  this.distance = (v) => {
    return ((this.x - v.x) ** 2 + (this.y - v.y) ** 2 + (this.z - v.z) ** 2) ** 0.5;
  }

  // throws error for vec3 specifically
  function throwError(message) {
    throw new Error('vec3 error: ' + message);
  }

}