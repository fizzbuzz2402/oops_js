// function makeEmployee(name, email, annualPay){
// 	const employee = {};
// 	employee.name = name;
// 	employee.email = email;
// 	employee.annualPay = annualPay;
// 	employee.computePay = function(){
// 		return this.annualPay/52;
// 		// employees paid every week. 
// 	}
// 	return employee;
// }
// console.log(makeEmployee('Joe', 'joe@git.com', 100000));

// function Employee(name, email, annualPay){
// 	console.log(this);
// 	this.name = name;
// 	this.email = email;
// 	this.annualPay = annualPay;
// }
// const e1 = new Employee("Joe", "joe@git.com", 100000);

// Employee.prototype.computePay = function(){
// 	return this.annualPay/52;
// 	// employees paid every week. 
// }

class Employee{
	constructor(name, email, annualPay){
		this.name = name;
		this.email = email;
		this.annualPay = annualPay;
	}
	computePay(){
		return this.annualPay/52;
	}
}

class Contractor extends Employee{
	constructor(name, email, annualPay, payDays){
		super(name, email, annualPay)
		this.payDays = payDays;
	}
	computePay(){
		console.log(this.annualPay/365);
		return this.annualPay/365 * this.payDays
	}
}