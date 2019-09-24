const countTotalSalary = (employees) => {
  const values = Object.values(employees);
  let total = 0;
  for (const value of values) {
    total += value;
  }
  return total;
};

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
);
