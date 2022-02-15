function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    console.log(username)
    console.log(password)
    if(username=="admin" && password=="user")
    {
        console.log("if works");
        window.location.href="index.html";
        return false;
    }
    else{
        console.log("else works");
        alert("Invalid user")
    }
}