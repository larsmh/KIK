var user;

function login(){
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	var department=document.getElementById("department").value;
	if(checkDetails(username, password))
		user = new User(username, password, department);
	else
		alert("Brukernavn og/eller passord er feil");
}

function checkDetails(name, pw){
	//check details in db
	return false;
}

/*	==================
	User class
	==================*/
var User = function(name, pw, dep){
	this.username=name;
	this.password=pw;
	this.department=dep;
}