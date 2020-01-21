export default  async function createOptions(arg) {
	let response = await fetch('http://localhost:3000/users', {
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

    for(var i=0; i<users.length;) {
      usersList = Object.values(users[i])[1]

     let addOption = document.createElement('div');

    addOption.innerHTML = `<a> ${usersList} </a>`;
    
    arg.append(addOption); 
      
      i++
    }

  });

 }