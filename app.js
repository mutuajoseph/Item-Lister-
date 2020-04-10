let addForm = document.querySelector('#addForm');

let itemList = document.querySelector('#itemList');

let filter = document.getElementById('filter')

console.log(filter)

// Add an item to the list
addForm.addEventListener('submit', submitItem);

// remove an item from the list
itemList.addEventListener('click', removeItem);

// filter a specific element
filter.addEventListener('keyup', filterItem);

function submitItem(e){
    e.preventDefault();

    // read the data entered from the input form
    let newItem = document.querySelector('#item').value;

    // create an li element to hold the data inputed
    let li = document.createElement('li');

    // Add classes to the li element
    li.className = 'list-group-item text-center';

    // Append the text
    li.appendChild(document.createTextNode(newItem))

    // create an edit button

    let editButton = document.createElement('button')

    editButton.className = 'btn btn-sm btn-primary float-right'
    editButton.appendChild(document.createTextNode('Edit'))
    li.appendChild(editButton)

    // create a delete button

    let deleteButton = document.createElement('button')

    deleteButton.className = 'delete btn btn-sm btn-danger float-right mr-5'
    deleteButton.appendChild(document.createTextNode('X'))
    li.appendChild(deleteButton)

    // Append the li to the list group
    itemList.appendChild(li)
}

// remove item function

function removeItem(e){
    // configuring the click for the delete button only using the .contains property
    if(e.target.classList.contains('delete')){
        // Set a confirmation to the user 
        if(confirm('Are you sure?')){
            // Access the li element to be deleted by navigating the target to the parent Element which is li
            let li = e.target.parentElement;
            // remove/delete the item using the .removeChild property coz the li is a child of the parent ul(ItemList)
            itemList.removeChild(li)
        }

    }

}

// filterItem function

function filterItem(e){
    // convert the input to lowercase
    let word = e.target.value.toLowerCase();
    // Get all the lis
    let items = document.getElementsByTagName('li')
    // convert to an array 
    Array.from(items).forEach(function(item){

        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(word) != -1){
            item.style.display = 'block'
        } else{
            item.style.display = 'none'
        }
    });
   
}