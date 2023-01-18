import { createContext, useContext, useReducer, useRef } from "react";

//초기상태값 지정
const initialState = [
    {
        id:1,
        text:'프로젝트 생성하기',
        done:true
    },
    {
        id:2,
        text:'컴포넌트 스타일링하기',
        done:false
    },
    {
        id:3,
        text:'context만들기',
        done:false
    },
    {
        id:4,
        text:'기능구현하기',
        done:false
    }
]

//리듀서 구현
function todoReducer ( state , action ){
    switch(action.type){
        //action 객체의 type 값이 'CREATE' 면
        case 'CREATE':
            return[...state,action.todo];
        case 'TOGGLE':
            return state.map(todo=>
                todo.id === action.id ? {...todo , done : !todo.done} : todo
                )
        case 'REMOVE':
            return state.filter(todo=> action.id !== todo.id);
        default:
            return state;
    }
}
//컨텍스트 생성
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

const TodoContext = ({children}) => {
    const[state,dispatch] = useReducer(todoReducer, initialState);
    const nextid = useRef(5);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextid}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
};
//커스텀 훅
export function useTodoState(){
    return useContext(TodoStateContext);
}
export function useTodoDispatch(){
    return useContext(TodoDispatchContext);
}
export function useTodoNextId(){
    return useContext(TodoNextIdContext);
}
export default TodoContext;