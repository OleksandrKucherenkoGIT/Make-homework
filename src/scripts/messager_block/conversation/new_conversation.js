export default  function usersList(arg) {
	let response = fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: {
        'x-access-token': localStorage.token,
        }
        })
        .then((response) => {
        return response.json();
    }).then(users => {
      console.log(users);
      console.log(Object.values(users.forEach())[1]);
       console.log(localStorage.token);
  });

 }