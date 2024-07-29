import { useState } from 'react';
import './App.css'

function App() {
  
   const [counter, setCounter] = useState(15)         // counter ki default value abhi 15;

  //let counter = 15;            // ye variable update hoga lekin ui mai kabhi reflect nhi hoga
  const addValue = () => {
    //counter = counter +1
    if(counter < 20){
    //setCounter(counter +1);
    // setCounter(counter +1);
    // setCounter(counter +1);
    // setCounter(counter +1);    // aisa chahe ik baar likho ya chaar barr , ik hi baar update hoga kyonki batch mai kaam hota

    //but if we want to add like this then pass previousvalue
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)
    setCounter(prevCounter => prevCounter +1)


    }
  }

  const removeValue = () => {
    if(counter > 0){
    setCounter(counter-1)
    }
  }

  return (
    
    <>
        <h1>Chai Aur Sanju</h1>
        <h2>Counter value: {counter}</h2>
        <button
        onClick = {addValue}
        >Add value {counter} </button> <br />
        <button
        onClick={removeValue}
        >Remove Value {counter} </button>
        <footer>{counter}</footer>
    </>
  )
}

export default App
