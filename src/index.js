import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
 document.querySelector("h1").addEventListener("click",function(e){
 alert("Bana tıkladın!")
 });
// Kodlar buraya gelecek!
let navigation = document.querySelectorAll(".nav a");
navigation.forEach(element => {
    element.addEventListener("mouseover", function(addBorder) {
        addBorder.target.style.borderBottom = "3px solid black"
    })
    element.addEventListener("mouseout", function(removeBorder) {
        removeBorder.target.style.borderBottom = "3px solid rgb(255,255,255)"
    })
})

let searchBox = document.createElement("input");
searchBox.setAttribute("type", "text");
searchBox.setAttribute("name", "Search");
searchBox.setAttribute("placeholder", "Search")
searchBox.style.maxWidth = "4vw"
document.querySelector(".nav").appendChild(searchBox)
document.querySelector(".nav input").addEventListener("keydown", function(changeColor) {
    changeColor.target.style.backgroundColor = "green"
})
document.querySelector(".nav input").addEventListener("keyup", revertColor => {
    revertColor.target.style.backgroundColor = "field"
})

