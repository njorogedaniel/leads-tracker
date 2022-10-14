//console button clicked when user clicks save input button
let myLeads = []
const inputBtn = document.getElementById("input-btn")
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
inputBtn.addEventListener("click", function(){
    // function to render the leads entered in the text field
    myLeads.push(inputEl.value)
    //Storing myLeads array into the local storage
    // convert the array first into a string 
    // NB: local storage only allows strings storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

})
if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
tabBtn.addEventListener("click", function() {
    myLeads.push(tabs[0].url)
    let tabs = localSTorage.setItem("myLeads",JSON.stringify(myLeads) )
    render(myLeads)
})

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let activeTab = tabs[0]
    let activeTabId = activeTab.id
    render(myLeads)

})

// Develop a save tab to save current tab that is active on your own
// Psst nb active window and current window objects should be true
// GIve chrome access to the tabs array by enabling tabs permissions on manifest script


function render(leads){
    let listItems = ""
    for(let i = 0; i < leads.length; i++){
        listItems += `
        <li>
            <a target='_blank' href='${ leads[i]}'> ${ leads[i]}
            </a>
        </li>`        
    }
    ulEl.innerHTML = listItems
    inputEl.value = ""
 }


deleteBtn.addEventListener("dblclick", function() {
    console.log("double clicked")
    // When clicked, clear localStorage, myLeads, and the DOM
    localStorage.clear()
    myLeads = leadsFromLocalStorage
    ulEl.innerHTML = ""
})





// "www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"