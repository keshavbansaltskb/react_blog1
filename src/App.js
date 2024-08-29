import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';
import Home from "./Home";
import Navigation from "./Navigation.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
      <div className='container-fluid'>
          <Router>
            <br></br>
               <Navigation/>
              <br></br>
              <Routes>   
                  <Route path="/" element={<Home/>}></Route>
              </Routes> 
          </Router>
      </div>
   )
}
export default App;