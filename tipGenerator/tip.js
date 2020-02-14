const tipGenerator = bill => {
  return tip => {
    return tip * bill;
  };
};

const tip = tipGenerator(100);
console.log(tip(0.15));
