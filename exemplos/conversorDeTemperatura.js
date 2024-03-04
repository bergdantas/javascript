function converterCF(){
    var celcius = document.getElementById("celcius").value;
    document.write((celcius*9/5)+32 + " " + "Fahrenheit");  
}

function converterFC(){
    var fahrenheit = document.getElementById("fahrenheit").value;
    document.write((fahrenheit-32)*5/9 + " " + "Celcius");  
}