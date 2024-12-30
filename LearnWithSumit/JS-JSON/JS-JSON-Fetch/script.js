const display= document.querySelector('#demo');
async function fetchData() {
    const response = await fetch('demo.txt');
    //console.log(response);

    const data= await response.json();
    //console.log(data);

    // const textData= await response.text();
    // const data = JSON.parse(textData);
    // console.log(data);
    return data;
}

let resultData =  fetchData().then((response)=>{
    display.innerHTML="Name = "+response.name +", Age = "+ response.age +", Pates = ["+response.pets[0].animal+", name = "+ response.pets[0].name+"]";
});
//console.log(resultData);

