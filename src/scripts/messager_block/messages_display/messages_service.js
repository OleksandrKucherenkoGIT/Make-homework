

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
    	// console.log(messages)
    	let message = document.getElementById("createMessages");
      let addElem = document.createElement('div');
        addElem.id = 'updateMsg'
        message.append(addElem); 
     let messageCreate = document.getElementById("updateMsg");
      for (var i =0; i< messages.length;) {

       let messagesList = messages[i].body;
     let addElement = document.createElement('div');
     addElement.setAttribute('class', 'updateMessages_newList');
    
    addElement.innerHTML = ` ${messagesList} `;
    
    messageCreate.append(addElement); 
    i++
      } 
      let block = document.getElementById("createMessages");
      block.scrollTop = block.scrollHeight;
      let clearText = document.querySelector('textarea');
      clearText.value = ''
      
    })
}