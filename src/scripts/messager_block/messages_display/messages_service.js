import  {userInf, userId } from "../../main_service.js";


export default  async function updateMessages(thread_id) {
	let el = document.getElementById("updateMsg")
    if (el!=null){
      el.remove()
    }
	let response = await fetch(`https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages/${thread_id}?sort=desc`, {
        method: 'GET',
        headers: {
        'x-access-token': localStorage.token,
        }
        })
        .then((response) => {
        return response.json();
    }).then(messages => {
    	if(messages.length >0) {
    	// 	console.log(messages[0].created_at)
    	// console.log(userId)
    	let message = document.getElementById("createMessages");
      	let addElem = document.createElement('div');
        addElem.id = 'updateMsg'
        message.append(addElem); 
     	let messageCreate = document.getElementById("updateMsg");
      	for (var i =0; i< messages.length;) {
      		if(messages[i].user._id == userId) {
      			let messagesList = messages[i].body;
     			let addElement = document.createElement('div');
     			addElement.setAttribute('class', 'updateMessages_newList_user');
     			addElement.innerHTML = ` <div class="updateMessages_newList_user_container">
											<div class="updateMessages_newList_user_wraper">
												<div class="updateMessages_newList_user_text">${messagesList}</div>
												<div class="updateMessages_newList_user_date">${messages[i].created_at}</div>
											</div>
											<div class="updateMessages_newList_user_avatar"></div>
     									</div> `;
    			messageCreate.append(addElement); 
    			
    		
      		} else {
      			let messagesList = messages[i].body;
    			let addElement = document.createElement('div');
    			addElement.setAttribute('class', 'updateMessages_newList');
   				addElement.innerHTML = ` <div class="updateMessages_newList_container">
											<div class="updateMessages_newList_wraper">
												<div class="updateMessages_newList_text">${messagesList}</div>
												<div class="updateMessages_newList_date">${messages[i].created_at}</div>
											</div>
											<div class="updateMessages_newList_avatar"></div>
     									</div> `;
   	 			messageCreate.append(addElement); 
      		}
      
    		i++
      	} 
	   
    	} else {
    		let message = document.getElementById("createMessages");
	      	let addElem = document.createElement('div');
	        addElem.id = 'updateMsg'
	        message.append(addElem); 
	     	let messageCreate = document.getElementById("updateMsg");
     		let addElement = document.createElement('div');
     		addElement.setAttribute('class', 'updateMessages_newList_user');
     		addElement.innerHTML = `<div class="updateMessages_newList_container">You have no posts with this user yet</div> `;
    		messageCreate.append(addElement); 
    	}

    	 let block = document.getElementById("createMessages");
	    block.scrollTop = block.scrollHeight;
	    let clearText = document.querySelector('textarea');
	    clearText.value = ''	
      
	})
}