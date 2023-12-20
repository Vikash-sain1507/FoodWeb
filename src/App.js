

import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,


} from "react-router-dom";
import Login from './screens/Login';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Register from './screens/Register.jsx';
import Protected from './componets/Protected.jsx';
import AllProductburger from './componets/AllProductburger.jsx';
import Cart from './componets/Cart.jsx';





function App() {
  return (
    <Router>

      <div>
        <Routes>
            
          <Route exact path='/' element={<Protected Componet={Home} />} />
          <Route exact path='/login' element= {<Login />} />
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/AllProductburger' element={<AllProductburger/>}/>
          <Route  path='/Cart' element={<Cart />}/>
          
        

          

        </Routes>
      </div>

    </Router>
  )
};

export default App;
