let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let posts = document.getElementById('posts');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('button clicked');
    formValidation();
});

let formValidation = ()=>{
    if(input.value === ""){
        console.log('failure');
        msg.innerHTML = 'Post cannot be blank';
    }
    else{
        console.log('success');
        msg.innerHTML = '';
        acceptData();
    }
};

let data = {};

let acceptData = ()=>{
    data['text'] = input.value;
    console.log(data);
    createPost();
};

let createPost = ()=>{
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick='editPost(this)' class="fas fa-edit"></i>
            <i onClick='deletePost(this)' class="fa fa-trash" aria-hidden="true"></i>
        </span>
    </div>`;
    input.value = '';
};



let deletePost = (e)=>{
    e.parentElement.parentElement.remove();
};

let editPost = (e)=>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};
//if the function formValidation() is called outside of the event listener, 
//the function will not be called. Because the function should be called inside the event listener, 
//the function needs to be called inside the event listener.
//formValidation();