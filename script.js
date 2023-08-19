const elements = document.getElementsByClassName("student");
const button = document.getElementsByClassName("btn");
const tBody = document.getElementById("tbdy");
const searchText = document.getElementById("searchText");

/*Add Student data in table form*/
button[0].addEventListener("click", addStudent);

let i = 1;
function addStudent() {
  const row = document.createElement("tr");
  row.id = i;
  row.className = "tab-row";

  const id_td = document.createElement("td");
  const sName_td = document.createElement("td");
  const email_td = document.createElement("td");
  const age_td = document.createElement("td");
  const gpa_td = document.createElement("td");

  const degree_td = document.createElement("td");

  const updateImg = document.createElement("img");
  const deleteImg = document.createElement("img");

  updateImg.src = "./assets/edit 1.png";
  deleteImg.src = "./assets/trash-2 1.png";

  id_td.innerText = parseInt(Math.random() * 10000000);
  sName_td.innerText = elements[0].value;
  email_td.innerText = elements[1].value;
  age_td.innerText = elements[2].value;
  gpa_td.innerText = elements[3].value;
  degree_td.innerText = elements[4].value;

  degree_td.append(updateImg, deleteImg);

  row.append(id_td, sName_td, email_td, age_td, gpa_td, degree_td);
  tBody.appendChild(row);
  i++;

  /*Delete Student*/
  deleteImg.addEventListener("click", function () {
    const delNode = document.getElementById(row.id);
    tBody.removeChild(delNode);
  });

  // deleteImg.addEventListener("click", temp(row.id));

  /*Update Student Event Listeners*/
  updateImg.addEventListener("click", function () {
    // button[1].classList.toggle("open");
    updateUser(row.id);
  });

  document.getElementById("stu_data").reset();
}

// function temp(id) {
//   const delNode = document.getElementById(id);
//     tBody.removeChild(delNode);
//     console.log("first")
// }

/*Update student record*/
function updateUser(id) {
  // button[1].classList.toggle("open");

  const updateRow = document.getElementById(id);
  const node = updateRow.childNodes;

  const updateImg = document.createElement("img");
  const deleteImg = document.createElement("img");
  updateImg.src = "./assets/edit 1.png";
  deleteImg.src = "./assets/trash-2 1.png";

  button[1].addEventListener("click", function () {
    node[1].innerText = elements[0].value;
    node[2].innerText = elements[1].value;
    node[3].innerText = elements[2].value;
    node[4].innerText = elements[3].value;
    node[5].innerText = elements[4].value;
    node[5].append(updateImg, deleteImg);
    document.getElementById("stu_data").reset();
    // button[1].classList.toggle("open");
  });

  /*Delete Student*/
  deleteImg.addEventListener("click", function () {
    const delNode = document.getElementById(id);
    tBody.removeChild(delNode);
  });

  updateImg.addEventListener("click", function () {
    button[1].classList.toggle("open");
  });
}

  /*Serach bar*/
searchText.addEventListener("input", function () {
  let inputValue = searchText.value;;

  let tableRow = document.getElementsByClassName("tab-row");

  Array.from(tableRow).forEach((element) => {
    let nameText = element
      .getElementsByTagName("td")[1]
      .innerText.toLowerCase();
    let emailText = element
      .getElementsByTagName("td")[2]
      .innerText.toLowerCase();
    let degreeText = element
      .getElementsByTagName("td")[5]
      .innerText.toLowerCase();
    console.log(nameText, " ", emailText, " ", degreeText);

    if (
      nameText.includes(inputValue.toLowerCase()) ||
      emailText.includes(inputValue.toLowerCase()) ||
      degreeText.includes(inputValue.toLowerCase())
    ) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
