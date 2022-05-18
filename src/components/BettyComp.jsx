import bettan from "../assets/Betty_White.jpg";

const BettyComp = (props) => {
  
  return (
    <div className="BettyWhite">
      <img src={bettan} alt="Betty White" width="900px"/>
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
