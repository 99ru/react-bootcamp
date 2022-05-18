
import { Link } from "react-router-dom";


const Header = () => {



  return (
    <div className='App'>
        
    
   <h1> React Bootcamp </h1>
    <nav>
    <li><Link to="/" className='App-link'>Home</Link></li>
    <li><Link to="/bettywhite" className='App-link'>Betty White</Link></li>
    <li><Link to="/counter" className='App-link'>Counter</Link></li>
    <li><Link to="/form" className='App-link'>form</Link></li>
    <li><Link to="/dice" className='App-link'>dice</Link></li>
    </nav>
  
    </div>
  )
}

export default Header;

