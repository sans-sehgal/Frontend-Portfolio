const personForm = document.getElementById("personForm");
const nameInput = document.getElementById("personName");
const ageInput = document.getElementById("personAge");
const addPersonBtn = document.getElementById("addPersonBtn");

localStorage.clear()
let people = JSON.parse(localStorage.getItem("people"));
if (!people) people = [];

const displayPerson = (person) => {
    const addPeopleDiv = document.getElementById("addPeople")
    const personContainer = document.createElement("div");
    personContainer.style.borderBottom = "1px solid #000";
    personContainer.style.marginBottom = "10px";
    personContainer.style.padding = "10px 0";

    const idPara = document.createElement("p");
    idPara.textContent = `ID: ${person.id}`;

    const namePara = document.createElement("p");
    namePara.textContent = `Name: ${person.name}`;

    const agePara = document.createElement("p");
    agePara.textContent = `Age: ${person.age}`;

    personContainer.appendChild(idPara);
    personContainer.appendChild(namePara);
    personContainer.appendChild(agePara);
    // console.log(personContainer)
    addPeopleDiv.appendChild(personContainer);
}

personForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const newPerson = {
        id: uuidv4(),
        name: nameInput.value,
        age: Number(ageInput.value),
    };

    people.push(newPerson);

    
    localStorage.setItem("people", JSON.stringify(people));

    displayPerson(newPerson);

    // Optionally, clear the input fields after submission
    nameInput.value = '';
    ageInput.value = '';


});

