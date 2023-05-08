
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import {BrowserRouter as Router,Route,Routes}from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<Add/>}/>
            <Route path='/edit' element={<Edit/>}/>
          </Routes>
        </Router>
       
      </header>
    </div>
  );
}

export default App;
