//https://jsonplaceholder.typicode.com/     for API
function sendRequest(method, url, data) {
    const promise = new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            //handaling Application Error
            if (this.status >= 400) {
                reject`There was application error and the response status is ${this.status}
                and response text is ${this.statusText}
                `;
            } else {
                resolve(this.response);
            }
        };
        xhr.open(method, url);
        xhr.responseType = "json";
        xhr.send(data);
    });
    return promise;
}

function getData() {
    sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1").then(
        (responseData) => {
            console.log(responseData);
        }).catch(
            (err) => {
                console.log(err);
            });
}

function sendData() {
    sendRequest(
        "POST",
        "https://jsonplaceholder.typicode.com/posts",
        JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }))
        .then((responseData) => {
            console.log(responseData);
        })
        .catch((err) => {
            console.log(err);
        });
}
