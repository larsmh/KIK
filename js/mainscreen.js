var customerList;

function sendEmail(){
	
}

function displayList(){;
    var info = '';
	customerList = new CustomerList();
	for(i=0; i<customerList.list.length; i++){
		info+='<option value='+customerList.list[i].name+'> ';
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
	var names = ["nils", "per", "ola"]
	var emails =["mail1@mail.com", "per@mail.com", "ola@mail.com"]
	for(i=0; i<names.length; i++){
		name = names[i];
		email = emails[i];
		customer = new Customer(name, email);
		this.list[this.list.length] = customer;
	}
	/*real code
	do query
	while(next){
		name=query
		email=query
		customer = new Customer(name, email);
		this.list[this.list.length] = customer;
	}
	*/
}

/*	==================
	Customer class
	==================*/
var Customer = function(name, email){
	this.name = name;
	this.email = email;
}