function login(){

let role=document.getElementById("role").value;

if(role=="member"){
    window.location.href="member.html";
}
else{
    window.location.href="manager.html";
}

}