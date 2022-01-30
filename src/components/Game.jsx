import { useContext } from "react";
import Field from "./Field";
import {GameContextValue} from "./ContextFiles/GameContext";

const Game = () => {
    const ValueFromProviderOne = useContext(GameContextValue);
    const ValueFromProviderTwo = useContext(GameContextValue);
    const ValueFromProviderThree = useContext(GameContextValue);


    const FirstInput=(event)=>{
        ValueFromProviderOne.objectValueOne = {firstTeamName: event.target.value};
        console.log(ValueFromProviderOne.objectValueOne);
    }

    const SecondInput =(event)=>{
        ValueFromProviderTwo.objectValueTwo = {SecondTeamName : event.target.value}
        console.log(ValueFromProviderTwo.objectValueTwo);
    }

    const FieldInput =(event)=>{
        ValueFromProviderThree.objectValueThree = {FieldInput : event.target.value};
        console.log(ValueFromProviderThree.objectValueThree);

    }

    const ButtonOnClick =()=>{
        ValueFromProviderOne.setObjectValueOne(ValueFromProviderOne.objectValueOne)
        ValueFromProviderTwo.objectValueTwo(ValueFromProviderTwo.objectValueTwo)
        ValueFromProviderThree.objectValueThree(ValueFromProviderThree.objectValueTwo)

    }
  return (
    <div>
      <h1>This is Game component</h1>
      <Field />
      <input type="text" placeholder="First Team Name" onChange={FirstInput}/>
      <input type="text"  placeholder="Second Team Name" onChange={SecondInput}/>
      <input type="text"  placeholder="Field Name" onChange={FieldInput}/>
      <button type="button" onClick={ButtonOnClick}>To Update</button>
    </div>
  );
};

export default Game;
