import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// jasise app ik fxn tha  App.jsx mai or usko element <App/> ki trah use kiya
// ja rha ... aise hi kya yha bhi fxn likh skte ??

function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(                     // ReactDOM or virtual dom don't reload page fully
    <>
    <App />
    </>
);

//  Vite vale case mai it's important to add .jsx instead of .js , in case of component file.
//  function name should start with capital letter.
