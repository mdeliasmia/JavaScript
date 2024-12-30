function modifier1(strings, ...values) {
    // console.log(strings);
    // console.log(values);

    const m = strings.reduce((prev, currentv) => {
        return prev + currentv + (values.length ? "Mr. " + values.shift() : "")
    }, "");
    return m;
}
var player1 = "Sakib";
var player2 = "Rakib";

// console.log(`
// We have ${player1} and ${player2}
// in our cricket team.    
// `);

console.log(modifier1`We have ${player1} and ${player2} in our cricket team.`);