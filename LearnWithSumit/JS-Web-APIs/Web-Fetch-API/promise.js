const display = document.querySelector('#display');
/*function getData() {
    fetch('http://127.0.0.1:5500/data.txt')
        //.then(res => console.log(res.json()))
        .then(result => result.text())
        .then(data => {
            console.log("Hello 1");
            display.innerHTML = data;
        });

    console.log("Hello 2");
}*/

//async await
async function getData() {
    let result = await fetch('http://127.0.0.1:5500/data.txt');
    let data = await result.text();
    displayData(data);
    console.log("Hello 2");
}
function displayData(data) {
    console.log("Hello 1");
    display.innerHTML = data;
}