import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import Todolist from './todolist';
import { Link, Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="mybox">
     <h1>ReactJs application</h1>
    <Link to="/counter" >counter</Link> &nbsp;&nbsp;
    <Link to="/todolist" >todolist</Link>&nbsp;&nbsp;
    <Link to="/countries">Countries</Link>&nbsp;&nbsp;
     <Outlet></Outlet>
    
    </div>
  );
}

export default App;
