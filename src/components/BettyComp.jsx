import bettan from "../assets/Betty_White.jpg";
import '../styles/BettyComp.css';

const BettyComp = (props) => {
  
  return (
    <div className="betty-white">
      <img src={bettan} alt="Betty White" width="740px"/>
      <div className="betty-info">
        <h2>{props.betty.name}</h2>
        <h2>{props.betty.job}</h2>
        <h2>{props.betty.life}</h2>
        <h2>{props.betty.quote}</h2>
      </div>
    </div>
  );
};

export default BettyComp;
