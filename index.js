const transactions = [
    ["income", 1000],
    ["income", 1500],
    ["expense", 500],
    ["expense", 300],
    ["income", 700],
];

/* --------- Part 1 --------- */
/* --------- Task 1 --------- */
const incomeArray = (array) => {
    return array.filter(num => num[0] === 'income');
}
console.log(incomeArray(transactions));


// /* --------- Task 2 --------- */
const expenseArray = (array) => {
    return array.filter(num => num[0] === 'expense');
}
console.log(expenseArray(transactions));


/* ------------------------------------------------------------ */


/* --------- Part 2 --------- */
/* --------- Task 3 --------- */
const totalIncome = (array) => {
    const sum = array.filter(num => num[0] === 'income');
    return sum.reduce( (total, number) => total + number[1], 0);
}
console.log(totalIncome(transactions));


/* --------- Task 4 --------- */
const totalExpense = (array) => {
    return array.filter(num => num[0] === 'expense').reduce( (total, number) => total + number[1], 0); // another way to write the return
}
console.log(totalExpense(transactions));


/* ------------------------------------------------------------ */

/* --------- Part 3 --------- */
/* --------- Task 5 --------- */
const netTotal = (array) => {
    return totalIncome(array) - totalExpense(array);
}
console.log(netTotal(transactions));

/* --------- Task 6 --------- */
const newTransactions = (array) => {
    return array.filter(num => num[1] >= 500);
}
console.log(newTransactions(transactions));