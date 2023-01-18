import './App.css';
import React from 'react';
import TodoHeader from './components/TodoHeader';
import TodoContext from './context/TodoContext';
import TodoCreate from './components/TodoCreate';
import TodoLists from './components/TodoLists';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';

//글로벌 스타일을 추가하고 싶을때
const GlobalStyle = createGlobalStyle`
body{
  background:#e9ecef;
}
`;

function App() {
  return (
    <TodoContext>
      <GlobalStyle/>
        <TodoTemplate>
          <TodoHeader/>
          <TodoLists/>
          <TodoCreate/>  
        </TodoTemplate>
    </TodoContext>
  );
}

export default App;
