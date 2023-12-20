import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="mybox">
      <h1>App</h1>
      <Link to ='/countries'>Countries</Link> &nbsp;&nbsp;&nbsp;
      <Link to ='/products'>Products</Link> &nbsp;&nbsp;&nbsp;
      <Link to ='/counter'>Counter</Link> &nbsp;&nbsp;&nbsp;
      <Link to ='/todolist'>Todolist</Link> &nbsp;&nbsp;&nbsp;
      <Link to ='/addProduct'>AddProduct</Link> &nbsp;&nbsp;&nbsp;
      <Outlet></Outlet>
    </div>
  );
}

export default App;
