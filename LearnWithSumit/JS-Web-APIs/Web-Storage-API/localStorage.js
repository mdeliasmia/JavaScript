function setLocalStrorage(){
    let userName=document.querySelector('#userName').value ;
    localStorage.setItem("name", userName);
}
function getLocalStorage(){
    let name= localStorage.getItem("name");
    let displayName=document.querySelector('#displayUserNamw');
    displayName.innerHTML=name;
}
function clearLocalStorageName(){
    localStorage.removeItem("name");
}