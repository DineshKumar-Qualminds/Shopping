// let deleteElements = document.querySelectorAll('.delete');
// console.log(deleteElements);


// here some problem this this method if add items dynamically it should not delete inthis case use event-deligation it dhould be overcome

// for (let element of deleteElements){
//     element.addEventListener('click',(event)=>{
//         console.log(event.target);
//         let currentrElement = event.target;
//         // console.log(currentrElement.parentElement);
//         let parentLiElement = currentrElement.parentElement;
//         parentLiElement.remove();
//         })

// }

//Delete Element
let ulElement = document.querySelector('ul');
// console.log(ulElement);
ulElement.addEventListener('click',function(event){
    // console.log(event.target);
    let targetElement = event.target;
    if(targetElement.classList ==  'delete'){
        targetElement.parentElement.remove();
    }
});


//Adding Item 

let formElement = document.getElementById('add-item');
formElement.addEventListener('submit',addItem);

function addItem(event) {
    event.preventDefault();
    let inputValue  = formElement.querySelector('input[type=text]').value;
    // console.log(inputValue);
    let ulElement = document.getElementsByTagName('ul')[0];
    
    let liElement = document.createElement('li');
    let itemElement = document.createElement('span');
    let deleteElement = document.createElement('span');
    itemElement.textContent = inputValue;
    deleteElement.textContent = 'Delete';
    itemElement.classList.add('item');
    deleteElement.classList.add('delete');


    liElement.appendChild(itemElement);
    liElement.appendChild(deleteElement);
    // console.log(liElement);
    // console.log(itemElement);
    // console.log(deleteElement);
    ulElement.appendChild(liElement);
}

//Searching Items 
let searchElement = document.forms['search-item'].querySelector('input[type=text]');
searchElement.addEventListener('keyup',(event) => {
    console.log(event.target.value);
    let searchText = event.target.value;


    let itemsList = document.querySelector('#grocery-list ul');
    let items = itemsList.getElementsByTagName('li');

    items = Array.from(items);
    items.forEach((liItem) => {
        let itemName = liItem.firstElementChild.textContent.toLowerCase();
        // console.log(itemName);
        if(itemName.indexOf(searchText) != -1){
            liItem.style.display='block';
        }else{
            liItem.style.display="none";
        }
    })
});


//hide items list 

let hideCheckBox = document.getElementById('hide');
hideCheckBox.addEventListener('change',hideItems);

function hideItems(event){
   let itemContainer = document.getElementById('grocery-list');
//    console.dir(hideCheckBox);  
   if(hideCheckBox.checked){
    itemContainer.style.display='none';
   }
   else{
    itemContainer.style.display='block';
   }
}

