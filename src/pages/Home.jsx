import '../styles/App.css';
import Header from '../components/Header';
import Logo from '../assets/logo.svg';

const home = () => { 
    const logo = {
        width: "30%",
    }

   return (
        <div className='App'>
        <Header />
        <h1> LETS GOOOO! </h1>
        <img style={logo} src={Logo} alt="" width="" /> 
        </div>
   )

   
}

export default home