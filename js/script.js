var modal = document.getElementById('modal-podcast');
var frame = document.querySelector('.frame');
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    console.log(this.children[1].textContent)
    if (this.children[1].textContent == "Mais Informações") {
         modal.style.display = "block";
         frame.style.height = "200px";
        this.children[1].textContent = "Menos Informações";
         
    }else if(this.children[1].textContent == "Menos Informações") {
        modal.style.display = "none";
        modal.style.transition = "s";
        frame.style.height = "280px";
        this.children[1].textContent = "Mais Informações"
    }
}


span.onclick = function() {
    modal.style.display = "none";
    frame.style.height = "280px";
}


// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }