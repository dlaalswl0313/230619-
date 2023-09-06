//storage.js

import { reactive,toRefs } from 'vue';

export const useStorage = () => {
    //json 파일 저장 및 불러오기 
    const KEY = 'my-todo-list' //파일 이름
    const storage_obj = reactive({storage_id:0})
    const leadTodos = (initTodos) => {
        //=> 함수는 function과 동일 , = (매개변수)
        let temp_todos = JSON.parse(localStorage.getItem(KEY) || '[]')//localStorage 로컬 저장소, 브라우저 저장해도 남아있음
        temp_todos.forEach((todo,idx)=>{
            todo.id=idx;
        })
        storage_obj_obj.storage_id = temp_todos.length
        initTodos(temp_todos)
    }
    const saveTodos=(todos)=>{
        localStorage.setItem(KEY,JSON.stringify(todos.value))
    }
    return { ...toRefs(storage_obj),loadTodos,saveTodos}
}