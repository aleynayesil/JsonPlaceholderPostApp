var data=[];
var dataComment=[];
var dataUser=[];
window.onload=async()=>{
    showLoading();
    await loadData();
    hideLoading();
    renderHtml(data);
    userClick();
}

const loadData=async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await response.json();
    console.log(data);

    const responseUser =await fetch("https://jsonplaceholder.typicode.com/users");
    dataUser = await responseUser.json();
    console.log(dataUser);

    const responseComment = await fetch("https://jsonplaceholder.typicode.com/comments");
    dataComment = await responseComment.json();
    console.log(dataComment);
    }
    
  const showLoading=()=>{
      const loading=document.getElementById('loading');
      loading.classList.add('d-flex');
  }
       
  const hideLoading=()=>{
    const loading=document.getElementById('loading');
    loading.classList.add('d-none');
}
    const renderHtml=(data)=>{
        const articleList = document.getElementById("list");
        articleList.innerHTML = "";
    data.forEach((title)=>{
        const listTemplate =`<button onclick="userClick(${title.id})" id="articleTitle" type="button" class="btn list-group-item list-group-item-action">
        ${title.title.substring(0,25) }
      </button>`
      articleList.innerHTML+=listTemplate;
    }); 
        
    }
    const userClick=(id)=>{
        const articleFind=document.getElementById('card');
        articleFind.innerHTML='';
        const dataItem =data.filter(x=>x.id==id);
        console.log(dataItem);
        dataItem.forEach((item)=>{ 
        const articleTemplate=`<div class="card border-dark mb-3"> <div class="card-header ">${item.title}</div>
                     <div class="card-body text-dark">
                     <h5 class="card-title">${item.title}</h5>
                     <p id="badge" class="card-text">${item.body}</p>
                     <span class="badge rounded-pill bg-primary"></span>
                     </div> 
                     </div>`;
        articleFind.innerHTML=articleTemplate;
        

        const articleComment=document.getElementById('comment');
        articleComment.innerHTML='';
        const filteredComment=dataComment.filter(x=>x.postId==id);
        console.log(filteredComment);
        filteredComment.forEach((com)=>{

            const commentTemplate=`  
            <div class="card my-3">
                    <div class="row g-0">
                    <div class="col-md-2">
                    <img src="/images/blogging.png" width="70px" height="70px" class="img-fluid ms-4 mt-4" >
                  </div>
                  <div class="col-md-10">
                    <div class="card-body">
                      <h5 class="card-title">${com.name}</h5>
                      <p class="card-text">${com.body}</p>
                    </div>
                  </div>
                    </div>
                </div>
          
        `;
        articleComment.innerHTML+=commentTemplate;
        })
        });
        
    }
    const userInfo=(userId)=>{
        const articleFind=document.getElementById('badge');
        articleFind.innerHTML='';
        const dataItem =dataUser.filter(x=>x.id==userId);
        console.log(dataItem);
        
    }
    const search=(event)=>{
        let searchText =event.target.value;
        showLoading();
        const filteredData=data.filter(x=>new RegExp(searchText,"i").test(x.title));
       hideLoading();
       renderHtml(filteredData);
    }
    // const getRenderListItem=(data)=>{
    //     const listItem=document.getElementById('listItem');
    //     listItem.innerHTML='';

    //     data.forEach((item) => {
    //         listItemTemplate= `<li><a class="dropdown-item" href="#">${item.title}</a></li>`;
    //         console.log(listItemTemplate);
    //         listItem.innerHTML+=listItemTemplate
    //       });
    // }


    
