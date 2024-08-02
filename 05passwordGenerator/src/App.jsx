import {useState ,useCallback} from 'react';
import './App.css';

function App() {
  const [length , setLength] = useState(8);
  const [numberAllowed ,setNumberAllowed] = useState(false);
  const [characterAllowed , setCharacterAllowed] = useState(false);
  const [password , setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "0123456789"
    }
    if (characterAllowed) {
      str += "~!@#$%^&*-_+=[]{}`"
    }
    for(let i = 1 ; i <= array.length; i++){
       let char =  Math.floor(Math.random()*str.length + 1)
       pass = str.charAt(char)
    }
    setPassword(pass)

    }, [length , numberAllowed , characterAllowed , setPassword])



  return (
    <>
      <h1 className='text-4xl text-purple-200 '>Password Generator</h1>
    </>
  )
}

export default App
