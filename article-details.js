var data=[];
var dataComment=[];
var dataUser=[];
window.onload=async()=>{
    loadData();
    userClick();
}

const loadData=async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await response.json();
    console.log(data);
    const articleList = document.getElementById("list");
    articleList.innerHTML = "";

    const responseUser =await fetch("https://jsonplaceholder.typicode.com/users");
    dataUser = await responseUser.json();
    console.log(dataUser);

    const responseComment = await fetch("https://jsonplaceholder.typicode.com/comments");
    dataComment = await responseComment.json();
    console.log(dataComment);


    data.forEach((title)=>{
        const listTemplate =`<button onclick="userClick(${title.userId})" id="articleTitle" type="button" class="list-group-item list-group-item-action">
        ${title.title}
      </button>`
  
      articleList.innerHTML+=listTemplate;
    //   data.map(item => {
    //     return {
    //         title: item.title.substring(0,25)
    //     }})
    });

    dataUser.forEach((user)=>{

    })

}  
const userClick=(userId)=>{
    const dataItem =dataUser.find(x=>x.userId==dataUser.id);
    
    console.log(dataItem);
    const articleFind=document.getElementById('card');
    const articleTemplate=` <div class="card-header">Header</div>
    <div class="card-body text-dark">
      <h5 class="card-title">${data.title}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div> `;
    articleFind.innerHTML=articleTemplate;
}
    
