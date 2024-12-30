function setsessionStorage(){
    let userName=document.querySelector('#userName').value ;
    sessionStorage.setItem("name", userName);
}
function getsessionStorage(){
    let name= sessionStorage.getItem("name");
    let displayName=document.querySelector('#displayUserNamw');
    displayName.innerHTML=name;
}
function clearsessionStorageName(){
    sessionStorage.removeItem("name");
}
