 // Algorithm
        // Create an array to store the todo list
        // When we click "Add", Get text from textbox.
        // Add it to array
        // Console.log array

        // Todo List 1

        const todoList = ['make dinner','wash dishes'];
        
        renderTodoList();

        function renderTodoList(){

        let todoListHTML = '';
        // Lets loop through the list
        for (let i = 0; i<todoList.length; i++){
            const todo = todoList[i];
            const html = `<p> ${todo} </p>`;
            
            // TO combine the html element we shall use the accumulator pattern
            todoListHTML +=html;        
        }

        // After the loop lets console.log html
        console.log(todoListHTML);

        // put the div in our javascript
        document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

        }

        function addTodo(){
           const inputElement = document.querySelector('.js-name-input');
        //    To get the text out we use the value element
       const name = inputElement.value;
        // Add the name to the array
        todoList.push(name);
        console.log(todoList);
        
        // value property represents the text in the text box and we should reset it afteradding
        inputElement.value = '';

        renderTodoList();
        }

        // End of todoList 1

        // Algorithm
        // 1. Loop through the array 
        // Create some HTML Code for each todo
        // Put the HTML on webpage


        