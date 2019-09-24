const findBestEmployee = (employees) => {
  const entries = Object.entries(employees);
  let max = 0;
  let name;
  for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
    if (max < value) {
      max = value;
      name = key;
    }
  }
  return name;
};

const worker = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(worker));
