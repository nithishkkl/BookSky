const popupoverlay=document.getElementById('popup-overlay')
const popupbox=document.querySelector('.popup-box')
const btnadd=document.getElementById('btn-add')


const btnboxcancel=document.getElementById('btn-box-cancel')

btnadd.addEventListener('click',function(){
    popupoverlay.style.display='block'
    popupbox.style.display='block'
})

btnboxcancel.addEventListener('click',function(event){
    event.preventDefault()
     popupoverlay.style.display='none'
     popupbox.style.display='none'

})


//Add Button it will add he content

const btnboxadd=document.getElementById('btn-box-add')

const bookcontainer=document.querySelector('.bookContainer')

const booktitle=document.getElementById('booktitle')
const bookauthor=document.getElementById('bookauthor')
const description=document.getElementById('description')

const container = document.getElementById('container');

btnboxadd.addEventListener('click',function(event){

    event.preventDefault()
    const divbox=document.createElement('div')

    divbox.setAttribute('class','bookContainer')

    divbox.innerHTML=`<h2>${booktitle.value}</h2>
            <h4>${bookauthor.value}</h4>
            <p>${description.value}</p>
            <button onclick="deletebook(event)">Delete</button>
`

    container.append(divbox)

     popupoverlay.style.display='none'
     popupbox.style.display='none'


})


function deletebook(event){

    event.target.closest('.bookContainer').remove();

}
