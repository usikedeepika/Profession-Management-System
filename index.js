let employees = [];
let idCounter = 1;

document.getElementById('addUser').addEventListener('click', function() {
    const name = document.getElementById('name').value.trim();
    const profession = document.getElementById('profession').value.trim();
    const age = document.getElementById('age').value.trim();
    const message = document.getElementById('message');

    if (!name || !profession || !age) {
        message.textContent = "Error :Please Make sure All the field before adding in an emplyee";
        message.style.color = "red";
        return;
    }

    message.textContent = "Success : Message Added";
    message.style.color = "green";

    const newEmployee = { id: idCounter++, name, profession, age };
    employees.push(newEmployee);
    renderEmployees(name,profession,age);

    document.getElementById('name').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('age').value = '';
});

function renderEmployees(name,profession,age) {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    employees.forEach(employee => {
     

        const employeeDiv = document.createElement('div');
        employeeDiv.className = 'employee';
          
        const outerDiv = document.createElement("div"); // Use a div for better control
outerDiv.className = "employee-wrapper"; // Apply styles using CSS

const employeeDetails = document.createElement('div'); 
employeeDetails.className = "employee-details"; // Apply CSS styles for spacing

const nameSpan = document.createElement('span');
nameSpan.textContent = employee.name;

const professionSpan = document.createElement('span');
professionSpan.textContent = employee.profession;

const ageSpan = document.createElement('span');
ageSpan.textContent = employee.age;

employeeDetails.appendChild(nameSpan);
employeeDetails.appendChild(professionSpan);
employeeDetails.appendChild(ageSpan);

outerDiv.appendChild(employeeDetails);

// Create the delete button
const deleteButton = document.createElement('button');
deleteButton.className = 'deleteButton';
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', function() {
    employees = employees.filter(emp => emp.id !== employee.id);
    renderEmployees();
});

// Add the delete button inside `outerDiv`
outerDiv.appendChild(deleteButton);

// Append `outerDiv` to the employee list container
employeeList.appendChild(outerDiv);

    });
}
