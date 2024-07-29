
import './App.css'
import Card from './components/card'
function App() {
  let myObj = {
    username: "Sanju Rohilla",
    age: 21
  }
  let newarr = [1,2,3]

  return (
    <>
      <h1 className='text-slate-500 bg-blue-400 p-2 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username= {myObj.username} btnText = "click me"/>
      <Card username="Nidhi" btnText = "vist me"/>
      <Card />
    </>
  )
}

export default App
