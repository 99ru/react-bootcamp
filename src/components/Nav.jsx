import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='App'> 
    <nav>
    <li><Link to="/" className='App-link'>Home</Link></li>
    <li><Link to="/bettywhite" className='App-link'>Betty White</Link></li>
    <li><Link to="/counter" className='App-link'>Counter</Link></li>
    <li><Link to="/inputduplication" className='App-link'>input duplication</Link></li>
    <li><Link to="/dice" className='App-link'>dice</Link></li>
    <li><Link to="/form" className='App-link'>Form</Link></li>
    <li><Link to="/toggle" className='App-link'>Toggle</Link></li>
    <li><Link to="/fruits" className='App-link'>Fruits</Link></li>
    <li><Link to="/Shroedinger" className='App-link'>Shroedinger</Link></li>
    <li><Link to="/TabularViewPage" className='App-link'>TabularViewPage</Link></li>
    </nav>
    </div>
  )
}

export default Header;

