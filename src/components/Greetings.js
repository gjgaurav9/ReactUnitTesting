import { useState } from "react"; 

const Greetings = () => {

  const [changedText, setChangedText] = useState(false);
  const onCLickHandler = () =>{
    setChangedText(true);
  }
  return (
    <>
      <h1>Hello World!</h1>
      {!changedText && <p>Good to see you!</p>}
      {changedText && <p>Changed Text!</p>}
      <button onClick={onCLickHandler}>Click me to see the magic</button>
    </>
  );
};


export default Greetings;