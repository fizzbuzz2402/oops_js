function makeEmployee(name, email, annualPay){
	const employee = {};
	employee.name = name;
	employee.email = email;
	employee.annualPay = annualPay;
	employee.computePay = function(){
		return this.annualPay/52;
		// employees paid every week. 
	}
	return employee;
}
console.log(makeEmployee('Joe', 'joe@git.com', 100000));
