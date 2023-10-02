import { Fragment } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
//import Login from './pages/Login';
import About from './pages/About';

function App() {
  return (
    <Fragment>

      <Sidebar/>
      <Home/>
      <About/>

    </Fragment>
  );
}

export default App;
