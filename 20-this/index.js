function printThis() {
    console.log(this);
}

printThis();

console.log(`---`);
const person = {
    name: "mladen",
    address: {
        zipCode: 31000,
        city: `Osijek`,
        printThis: printThis,
    },
    printThis: printThis,
}
person.printThis();
person.address.printThis();