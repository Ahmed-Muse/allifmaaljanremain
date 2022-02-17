import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import Homescreen from './pages/Homepage'
import Notes from './pages/Notes'

import Ahmed from './pages/Profile'
import Mylearningpage from './pages/Learning'

import Mytodolist from './pages/Todo'
import React, { Component, useState } from "react";


import {HashRouter as Router,Route,Routes} from 'react-router-dom'
import './index.css'

function App() {
  const [alliftodos,setTodos]= useState(["one","two"])
  //this is object de-structuring
//the first variable stores the "to do list" while the second variable "stores the function to update the to do list"
  return (
    <div>
     
      <Router>
      <Header />
      <main>
        <Container>
          <Routes>
          <Route path='/' element={<Homescreen />}  />
          
          <Route path='/ahmed' element={<Ahmed/> } />
          <Route path='/notes' element={<Notes/> } />
          <Route path='/mylearningpage' element={<Mylearningpage/>}/>
          
          <Route path='/to-do-list' element={<Mytodolist/>}/>
          </Routes>
        </Container>
        
      </main>
      <hr></hr>
      <div>
      <input type="text"></input>
          <button>Add task</button>
          <button>Clear</button>
          <button>Complete</button>
         
            <p> 0 tasks left to do</p>
            <Mytodolist todolistpropname={alliftodos}/>
           
      </div>
      <Footer />
      </Router>
    </div>
  );
}
export default App;



