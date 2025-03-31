class Employee {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  // Method to display employee details
  displayDetails() {
    console.log(`ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}`);
  }
}

// Creating Employee objects
const emp1 = new Employee(101, "Alice", 50000);
const emp2 = new Employee(102, "Bob", 60000);
const emp3 = new Employee(103, "Charlie", 55000);

// Storing employees in an array
const employees = [emp1, emp2, emp3];

// Displaying employee details
console.log("Employee Details:");
employees.forEach((emp) => emp.displayDetails());
