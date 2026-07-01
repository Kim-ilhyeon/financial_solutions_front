// 전역 변수
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';


// 전역으로 사용할 요소 (반복적으로 사용이 필요한 요소)
let todoInput;  // 입력 창
let todoList;   // 할 일 목록
let todoCount;  // 남은 할 일 갯수 (완료되지 않은 할 일)
let filterBtns; // 필터 버튼들


// DOM이 다 그려지면 실행.
window.addEventListener("DOMContentLoaded", function() {
    // dom요소 set
    todoInput = document.getElementById('todo-input');
    todoList = document.getElementById('todo-list');
    todoCount = document.getElementById('todo-count');
    filterBtns = document.querySelectorAll('.filter-buttons button');

    bindEvents();

    renderTodos();

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

    
    // todo갯수 출력
    function countTodo() {
        const todoCount = todos.length;
        const todoCountArea = document.getElementById('todo-count');
        todoCountArea.textContent = todoCount > 0 ? todoCount + '개 남음' : 'Todo 없음';
    }

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function getFilteredTodos() {
        // filterBtn에 따른 todos 분기
        switch (currentFilter) {
            case 'all':
                return todos;
                break;
            case 'progress':
                return todos.filter(todo => !todo.isDone);
                break;
            case 'completed': 
                return todos.filter(todo => todo.isDone);
                break;
        }
    }

    function renderTodos() {
        todoList.textContent = '';
        
        let filteredTodos = [];
        filteredTodos = getFilteredTodos();

        if (filteredTodos.length === 0) {
            emptyStateRender();
        } else {
            filteredTodos.forEach(function(todo) {
                todoItemRender(todo);
            });
        }

        countTodo();
    }

    // 랜더 시 할 일 목록이 없을 경우 보여줄 "할 일이 없습니다" 출력 함수
    function emptyStateRender() {
        const emptyEl = document.createElement('li');
        emptyEl.classList.add('empty-state');
        emptyEl.textContent = '할 일이 없습니다.';
        todoList.appendChild(emptyEl);
    }

    // todoItem을 그리는 함수
    function todoItemRender(todo) {
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

        // 할 일 리스트의 체크 칸 클릭 시 이벤트 추가
        checkBox.addEventListener('click', () => changeCompleted(todo.isDone, e));

        // 삭제 버튼 클릭 시 이벤트 추가
        delBtn.addEventListener('click', () => deleteTodo(todo.id));
    }

    // 삭제 클릭 시

    // 할 일 목록 체크 시 완료여부(isDone) 변경하는 함수
    function changeCompleted(isDone, e) {
        e.stopPropagation();
        isDone = !isDone;
        checkBox.classList.toggle('checked');
        newLi.classList.toggle('completed');
        saveTodos();
        renderTodos();
    }

    // 삭제 버튼 클릭 시 해당 할 일 삭제하는 함수
    function deleteTodo(id) {
        todos = todos.filter((t) => id !== t.id);
        saveTodos();
        renderTodos();
    }

    
    
    // 입력 창의 입력된 할 일을 가져와 todos에 추가하는 함수
    function addTodo() {
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
    }

    // 완료된 목록 삭제하는 함수
    function deleteCompletedAll() {
        const completedTodos = todos.filter(todo => !todo.isDone);
        localStorage.setItem('todos', JSON.stringify(completedTodos));
        todos = completedTodos;
        renderTodos();
        countTodo();
    }

    // dom요소와 이벤트 핸들러를 연결해주는 함수
    function bindEvents() {
        const addBtn = document.getElementById('add-btn');
        // 추가 클릭 시 할 일 추가
        addBtn.addEventListener('click', addTodo);

        // 완료된 목록 삭제
        const deleteCompletedTodos = document.getElementById('delete-completed-btn');
        deleteCompletedTodos.addEventListener('click', deleteCompletedAll);
    }
    
    
    
    
    
    
    
    
    
    renderTodos();
});