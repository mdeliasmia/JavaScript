function myFunction() {
    const inpObj = document.getElementById("id1");
    if(inpObj.validity.rangeOverflow){
        inpObj.setCustomValidity("You have a range Overflow Erro");
    }
    else if(inpObj.validity.rangeUnderflow){
        inpObj.setCustomValidity("You have a range Under Overflow Erro");
    }
    else if(inpObj.validity.valueMissing){
        inpObj.setCustomValidity("You have a valueMissing Erro");
    }else{
        inpObj.setCustomValidity("You Input OK");
    }

    if (!inpObj.checkValidity()) {
      document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }
  }