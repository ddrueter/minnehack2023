let members = []

const addMember = (ev)=> {
    ev.preventDefault();

    let person = {
        firstName: document.getElementById("fname").value,
        lastName: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        location: document.getElementById('location').value,
    }

    members.push(person);
    document.querySelector('form').reset();
    
    console.log(members);

    saveToFile();

}


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('button').addEventListener('click', addMember);
})

function convertToJSON() {
    var jsonObject = {
        "FirstName": document.getElementById("fname").value,
        "LastName": document.getElementById('lname').value,
        "email": document.getElementById('email').value,
        "location": document.getElementById('location').value,
    }
  
    document.getElementById('output').value = JSON.stringify(jsonObject)
}
  
function saveToFile() {
    convertToJSON();
    var jsonObjectAsString = document.getElementById('output').value;
  
    var blob = new Blob([jsonObjectAsString], {
      //type: 'application/json'
      type: 'octet/stream'
    });
    console.log(blob);
  
    var anchor = document.createElement('a')
    anchor.download = "member.json";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.innerHTML = "download"
    anchor.click();
  
    console.log(anchor);
  
    document.getElementById('output').append(anchor)
  
}