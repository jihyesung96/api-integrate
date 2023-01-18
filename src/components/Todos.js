import axios from 'axios';
import React from 'react';
import useAsync from '../hooks/useAsync';

async function getTodos(){
    let response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response;
}

const Todos = () => {
    const [state,refetch] = useAsync(getTodos,[]);
    //key 이름의 변수로 구조분해 할당을 함
    //key 이름과 다른 변수명으로 활당받을때 key이름:새로운변수명
    //{loading,error,data}
    const {loading, error, data:todos} = state;
    if(loading) return <div>로딩중....</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!todos) return null;
    return (
        <div>
            <button onClick={refetch}>다시로드</button>
            {todos.map(todo=><p key={todo.id}>{todo.title}</p>)}     
        </div>
    );
};

export default Todos;