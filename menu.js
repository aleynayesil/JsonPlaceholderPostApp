const logOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('email');
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('email');
  window.location.href = 'login.html'; 
}


const token = localStorage.getItem('token') || sessionStorage.getItem('token');
let authenticated = false;
const email = localStorage.getItem('email') || sessionStorage.getItem('email');
let logOutMenu = '';
let signInMenu = '<a style="color:#bd3509;" class="nav-link" href="/login.html">Sign in</a>';

if (token != null && token != undefined) {
    authenticated = true;
    logOutMenu = `<a style="color:#bd3509;" class="nav-link float-end" onclick="logOut()">Log out</a>`
    signInMenu = ''
}
//navbar-light bg-light

const navMenu=` <nav class="navbar navbar-expand-lg " style="background-color:#f1f1f1">
  <div class="container">
    <a style="font-weight:700; color:#bd3509;" class="navbar-brand" href="/index.html"
      ><img width="50px" src="/images/article2.png"></a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a style="color:#bd3509;" class="nav-link" aria-current="page" href="/index.html">Home</a>
        <a style="color:#bd3509;" class="nav-link" href="/article-details.html">Article</a>
        ${signInMenu}
        <a style="color:#bd3509;" class="nav-link float-end" href="/article-details.html">${authenticated ? logOutMenu : ''}</a>
        <span style="color:#bd3509;" class="nav-link float-end" href="/article-details.html"><b>${authenticated ? email : ''}</b></span>
      </div>
    </div>
  </div>
</nav>`
const menuDiv=document.getElementById('menu');
menuDiv.innerHTML=navMenu;
