import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//WID(24/10/2025)
//(WebXR:) ThreeJs(Fibre)
function setupScene({scene,camera,renderer,player,controller}){
    const listener=new Three.AudioListener();
    const setlistener=(listener)=>{this.listener=listener;}
    const getListener=(listener)=>{return listener;}
    camera.add(listener);
    const scoreSnd=new THREE.PositionalAudio(listnener);//Adding ScoreBoardSound
    audioLoader.load("assets/score.mp3",buffer=>{
        scoreSnd.setBuffer(buffer);scoreTxt.add(scoreSnd);});//loading ScoreBoardSound
    if(scoreSnd.isPlaying())scoreSnd.stop();
    scoreSnd.play();
    const getScoreSnd=(ScoreSnd)=>{return scoreSnd;}
    const setScoreSnd=(ScoreSnd)=>{this.scoreSnd=scoreSnd;}//Binding ScoreSound
}
function Cylinder(props){
  meshRef=useRef();
  const [hovered,sethovered]=useState(false);
  const [clicked,setclicked]=useState(false);
  useFrame(()=>(meshRef.current.rotation.x=meshRef.current.rotation.y+=.01));//Implementaing Cylinder's Rotation at Y-axis
}

function App(){
    const manager= new LoadingManager();
    const setManager=(manager)=>{this.manager=manager;}
    const getManager=(manager)=>{return manager;}//Fetching Manager
    const mdlLoader=new GLTFLoader(manager.setPath("/mdl/Chair.fbx"));
    // setupScene(scene,camera,renderer,player,controller);
    // mdlLoader.add(scoreSnd);

  const [count, setCount] = useState(0)
   const getScale=(scale)=>{return scale;}
   const setScale=(scale)=>{this.scale=scale;}//Binding Scale in Chair
   const setBoxGeometry=(boxGeometry)=>{this.boxGeometry=boxGeometry;}//Binding  boxGeometry in Chair
  
  const Box = (props) => {
    return (
      <mesh {...props} ref={meshRef} scale={clicked ? 1.5 : 1} onClick={() => setclicked(!clicked)} onPointerOver={(event) => sethovered(true)} onPointerOut={(event) => sethovered(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'blue' : 'aqua'} />
      </mesh>
    );
  }

  return (
   <>
      <Canvas>
        <ambientLight intensity={.5}/>
        <pointLight position={[1,1,1]}/>
        <Box position={[-1.2,0,0]} />
        <Box position={[+1.2,0,0]} />
      </Canvas>
    </>
  );
}
export default App;
