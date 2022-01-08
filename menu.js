
    
    const navMenu=` <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="/index.html"
        ><img width="60" height="50" src="/images/article.png" alt=""
      /></a>
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
          <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
          <a class="nav-link" href="/article-details.html">Article</a>
        </div>
      </div>
    </div>
  </nav>`
  const menuDiv=document.getElementById('menu');
  menuDiv.innerHTML=navMenu;
