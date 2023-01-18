import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../context/TodoContext';

const TodoHeadBlock = styled.div`
    padding: 48px 32px 20px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        font-size: 36px;
        color: #343a40;
    }
    div {
        &:nth-child(2) {
            margin-top: 4px;
            color: #868e96;
            font-size: 21px;
        }
        &:nth-child(3) {
            margin-top: 30px;
            color: #20c997;
            font-size: 18px;
            font-weight: bold;
        }
    }
`;
const TodoHeader = () => {
    //context를 사용하여 state값 반환
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo=> !todo.done );
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year:'numeric',
        month:'long',
        day:'numeric'
    })
    return (
        <TodoHeadBlock>
           <h1>TodoList</h1>
           <div>{dateString}</div>
           <div>할일 {undoneTasks.length}개 남음</div> 
        </TodoHeadBlock>
    );
};

export default TodoHeader;