export const cbUsersMap=((user,idx)=>{
    return(
        <li class="red" key={idx}>email: {user.email} name: {user.name} pw: {user.pass}</li>
    )
})

