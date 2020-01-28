async function allThreadMessages() {
	    let response = await fetch(`https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages/${currentUserId}?sort=desc`, {
	        method: 'GET',
	        headers:  {
		        'x-access-token': `${localStorage.token}`,
		        }
	        })
	        .then((response) => {
	        return response.json();
	    }).then(messages => {
	         console.log(userId)
		})
		return result
	}

 export {userInf, userId }