let members = []
const addMember = (ev)=> {
    ev.preventDefault();
    let person = {
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        location: document.getElementById('location').value,
    }
    members.push(person);
    document.querySelector('form').reset();

}
    console.log(members);
    document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('button').addEventListener('click', addUser);

})

    
