import { useState } from "react"; 
import Output from "./Output";

const Greetings = () => {

  const [changedText, setChangedText] = useState(false);
  const onCLickHandler = () =>{
    setChangedText(true);
  }
  return (
    <>
      <h1>Hello World!</h1>
      {!changedText && <Output>Good to see you!</Output>}
      {changedText && <Output>Changed Text!</Output>}
      <button onClick={onCLickHandler}>Click me to see the magic</button>
    </>
  );
};


export default Greetings;