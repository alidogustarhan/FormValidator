const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');




function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
    //HTML aç 1 er div boş bırakmışız.İşte onu mesaj için bıraktık.
}

function checkPasswords (input1,input2) {
    if(input1.value !== input2.value) {
        error( input2,'Parolalar Eşleşmiyor...');
    }
}

function success(input) {
    input.className = 'form-control is-valid';
}

function checkLength(input,min,max) {
    if(input.value.length < min) {
        error(input,`${input.id} en az ${min} karakter olmalıdır.`)
    }else if (input.value.length > max){
        error(input,`${input.id} en fazla ${max} karakter olmalıdır.`)
    }else {
        success();
    }
}



function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Submit butonu html kısmında oluşturduğumuz form div i 
    // içerisindeki bilgileri backend e göndermekle sorumludur. 
    // Bu yüzden bu butona bastığımızda yapısı gereği sayfayı yeniler. 
    // Biz bunu şuan devredışı bırakmak istediğimiz için bu e.preventDefault 
    // kısmını yazdık.

    if(username.value === '') {
        error(username, 'username gerekli');
    }else {
        success(username);
    }
 
    if(email.value === '') {
        error(email, 'email gerekli');
    }else if(!validateEmail(email.value)) {
        error(email, 'düzgün bir mail adresi giriniz');
    }    
    else {
        success(email);
    }

    if(password.value === '') {
        error(password, 'password gerekli');
    }else {
        success(password);
    }
    
    if(repassword.value === '') {
        error(repassword,'repassword gerekli' );
    }else {
        success(repassword);
    }
    checkPasswords(password,repassword);
    checkLength(username,7,15);
    checkLength(password,6,15);
    
    
});