const pipe = (...functions) => () => {
    // your code goes here...
    if (Array.isArray(functions)) {
        let value = val;
        [...functions].map((func) => {
            value = func(value);
        })
        return value;
    }
    return null;
}


const getSalary = (person) => person.salary
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - (grossSalary * .3);

const val = { salary: 10000 };

const result = pipe(
    getSalary,
    addBonus,
    deductTax
)({ salary: 10000 });

console.log(result);
// 7700


