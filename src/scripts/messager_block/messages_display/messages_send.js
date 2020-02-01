import  updateMessages from "./messages_service.js";

export default  async function sendMessage(th_id) {
	let formSend = document.querySelector("#messageForm");
    let formData = new FormData (formSend);
    let obj = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });
    console.log(obj.body);
    	let response = await fetch("https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages", {
        method: 'POST',
        headers:  {
        'x-access-token': `${localStorage.token}`,
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({"thread":{"_id":`${th_id}`},"message":{"body":`${obj.body}`}})	
         })
   
	
    //     .then(response => {
    //     if (response.status === 200){
    //       // console.log(message)
            
    //     }
    //     else{
    //     	// console.log(message)
    //         alert('Wrong input')
    //     }
    // })
 
    }
