/*
    localStorage
    - 브라우저에 key-value형태로 데이터를 저장할 수 있는 공간
    - 저장된 데이터는 브라우저의 도메인별로 저장된다.
      (5MB까지 저장할 수 있다.)
*/
// 전역 변수
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

// 전역으로 사용하라 요소 (반복적으로 사용이 필요한 요소)
let todoInput;

// DOM이 다 그려지면 실행.
window.addEventListener("DOMContentLoaded", function() {

    const filterBtns = document.querySelectorAll('.filter-buttons button');
    todoInput = document.getElementById('todo-input');
    /*
        dataset
        - html요소의 data-~~으로 속성에 값을 저장 후 
          스크립트 객체를 통해 가져올 수 있음
        - html에서 data-filter='all'와 같이 작성하면
          js에서 요소.dataset.filter로 all값을 가져올 수 있음.
    */
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

    const addBtn = document.getElementById('add-btn');  // [추가 버튼]
    todoInput = document.getElementById('todo-input');    // 할 일 작성 입력란 (input태그)
    const todoList = document.getElementById('todo-list');  // 할 일 목록 (ul태그)
    
    // todo갯수 출력
    function countTodo() {
        const todoCount = todos.filter(todo => !todo.isDone).length;
        const todoCountArea = document.getElementById('todo-count');    // 할 일 목록 갯수
        todoCountArea.textContent = todoCount + '개 남음';
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
            
            // XSS방지 : innerHTML대신 textContent로 텍스트만 주입
            // innerHTML 사용 시 입력 창에 <script src='...'></script>같은 입력 시 태그가 실행 됨
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
            /*
            newLi.className = todo.isDone ? 'completed' : '';
            checkBox.className = 'normal-checkBox' + (todo.isDone ? ' checked' : '');
            */

            checkBox.addEventListener('click', function(e) {
                e.stopPropagation();
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
                createDate: new Date().toLocaleString(),
            }
        );
        
        todoInput.value = '';
        saveTodos();
        renderTodos();
        countTodo();
    });

    // 추가버튼 외에 엔터 클릭 시 할 일 목록 추가
    todoInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            // addBtn의 클릭 이벤트 발생시킴
            addBtn.click();
        }
    });
    
    // 완료된 목록 삭제
    const deleteAll = document.getElementById('delete-all-completed');
    deleteAll.addEventListener('click', function() {
        const completedTodos = todos.filter(todo => !todo.isDone);
        localStorage.setItem('todos', JSON.stringify(completedTodos));
        todos = completedTodos;
        renderTodos();
        countTodo();
    });
    
    
    
    
    
    
    
    
    
    
    
    
    renderTodos();
});