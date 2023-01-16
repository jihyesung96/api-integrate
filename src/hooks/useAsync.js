import { useEffect, useReducer } from 'react';

//1.상태 초기화
const initialState = {
    users:null,
    loading:false,
    error:null
}
//2. reducer함수 구현
function reducer(state,action){
    switch(action.type){
        case 'LOADING':
            return{
                loading:true,
                data : null,
                error : null
            }
        case 'SUCCESS':
            return{
                loading:false,
                data : action.data,
                error : null
            }
        case 'ERROR':
            return{
                loading:false,
                data : null,
                error : action.error
            }
        default :
        return state;
    }
}

const useAsync = (callback, deps=[]) => { //deps=[] default 기본값
    const [state, dispatch] = useReducer(reducer,initialState);
    const fetchUsers = async() => {
        try{
            dispatch({
                type:'LOADING'
            })
            const response = await callback();
            dispatch({
                type:'SUCCESS',
                data:response.data
            })
        }
        catch(e){
            dispatch({
                type:'ERROR',
                error:e
            })
        }  
    };
    useEffect(()=>{
        fetchUsers();
    },deps)
    return [state,fetchUsers];
};

export default useAsync;

// useAsync(함수,[]) -->
// [(users:null,loading:false,error:null),fetchUsers]