const countTotalSalary = function(employees) {
  const wagesArr = Object.values(employees);

  let amountWages = 0;

  for (const wages of wagesArr) {
    amountWages += wages;
  }

  return (amountWages);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400