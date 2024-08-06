
//selecting popup-box ,overlay,overlay button
let popupupoverlay=document.querySelector(".popup-overlay")
let popupupbutton=document.querySelector(".popup-box")
let  clickbutton=document.getElementById("add-popup-button")
clickbutton.addEventListener("click",function(){
    popupupoverlay.style.display="block"
    popupupbutton.style.display="block"
})
// selecting cancel
var cancelbutton=document.getElementById("cancel-book")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupupoverlay.style.display="none"
    popupupbutton.style.display="none"

})
// selcting conatiner
var container= document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var booktauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

    addbook.addEventListener("click",function(event){
        event.preventDefault()
        var div=document.createElement("div")
        div.setAttribute("class","book-container")
        div.innerHTML=`<h1>${booktitleinput}</h1>`
        container.append(div)
})