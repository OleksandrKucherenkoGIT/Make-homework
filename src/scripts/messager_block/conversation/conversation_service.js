import style from "./conversation.scss"
import  {userInf, userId } from "../../main_service.js";
import  updateMessages from "../messages_display/messages_service.js";
import  sendMessage from "../messages_display/messages_send.js";
import  updateUserInformation from "../user_information/user_service.js";

let usersListAll;
let usersList;
let threadId;
let threadUserId;
let dateUpdateThread;
let lastMessage;
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
    // console.log(Object.values(users))
    for(var i=0; i<users.length;) {
      usersListAll = users[i].name
      if ((users[i])[5] !== userId) {
        let addOption = document.createElement('option');

        addOption.innerHTML = ` ${usersListAll} `;
    
        arg.append(addOption); 
      } else {
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
      if (el!=null){
        el.remove()
      }

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
        })
        .then(threads => {
      
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
    }
  })
  .then((response) => {
    return response.json();
  })
  .then(threads => {
    console.log(threads)
    let thread = document.getElementById("createThread");
    let addElem = document.createElement('div');
    addElem.id = 'newConv'
    addElem.setAttribute('class', 'conversationBlock_newConv');
    thread.append(addElem); 
    let threadCreate = document.getElementById("newConv");
    for (var i =0; i<threads.length;) {

      usersList = (threads[i].users[1]).name;
      threadId = threads[i]._id
      threadUserId = threads[i].users[1]._id
      dateUpdateThread = threads[i].updated_at
      if(threads[i].message == null) {
        lastMessage = ' '
      }else {
        lastMessage = threads[i].message.body
      }
      let addElement = document.createElement('div');
      addElement.setAttribute('class', 'conversationBlock_updateConversation');
      addElement.setAttribute('id', `${threadId+threadUserId}`);
      addElement.innerHTML = ` 
                      <div class="conversationBlock_updateConversation_wraper">
                        <div class="conversationBlock_updateConversation_avatarName">
                          <div class="conversationBlock_updateConversation_avatar">
                            
                          </div>
                          <div class="conversationBlock_updateConversation_name">
                            ${usersList}
                          </div>
                        </div>
                        <div class="conversationBlock_updateConversation_date">
                          ${(threads[i].updated_at).slice(0, 10)}
                        </div>
                      </div>
                      <div class="conversationBlock_updateConversation_lastMessage">
                        <p>${lastMessage}</p> 
                      </div>
       `;
          
      threadCreate.append(addElement); 
      i++
    } 
    let ArrayCreatedTreads = document.querySelectorAll('.conversationBlock_updateConversation')
    ArrayCreatedTreads.forEach(el => el.addEventListener('click', handler))

    function handler(){
      // console.log((this.id).slice(0, 24))
      for(i=0; (document.getElementsByClassName("conversationBlock_updateConversation")[i] !== undefined); i++){
        document.getElementsByClassName("conversationBlock_updateConversation")[i].style.backgroundColor = 'transparent'
      }
      document.getElementById(`${this.id}`).style.backgroundColor = '#2f3242'
            
      updateMessages((this.id).slice(0, 24))
      updateUserInformation((this.id).slice(24))
      try{
        document.getElementById("sendMsg").onclick =  (e) => {
          e.preventDefault();
          sendMessage((this.id).slice(0, 24))
          updateMessages((this.id).slice(0, 24))
        }
      }catch(err){}
    }
  });
}