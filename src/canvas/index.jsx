import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment,Center } from "@react-three/drei";
import Shoe from "./Shoe";

// import Backdrop from "./Backdrop";
// import CameraRig from "./CameraRig";




const CanvasModel = () => {
  return ( 
  <Canvas>
    <ambientLight intensity={0.5}/>
    <Environment preset="city"/>
    {/* <CameraRig>  */}
      {/* <Backdrop/> */}
      <Center>
        <Suspense fallback ={null}>
            <Shoe/>
        </Suspense>
      </Center>
    {/* </CameraRig> */}
  </Canvas>)
 
};

export default CanvasModel;
