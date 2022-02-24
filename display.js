function display(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>users(data))
}
function users(data){
    const userCreat=document.getElementById('user-creat');
    // console.log(userCreat)
    for(usre of data){
        // console.log(usre.email)
        const li=document.createElement('li');
        li.innerText=`name : ${usre.name}, Email : ${usre.email}`;
        userCreat.appendChild(li)
    }
}
