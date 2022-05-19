import '../styles/App.css';
import Header from '../components/Header';
import Logo from '../assets/logo.svg';

const home = () => { 
    const logo = {
        width: "40%",
    }

   return (
        <div className='App'>
        <Header />
        <h2>React Bootcamp!</h2>
        <img className='App-logo' style={logo} src={Logo} alt="" width="" /> 
        </div>
   )
}

export default home