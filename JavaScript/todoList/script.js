// DOM이 다 그려지면 실행.
window.addEventListener("DOMContentLoaded", function() {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    let currentFilter = 'all';
    const filterBtns = document.querySelectorAll('.filter-buttons button');
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // 클릭 시 모든 filter버튼의 active클래스 삭제
            filterBtns.forEach(function(button) {
                button.classList.remove('active');
            });
            
            // 클릭한 버튼만 active클래스 추가
            this.classList.add('active');

            // 현재 currentFilter 변경
            currentFilter = this.dataset.filter;

            // DOM조작,값 변경 후 다시 재 랜더링
            renderTodos();
        });
    });

    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    
    // todo갯수 출력
    function countTodo() {
        const todoCount = todos.length;
        const todoCountArea = document.getElementById('todo-count');
        todoCountArea.textContent = todoCount > 0 ? todoCount + '개 남음' : 'Todo 없음';
    }

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function renderTodos() {
        todoList.textContent = '';
        
        let filteredTodos = [];
        // filterBtn에 따른 todos 분기
        switch (currentFilter) {
            case 'all':
                filteredTodos = todos;
                break;
            case 'progress':
                filteredTodos = todos.filter(todo => !todo.isDone);
                break;
            case 'completed': 
                filteredTodos = todos.filter(todo => todo.isDone);
                break;
        }


        filteredTodos.forEach(function(todo) {
            const newLi = document.createElement('li');
            todoList.appendChild(newLi);
            
            const checkBox = document.createElement('div');
            checkBox.classList.add('normal-checkBox');
            newLi.appendChild(checkBox);
            
            const liContent = document.createElement('span');
            liContent.textContent = todo.title;
            newLi.appendChild(liContent);
            
            const delBtn = document.createElement('button');
            delBtn.classList.add('btn-delete');
            delBtn.textContent = '삭제';
            newLi.appendChild(delBtn);
            
            // 완료(isDone)여부에 따른 클래스 추가
            if (todo.isDone) {
                newLi.classList.add('completed');
                checkBox.classList.add('checked');
            }

            checkBox.addEventListener('click', function(e) {
                e.stopPropagation();
                console.log(todo.isDone);
                todo.isDone = !todo.isDone;
                checkBox.classList.toggle('checked');
                newLi.classList.toggle('completed');
                saveTodos();
                renderTodos();
                countTodo();
            });


            delBtn.addEventListener('click', function() {
                todos = todos.filter((t) => todo.id !== t.id);
                saveTodos();
                renderTodos();
                countTodo();
            });
        });
        countTodo();
    }

    // 추가 클릭 시 할 일 추가
    addBtn.addEventListener('click', function() {
        const todo = todoInput.value;
        if (!todo) {
            alert('할 일을 입력하세요.!!!');
            return;
        }

        todos.push(
            {
                id: Date.now(),
                title: todo,
                isDone: false,
            }
        );
        
        todoInput.value = '';
        saveTodos();
        renderTodos();
        countTodo();
    });
    
    // 완료된 목록 삭제
    const deleteAll = document.getElementById('delete-all');
    deleteAll.addEventListener('click', function() {
        const completedTodos = todos.filter(todo => !todo.isDone);
        localStorage.setItem('todos', JSON.stringify(completedTodos));
        todos = completedTodos;
        renderTodos();
        countTodo();
    });
    
    
    
    
    
    
    
    
    
    
    
    
    renderTodos();
});