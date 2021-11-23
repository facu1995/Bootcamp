let suggestions = [
    {
        title: "Add tags for solutions",
        detail: "Easier to seach for solutions based on a specific stack",
        category: "Enhancement",
        vote: 112,
        comments: [{ algo1: "algo1", algo2: "algo2" }],
        user: "",
    },{
        title: "Add tags for solutions",
        detail: "Easier to seach for solutions based on a specific stack",
        category: "Enhancement",
        vote: 112,
        comments: [{name:"Suzanne Chang",
                    user:"@upbeat1811",
                    text:"Awesome idea! Trying to find framework-specific projects within the hubs can be tedious"},
                    {name:"Thomas Hood",
                    user:"@brawnybrave",
                    text:"Please use fun, color-coded labels to easily identify them at a glance"}],
        user: "",
    }
];



const cards = document.querySelector(".cards");

let i;
for (i of suggestions) {
    let card = document.createElement("div");
    card.innerHTML = `<div class="card">
    <div class="card-voto">
        <i class="fas fa-angle-up"></i>
        <p>${i.vote}</p>
    </div>
    <div class="card-info">
        <h3 class="card-title">${i.title}</h3>
        <p class="card-description">${i.detail}</p>
        <span class="card-categoria">${i.category}</span>
    </div>
    <div class="card-comentario"><i class="fas fa-comment"></i>${"  "+i.comments.length}</div>
</div>`;
    cards.appendChild(card);
    card.addEventListener("click", ()=>{
        
    })
}