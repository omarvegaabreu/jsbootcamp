const data = {
  get location() {
    return this._location;
  },
  set location(value) {
    this._location = value.trim();
  }
};

data.location = "             Miami";
console.log(data.location);
