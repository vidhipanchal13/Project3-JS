//Exersice 3 using regular expression

console.log('exersice 3');

const name1 = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validUser = false;
let validEmail = false;
let validPhone = false;
$('#success').hide();
$('#failure').hide();


// console.log(name, email, phone);

name1.addEventListener('blur',() => {
    console.log('Name is blured');

    //validate name here
    let regx = /^[a-zA-Z]([0-9a-zA-Z]){0,20}$/;
    let str = name1.value;
    console.log(regx, str)
    if(regx.test(str))
    {
        console.log("Your name is Valid");
        name1.classList.remove('is-invalid');
        validUser = true; 

    }else{
        console.log('Your name is not Valid');
        name1.classList.add('is-invalid');
        validUser = false; 
    }
})

email.addEventListener('blur',() =>{
    console.log('email is blured');

    //validate email here
    let regx = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regx, str)
    if(regx.test(str))
    {
        console.log("Your email is Valid");
        email.classList.remove('is-invalid');
        validEmail = true;

    }else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;

    }
})

phone.addEventListener('blur',() => {
    console.log('phone number is blured');

    //validate phone number here
    let regx = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regx, str)
    if(regx.test(str))
    {
        console.log("Your phone number is Valid");
        phone.classList.remove('is-invalid');
        validPhone = true;

    }else{
        console.log('Your phone number is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;

    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("you clicked on submitted");
    console.log(validUser, validPhone, validEmail);


    //submit your form here
    if(validUser && validEmail && validPhone){
        console.log("phone user and email are valid.submitting the form");
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#success').show();


    }else{
        console.log("One of phone, email or user are not valid. Hence not submitting the form. please correct the error and try again");
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        $('#failure').show();


    }
    
})