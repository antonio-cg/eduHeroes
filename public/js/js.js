var socket = io.connect('http://localhost:3000');
socket.on('news',function(data){
  console.log(data);
      //	alert ("esta Informacion es servida por webshockets"+data);
});

var numbersonly = function(myfield, e, dec)
{
    var key;
    var keychar;

    if (window.event)
        key = window.event.keyCode;
    else if (e)
        key = e.which;
    else
        return true;
    keychar = String.fromCharCode(key);

// control keys
if ((key==null) || (key==0) || (key==8) || (key==9) || (key==13) || (key==27) )
   return true;

// numbers
else if ((("0123456789").indexOf(keychar) > -1))
   return true;

// decimal point jump
else if (dec && (keychar == "."))
   {
   myfield.form.elements[dec].focus();
   return false;
   }
else
   return false;
}




