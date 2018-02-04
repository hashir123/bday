function signin(){
    var name = document.forms["login"]["name"].value;
    var pass = document.forms["login"]["pass"].value;    
    if(name=="abc" || name=="asia" || name=="ASIA" && pass == "123"){
        alert("login");
        window.location.href="./gallery/gallery.html";        
    }
    else{
        alert("Wrong Password or User Name");
        window.location.href="index.html";

    }
}