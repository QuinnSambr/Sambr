var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' ,  hour: "numeric", minute: "numeric", second: "numeric", };
var today  = new Date();
var formattedText = (today.toLocaleDateString("en-US", options) + "<br> Client: -  " + navigator.userAgent );
document.getElementById("userInfo").innerHTML =  formattedText;