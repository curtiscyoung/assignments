var employees = [];

function Employee(Name, JobTitle, Salary, Status){
    this.Name = Name;
    this.JobTitle = JobTitle;
    this.Salary = Salary;
    this.Status = Status || "Full Time";
    this.printEmployeeForm = function(){
        console.log (this.Name + " is a " + this.JobTitle + " with a Salary of " + " and his status is " + this.Status;)
        
    }
    
}


var Curtis = new Employee("Curtis", "Junior Programmer", "50k", "Contract");

var SerIllinPayne = new Employee("Ser Illin Payne", "Royal Executioner", "As many decapitations as he likes");

var SandorClegane = new Employee("Sandor 'The Hound' Clegane", "King Joffrey's loyal dog", "1000 Gold", "Part Time");


Curtis.printEmployeeForm;

SerIllinPayne.printEmployeeForm;

SandorClegane.printEmployeeForm;

for (var i = 0; i < 4; i++){
    employees.push(Curtis, SerIllinPayne, SandorClegane);
};

console.log(employees);