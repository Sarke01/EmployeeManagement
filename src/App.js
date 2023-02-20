import './App.css';
import NavBar from './components/NavBar';
import {Route,Routes} from 'react-router-dom';
import Table from './components/Table';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Table/>}></Route>
          <Route path='/addEmployee' element={<AddEmployee/>}></Route>
      </Routes>
    </div>
   
  );
}

export default App;
