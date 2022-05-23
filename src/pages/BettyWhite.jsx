import Header from '../components/Nav';
import BettyComp from "../components/BettyComp";
import betty from "../assets/betty.json";

const BettyWhite = () => {
  const data = betty;
  
  return (
    <div className='App'>
      <Header />
      <BettyComp betty={data[0]} />
    </div>
  );
};

export default BettyWhite;
