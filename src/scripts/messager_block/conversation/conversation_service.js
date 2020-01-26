import usermail from "../../auth/service/login/login.js"

export default  async function createOptions(arg) {
	let response = await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/all', {
        method: 'GET',
        headers: {
        'x-access-token': localStorage.token,
        }
        })
        .then((response) => {
        return response.json();
    }).then(users => {
      let usersList;
      let arg = document.getElementById("usersList");
      console.log(Object.values(users))
    for(var i=0; i<users.length;) {
      usersList = Object.values(users[i])[6]

     let addOption = document.createElement('option');

    addOption.innerHTML = ` ${usersList} `;
    
    arg.append(addOption); 
      
      i++
    }
    document.getElementsByTagName('select')[0].addEventListener("change", function() {
   let userIndex = document.getElementsByTagName("select")[0].selectedIndex
    document.getElementById("usersList").style.display = "none"
    base()
    async function base (){
    let response = await fetch(`https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages/${Object.values(users[userIndex])[5]}?sort=desc`, {
        method: 'GET',
        headers:  {
        'x-access-token': `${localStorage.token}`,
        // 'Content-Type': 'application/json'
        }
//         body: JSON.stringify( {
//   "user": {
//     "_id": `${Object.values(users[userIndex])[0]}`
//   }
// })
        })
        .then((response) => {
        return response.json();
    }).then(threads => {
       console.log(Object.values(threads))
     console.log(threads)
      let thread = document.getElementById("createThread");

      usersList = Object.values(users[userIndex])[6]

     let addElement = document.createElement('div');

    addElement.innerHTML = ` ${usersList} `;
    
    thread.append(addElement); 
      
   
    
});
}
  });
 }
 )}