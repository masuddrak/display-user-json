function postCreation(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>posts(data))
}
postCreation()
function posts(posts){
    const postCreat=document.getElementById('postSection');
    for(const post of posts){
        const div=document.createElement('div');
        div.classList.add('card')
        div.innerHTML=`
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        `
        postCreat.appendChild(div)
    }
}