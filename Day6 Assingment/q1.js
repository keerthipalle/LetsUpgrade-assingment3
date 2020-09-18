

let employees = [
    {
    name: "Keerthi",
    age: 20,
    city: "Hyderabad",
    salary: 40000,
    },
    {
    name: "Gowthami",
    age: 21,
    city: "Bangalore",
    salary: 25000,
    },
    {
    name: "Anusha",
    age: 30,
    city: "Secundrabad",
    salary: 30000,
    },
    ];
    
    function displayEmployee(superarray) {
    let tableinfo = "";
    
    superarray.forEach(function (employees, index) {
    let Row = `<tr>
    <td>${index + 1}</td>
    <td>${employees.name}</td>
    <td>${employees.age}</td>
    <td>${employees.city}</td>
    <td>${employees.salary}</td>
    <td>
    <button class="btn btn-info" onclick='deleteEmployee(${index})'>delete</button>
    <button class="btn btn-info" onclick='showpopUp(${index})'>update</button>
    </td>
    </tr>`;
    
    tableinfo += Row;
    });
    
    document.getElementsByClassName("tdata")[0].innerHTML = tableinfo;
    }
    
    displayEmployee(employees);
    
    function addEmployee(e) {
    e.preventDefault();
    let employee = {};
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;
    employee.name = name;
    employee.age = Number(age);
    employee.city = city;
    employee.salary = Number(salary);
    
    employees.push(employee);
    
    displayEmployee(employees);
    
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("salary").value = "";
    }
    
    function searchByName() {
    let searchValue = document.getElementById("searchName").value;
    
    let newname = employees.filter(function (employees) {
    return (
      employees.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
    });
    
    displayEmployee(newname);
    }
    
    
    function searchByCity() {
    let searchValue = document.getElementById("searchCity").value;
    
    let newcity = employees.filter(function (employees) {
    return (
      employees.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
    });
    
    displayEmployee(newcity);
    }
    
    function deleteEmployee(index) {
    employees.splice(index, 1);
    displayEmployee(employees);
    }
    
    let updated;
    
    function copyEmployee(index) {
    updated = index;
    let employee = employees[index];
    
    document.getElementById("formname").value = employee.name;
    document.getElementById("formage").value = employee.age;
    document.getElementById("formcity").value = employee.city;
    document.getElementById("formsalary").value = employee.salary;
    }
    
    function updateEmployee(e) {
    e.preventDefault();
    let employee = employees[updated];
    console.log(employee);
    let name = document.getElementById("formname").value;
    let age = document.getElementById("formage").value;
    let city = document.getElementById("formcity").value;
    let salary = document.getElementById("formsalary").value;
    employee.name = name;
    employee.age = Number(age);
    employee.city = city;
    employee.salary = salary;
    console.log(employee);
    
    displayEmployee(employees);
    
    let popUp = document.getElementsByClassName("popUp")[0];
    popUp.style.display = "none";
    }
    
    function showpopUp(index) {
    let popUp = document.getElementsByClassName("popUp")[0];
    popUp.style.display = "block";
    
    copyEmployee(index);
    }
    
    function hidepopUp(event) {
    if (event.target.className == "popUp") {
    let popUp = document.getElementsByClassName("popUp")[0];
    popUp.style.display = "none";
    }
    }

