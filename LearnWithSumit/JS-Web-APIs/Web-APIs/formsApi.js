function myFunction() {
    const inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
      document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }
  }
