import React, { createContext } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UseStateExample from './components/useStateExample';
import UseStateObject from './components/useStateObject';
import UseStateArray from './components/useStateArray';
import UseEffectExample from './components/useEffectExample';
import UseEffectFetchData from './components/useEffectFetchData';
import UseReducerExample from './components/useReducerExample';
import UseCallbackExample from './components/useCallbackExample';
import UseMemoExample from './components/useMemoExample';
import UseRefExample from './components/useRefExample';
import { Profile } from './components/profile';
import { useState } from 'react';

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Andreea");
  return (
    <div className="App">
      {/* <UseStateExample/> */}
      <Router>
      <AppContext.Provider value={{username, setUsername}}>
          <Routes>
            <Route path="/profile" element={<Profile/>} />
          </Routes>
      </AppContext.Provider>
      <Routes>
            <Route path="/useStateExample " element={<UseStateExample/>}/>
            <Route path="/useStateObject" element={<UseStateObject/>}/>
            <Route path="/useStateArray" element={<UseStateArray/>}/>
            <Route path="/useEffectExample" element={<UseEffectExample/>}/>
            <Route path="/useEffectFetchData" element={<UseEffectFetchData/>}/>
            <Route path="/useReducerExample" element={<UseReducerExample/>}/>
            <Route path="/useCallbackExample" element={<UseCallbackExample/>}/>
            <Route path="/useMemoExample" element={<UseMemoExample/>}/>
            <Route path="/useRefExample" element={<UseRefExample/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
