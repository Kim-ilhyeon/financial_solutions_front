// 전역 변수
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';


// 전역으로 사용할 요소 (반복적으로 사용이 필요한 요소)
let todoInput;  // 입력 창
let todoList;   // 할 일 목록
let filterBtns; // 필터 버튼들


// DOM이 다 그려지면 실행.
window.addEventListener("DOMContentLoaded", function() {
    // dom요소 set
    todoInput = document.getElementById('todo-input');
    todoList = document.getElementById('todo-list');
    filterBtns = document.querySelectorAll('.filter-buttons button');

    // 이벤트 연결
    bindEvents();

    // todos목록 그리기
    renderTodos();


    // filter버튼 전부 active클래스 제거 후, 클릭한 filter버튼에 따른 active클래스 추가하는 함수
    function setActiveFilterButton () {
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
    }
    
    // todo갯수 출력하는 함수
    function countTodo() {
        const todoCount = todos.filter(todo => !todo.isDone).length;
        const todoCountArea = document.getElementById('todo-count');
        todoCountArea.textContent = todoCount + '개 남음';
    }

    // localStorage에 todos에 담겨있는 값을 'todos'라는 키값으로 저장하는 함수
    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    // currentFilter라는 변수에 선택한 필터목록을 저장하는 함수
    function getFilteredTodos() {
        // filterBtn에 따른 todos 분기
        switch (currentFilter) {
            case 'all':
                return todos;
            case 'progress':
                return todos.filter(todo => !todo.isDone);
            case 'completed': 
                return todos.filter(todo => todo.isDone);
        }
    }

    // 할 일 목록을 비웠다가 렌더(그려주는)해주는 함수
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
        checkBox.addEventListener('click', () => changeCompleted(todo.id));

        // 삭제 버튼 클릭 시 이벤트 추가
        delBtn.addEventListener('click', () => deleteTodo(todo.id));
    }

    // 할 일 목록 체크 시 완료여부(isDone) 변경하는 함수
    function changeCompleted(id) {
        // filteredTodos = todos.map((todo) => {
        //     if (todo.id === id) {
        //         todo.isDone = !todo.isDone;
        //     }
        //     return todo;
        // });
        const todo = todos.find(todo => todo.id === id);

        if (todo) {
            todo.isDone = !todo.isDone;
        }

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
        todos = completedTodos;
        saveTodos();    
        renderTodos();
    }

    // dom요소와 이벤트 핸들러를 연결해주는 함수
    function bindEvents() {
        const addBtn = document.getElementById('add-btn');
        // 추가 클릭 시 할 일 추가
        addBtn.addEventListener('click', addTodo);

        // 할 일 입력 후 Enter키로 추가
        todoInput.addEventListener('keydown', function(e) {
            if(e.key === 'Enter') addTodo();
        });

        // 완료된 목록 삭제
        const deleteCompletedTodos = document.getElementById('delete-completed-btn');
        deleteCompletedTodos.addEventListener('click', deleteCompletedAll);

        // filter버튼 목록 클릭에 따른 이벤트 추가
        filterBtns.forEach(function(btn) {
            btn.addEventListener('click', setActiveFilterButton);
        });
    }
    
    
    
    
    
    
    
    
    
    renderTodos();
});