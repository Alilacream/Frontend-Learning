let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
// get all elements from the inputs key
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("inputs"));

// load the myleads as the history
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads(myLeads);
}

// XSS handler input function to prevent XSS attack:
// HACK: XSS attack is a type of hack when the user has the ability to inject JS scripts (code).
function handle_XSS(input_Request) {
  // still searching :P.
}
// filter out duplicates in myLeads array
function filter(leads) {
  const uniq = [...new Set(leads)];
  return uniq;
}
// played with a simple parameter
function renderLeads(leads) {
  leads = filter(leads);
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}
// onclick of the delete button
// caches the array and the localstorage.
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads.length = 0;
  renderLeads(myLeads);
});
// users input
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("inputs", JSON.stringify(myLeads));
  renderLeads(myLeads);
});
