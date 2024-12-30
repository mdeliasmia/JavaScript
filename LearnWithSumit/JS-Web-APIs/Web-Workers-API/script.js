let w;
function startWorker() {
    //Browser worker Support/Available
    if (typeof (Worker) !== "undefined") {
        // If worker is not allrady define
        if (typeof (w) == "undefined") {
            //create a new worker
            w = new Worker("worker.js");
        }
        //Listening for worker event/message
        w.onmessage = function (event) {
            document.getElementById("demo").innerHTML = event.data;
        };
    } else {
        alert("Your Browser Doesn't web worker API");
    }
}
function stopWorker() {
    if (typeof (Worker) !== "undefined") {
        w.terminate();
        //Reuse the Web Worker
        // worker is define for StartNew Worker
        w=undefined;
    } else {
        alert("Your Browser Doesn't web worker API");
    }
}
