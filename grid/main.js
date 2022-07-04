
let form = document.querySelector("form");
let id = document.querySelector("#id");
let pass = document.querySelector("#pass");
let pass2 = document.querySelector("#pass2");
let email = document.querySelector("#email");
let btn = document.querySelector("#btn");




form.addEventListener("submit",(e)=>{
    e.preventDefault();
  
  checkInput();
  //checkInput? alert("succeesul"): "";

})

function checkInput(){
    const idVallue = id.value.trim();
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();
    const pass2Value = pass2.value.trim();

    if(idVallue ==""){
        setError(id, "id not blank");
    }else{
        setSuccess(id);
    }
    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setError(email, 'Not a valid email');
	} else {
		setSuccess(email);
	}

    if(passValue=="" ){
        setError(pass, "password mst fill");
    }
    else{
        setSuccess(pass);
    }
    if(pass2Value ==""){
        setError(pass2, "password2 mst fill");
    }else if(passValue !==pass2Value){
        setError(pass2, "pass does not match");
    }else{
        setSuccess(pass2);
    }

   
}

 function setError(input,massage){
    let formControl = input.parentElement;
    let small = formControl.querySelector('small');

    small.innerText = massage;

    formControl.className = 'form-control error';
}
function setSuccess(input){
    let formControl = input.parentElement;
    formControl.className = 'form-control success';

}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}