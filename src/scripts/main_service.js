

 
var userId;
 async function userInf() {
	    let response = await fetch(`https://geekhub-frontend-js-9.herokuapp.com/api/users/`, {
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
	    }).then(users => {
	    	userId =  Object.values(users)[5]
	         // console.log(Object.values(users)[5])
	         console.log(userId)
		})
		return userId
	}

 export {userInf, userId }