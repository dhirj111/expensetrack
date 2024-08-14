//handling submission by  adding li by inputs provided bu user
function handleFormSubmit(event) {
  event.preventDefault();

  let eamount = event.target.amount.value;
  let edetail = event.target.detail.value;

  //selecting  type id for getting inside category
  let selectElement = document.querySelector("#type");

  //stored value in category
  let etype =
    selectElement.options[selectElement.options.selectedIndex].textContent;
  let list = document.querySelector("ul");
  let listitem = document.createElement("li");
  // let licontent = document.createTextNode(
  //   eamount + " " + etype + " " + edetail
  // );
  listitem.classList.add("expenses");

  listitem.innerHTML =
    eamount +
    " " +
    edetail +
    " " +
    etype +
    " " +
    '<button class="delete-btn">delete</button>' +
    '<button class="edit-btn">Edit</button>';
  list.appendChild(listitem);

  let users = {
    amount: eamount,
    detail
    : edetail,
  };
  let usersstringed = JSON.stringify(users);
  localStorage.setItem(eamount, usersstringed);
}

// delete function
const allexpenses = document.querySelector("#expense");
allexpenses.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("delete-btn")) {
    const expensetodelete = event.target.parentElement;
    allexpenses.removeChild(expensetodelete);
  }
});


//having edit functionality

allexpenses.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("edit-btn")) {

    const expensetodelete = event.target.parentElement;
 console.log(expensetodelete)
    allexpenses.removeChild(expensetodelete);
  }
});


let addform = document.querySelector("form");
addform.amount.value =1257
