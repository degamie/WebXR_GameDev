import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//WID(5/10/2025)
//(WebXR:) ThreeJs(Fibre)
function Cylinder(props){
  meshRef=useRef();
  const [hovered,sethovered]=useState(false);
  const [clicked,setclicked]=useState(false);
  useFrame(()=>(meshRef.current.rotation.x=meshRef.current.rotation.y+=.01));//Implementaing Cylinder's Rotation at Y-axis
}

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
    <mesh
      {...props}
      ref={meshRef}
      ></mesh>
   
      
    </>
  )
}
<div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

export default App
