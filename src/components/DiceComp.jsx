import { useState } from "react";

const DiceComp = () => {
  const [dice, setDice] = useState(9);
  const roll = () => { setDice(Math.floor(Math.random() * 6) + 1) };

  return (
    <div className="dice-wrapper">
      <h2>Dice Roller</h2>
      <p>{dice}</p>
      <button onClick={roll}>roll the dice!</button>
    </div>
  )
}

export default DiceComp;