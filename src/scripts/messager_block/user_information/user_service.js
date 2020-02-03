


export default  async function updateUserInformation(thread_id) {
    let el = document.getElementsByClassName("updateUserInfo_wraper")[0]
    if (el!=null){
      el.remove()
    }
    let response = await fetch(`https://geekhub-frontend-js-9.herokuapp.com/api/users/${thread_id}`, {
        method: 'GET',
        headers: {
        'x-access-token': localStorage.token,
        }
        })
        .then((response) => {
        return response.json();
    }).then(users => {
        let userInfoCreate = document.getElementById("userInfo");
                let addElement = document.createElement('div');
                addElement.setAttribute('class', 'updateUserInfo_wraper');
                addElement.innerHTML = `<div class="updateUserInfo_avatar"></div>
                                        <div class="updateUserInfo_name">
                                            <p>${users.name}</p>
                                        </div>
                                        <div class="updateUserInfo_position">
                                            <p>${users.position}</p>
                                        </div>
                                        <div class="updateUserInfo_description">
                                             <p>${users.description}</p>
                                        </div>
                                        <div class="updateUserInfo_email">Email
                                             <p>${users.email}</p>
                                        </div>
                                        <div class="updateUserInfo_phone">Phone
                                             <p>${users.phone}</p>
                                        </div>
                                        <div class="updateUserInfo_address">Adress
                                             <p>${users.address}</p>
                                        </div>
                                        <div class="updateUserInfo_organization">Organization
                                             <p>${users.organization}</p>
                                        </div>
                                        
                                        `; 
                userInfoCreate.append(addElement);
    })
}