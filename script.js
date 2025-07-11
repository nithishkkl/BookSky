
var popupoverlay=document.getElementById("popup-overlay")
var popupbox=document.getElementById("popup-box")
var addbutton=document.getElementById("add-btn")

addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})


//Cancel button

var cancelbtn=document.getElementById("cancel-btn")

cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
     popupoverlay.style.display="none"
    popupbox.style.display="none"
})


// Adding the book

var popupcontainer=document.getElementById("popup-container")
var addbook=document.getElementById("add-book")

var input1=document.getElementById("input1")
var input2=document.getElementById("input2")
var input3=document.getElementById("input3")

var container=document.getElementById("container")


addbook.addEventListener("click",function(event){
    event.preventDefault()

    var div=document.createElement("div")
    

    div.setAttribute("class","container-box")
    div.innerHTML=`<h2>${input1.value}</h2>
            <h4>${input2.value}</h4>
            <p>${input3.value}</p>
            <button id="delete-btn" onclick="deletebook(event)">Delete</button>`

              popupoverlay.style.display="none"
    popupbox.style.display="none"

    container.append(div)
})


function deletebook(event){
    event.target.parentElement.remove()

}