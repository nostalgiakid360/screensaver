/***degree****/
//get the degree of the current temperature  of the weather condition
//alert('this code is working');
//prompt('welcome benjamin please enter your name');
//prompt('and also enter your username');


/***declare varables***/
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const day   = today.getDay();
const date  = today.getDate();
const hour = today.getHours();
const min  = today.getMinutes();
const bg = document.getElementsByTagName('body');
let greeting;

/***create the greeting code****/

if(hour > 17){
     greeting = 'Good Evening!!!';
     document.body.style.backgroundImage="url('img/night.jpg')";
}else if(hour > 11) {
    greeting ='Good afternoon!!';
    document.body.style.backgroundImage="url('img/afternoon.jpg')";
}else if(hour  > 0){
    greeting = 'Good morning!!!';
    document.body.style.backgroundImage="url('img/morning.jpg')";
}else{
    greeting = 'Welcome!';
}

const msg1= document.getElementById('message-date');
msg1.innerHTML = "0" + hour + ':' + min +'';

const msg= document.getElementById('message-note');
msg.innerHTML = greeting + '!'+'<br\>' + 'bennie,';



/***copywrite****/

const copy = document.getElementById('footer-copyright');
 copy.innerHTML = '<p>Copyright &copy' + year + '</p>';

 /****todays date **/

 const currentDate = document.getElementById('currentDate');
 currentDate.innerHTML = date + '/' + month + '/' + year;






