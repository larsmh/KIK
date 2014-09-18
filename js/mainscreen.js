var customerList;

function sendEmail(){
	var name = document.getElementById("customer").value;
	var sent = false;
	for(i=0; i<customerList.list.length; i++){
		if(name==customerList.list[i].name){
			sendToThisEmail(customerList.list[i].email);
			sent=true;
			break;
		}
	}
	if(!sent)
		alert("Vennligst velg en gyldig kunde");
}

function sendToThisEmail(email){
	alert("En epost har blitt sendt til "+email);
	//code for sending email to parameter address
}

function displayList(){;
    var info = '';
	customerList = new CustomerList();
	for(i=0; i<customerList.list.length; i++){
		info+='<option value='+customerList.list[i].name+' id='+i+'> ';
	}
    	
    document.getElementById("customerlist").innerHTML += info;
}

function chooseCustomer(){

}

/*	==================
	CustomerList class
	==================*/
var CustomerList = function(){
	this.list = [];
	this.getCustomers();
}
	
CustomerList.prototype.getCustomers = function(){
	var customer;
	var name;
	var email;
	//For testing purposes
	var names = ["Rema 1000", "Statoil", "Bunnpris", "Jernia", "Bohus", "Bouvet"];
	var emails =["rema1000@mail.com", "statoil@mail.com", "bunnpris@mail.com", "jernia@mail.com", "bohus@mail.com", "Bouvet@mail.com"];
	for(i=0; i<names.length; i++){
		name = names[i];
		email = emails[i];
		customer = new Customer(name, email);
		this.list[this.list.length] = customer;
	}
	/*
	$.getJSON('database.php', function(data){
		createList(data);
	});*/
}

/*	==================
	Customer class
	==================*/
var Customer = function(name, email){
	this.name = name;
	this.email = email;
}