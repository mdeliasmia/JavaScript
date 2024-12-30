async function change_myselect(sel) {
    const dbParam = JSON.stringify({ table: sel, limit: 20 });
    const response = await fetch("https://www.w3schools.com/js/json_demo_html_table.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "x=" + dbParam
    });
    const data = await response.json();

    let text = "<table border='1'>"
    for (let x in data) {
        text += "<tr><td>" + data[x].name + "</td></tr>";
    }
    text += "</table>"
    document.getElementById("demo").innerHTML = text;
}
