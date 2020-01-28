import style from "./conversation.scss"
import  {userInf, userId } from "../../main_service.js";
let usersList;
export default  async function createOptions(arg) {
 base()
	let response = await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/all', {
        method: 'GET',
        headers: {
        'x-access-token': localStorage.token,
        }
        })
        .then((response) => {
        return response.json();
    }).then(users => {
      
      let arg = document.getElementById("usersList");
      console.log(Object.values(users))
    for(var i=0; i<users.length;) {
      usersList = Object.values(users[i].name).join('')
      if (Object.values(users[i])[5] !== userId) {
         let addOption = document.createElement('option');

    addOption.innerHTML = ` ${usersList} `;
    
    arg.append(addOption); 
      }
      else {
        let addOption = document.createElement('option');

    addOption.innerHTML = ` `;
    
    arg.append(addOption); 
      }
    
      i++
    }
    document.getElementsByTagName('select')[0].addEventListener("change", function() {
       
   let userIndex = document.getElementsByTagName("select")[0].selectedIndex
    document.getElementById("usersList").style.display = "none"
    let el = document.getElementById("newConv")
    el.remove()
     
    newConversation ()
    base()

     

async function newConversation (){
    let response = await fetch(`https://geekhub-frontend-js-9.herokuapp.com/api/threads`, {
        method: 'POST',
        headers:  {
        'x-access-token': `${localStorage.token}`,
        'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
          "user": {
            "_id": `${Object.values(users[userIndex])[5]}`
          }
        })
        })
        .then((response) => {
        return response.json();
    }).then(threads => {
    
});
}
 
  });
 }
 )}

   async function base (){
    let response = await fetch(`https://geekhub-frontend-js-9.herokuapp.com/api/threads?sort=desc`, {
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
     console.log((threads[0].users[1]).name)
     console.log((threads[0].users[1]).name)
      let thread = document.getElementById("createThread");
      let addElem = document.createElement('div');
        addElem.id = 'newConv'
        thread.append(addElem); 
     let threadCreate = document.getElementById("newConv");
      for (var i =0; i<threads.length;) {

        usersList = (threads[i].users[1]).name;

     let addElement = document.createElement('div');
     addElement.setAttribute('class', 'newConversation');
    addElement.innerHTML = ` ${usersList} `;
    
    threadCreate.append(addElement); 
    i++
      } 
    
});
}