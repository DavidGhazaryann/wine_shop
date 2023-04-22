
import './App.css';
import Block from './pages/block';
import  React ,{ useEffect, useState } from 'react';
export const myContext = React.createContext()


function App() {
let[search,setSearch] = useState('')
  return (
    <div className="App">
    <myContext.Provider value={{
      
          search:search,
          setSearch:setSearch,
      
      }}>
      <Block/>
      </myContext.Provider>
    </div>
  );
}

export default App;
