import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls,Center } from "@react-three/drei";
import Shoe from "./Shoe";

// import Backdrop from "./Backdrop";
 import CameraRig from "./CameraRig";




const CanvasModel = () => {
  return ( 
  <Canvas  >
    <ambientLight intensity={0.5}/>
    <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
    <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
    {/* <OrbitControls  enableZoom={true} enablePan={false} /> */}
    <Environment files="royal_esplanade_1k.hdr"/>
    <CameraRig> 
      {/* <Backdrop/> */}
      <Center>
        <Suspense fallback ={null}>
            <Shoe/>
        </Suspense>
      </Center>
    </CameraRig>
  </Canvas>)
 
};

export default CanvasModel;
