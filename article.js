var data = [];
window.onload = async function () {
  loadData();
}
const loadData=async()=>{
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await response.json();
  console.log(data);
  data = data.slice(0,5);
  const articles = document.getElementById("accordionExample");
  articles.innerHTML = "";

  data.forEach((item) => {
    const template = ` <div class=" my-3 accordion-item">
    <h2 class="accordion-header" id="heading_${item.id}">
      <button
        onclick="clickedItem(${item.id})"
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapse_${item.id}"
        aria-expanded="true"
        aria-controls="collapse_${item.id}"
      >   
        ${item?.title}
      </button>
    </h2>
    <div
      id="collapse_${item.id}"
      class="accordion-collapse collapse"
      aria-labelledby="heading_${item.id}"
      data-bs-parent="#accordionExample"
    >
    <div class="accordion-body">
    ${item?.body}
  </div>
    </div>
    </div>`;
    articles.innerHTML += template;
  });
}
// const clickedItem=(id)=>{

//   const element=document.querySelector(`collapse_${id}`);
//   console.log(element);
//   const selectedItem = data.find((x) => x.id == id);
//   if (selectedItem!=null) {
//     element.classList.add('show');
//   }


// }