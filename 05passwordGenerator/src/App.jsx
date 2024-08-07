import {useState ,useCallback , useEffect , useRef} from 'react';
import './App.css';

function App() {
  const [length , setLength] = useState(8);
  const [numberAllowed ,setNumberAllowed] = useState(false);
  const [characterAllowed , setCharacterAllowed] = useState(false);
  const [password , setPassword] = useState("");
  const  [text , setText ] = useState('Copy');
  
// ref hook
const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "0123456789"
    }
    if (characterAllowed) {
      str += "~!@#$%^&*-_+=[]{}`"
    }
    for(let i = 1 ; i<= length;i++){
          let char = Math.floor(Math.random()*str.length+1)
          pass = str.charAt(char) + pass
    }
    
    setPassword(pass)

    }, [length , numberAllowed , characterAllowed , setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
    setText('Copied!!')
    
  } , [password])

  useEffect(() => {
    passwordGenerator()
  } , [length , numberAllowed , characterAllowed , passwordGenerator])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4  py-4 my-8  flex-col text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value = {password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard }
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          {text}
        </button>
        </div>
        <div className='flex text-sm  gap-5'>
           <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min = {6}
            max =  {100}
            value = {length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label> Length: {length}</label>
           </div>
           <div className='flex items-center gap-x-1'> 
           <input 
            type="checkbox" 
            defaultChecked= {numberAllowed}
            id='numberInput'
            onChange = {(e) => {setNumberAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
           </div>
           <div className='flex items-center gap-x-1'> 
           <input 
            type="checkbox" 
            defaultChecked= {characterAllowed}
            id='characterInput'
            onChange = {(e) => {setCharacterAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="characterInput">Characters</label>
           </div>
        </div>

      </div>
    </>
  )
}

export default App
