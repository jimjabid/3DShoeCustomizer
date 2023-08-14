import React, { useRef,useState } from 'react'

import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import {Decal,useGLTF, useTexture} from "@react-three/drei"
import state from "../store"

function Shoe(props)  {
    const snap = useSnapshot(state);
    //const group = useRef()//
    const {nodes,materials} = useGLTF("/shoe-draco.glb")
    const logoTexture = useTexture(snap.logoDecal)
    const fullTexture = useTexture(snap.fullDecal)
    const [hovered, set] = useState(null)

    // useFrame((state) => {
    //     const t = state.clock.getElapsedTime()
    //     group.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20)
    //     group.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    //   })

  return (
    <group  {...props} dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onClick={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
    >
      
    {console.log(state.current)}
    <mesh receiveShadow castShadow geometry={nodes.shoe.geometry} material={materials.laces} />
    <mesh receiveShadow castShadow geometry={nodes.shoe_1.geometry} material={materials.mesh} >
    {snap.isFullTexture && (
          <Decal 
            position={[-0.7, -0.25, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
            depthTest= {false}
            depthWrite={true}
          />
        )}
            {snap.isLogoTexture && (
          <Decal position={[-0.5, -0.1, 0.15]}
          rotation={[0, 0, 0]}
          scale={0.4}
          map={logoTexture}
          depthTest={false}
          depthWrite={true}/>
        )}
    
    </mesh>
    <mesh receiveShadow castShadow geometry={nodes.shoe_2.geometry} material={materials.caps} />
    <mesh receiveShadow castShadow geometry={nodes.shoe_3.geometry} material={materials.inner} />
    <mesh receiveShadow castShadow geometry={nodes.shoe_4.geometry} material={materials.sole} />
    <mesh receiveShadow castShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} />
    <mesh receiveShadow castShadow geometry={nodes.shoe_6.geometry} material={materials.band} />
    <mesh receiveShadow castShadow geometry={nodes.shoe_7.geometry} material={materials.patch} />
  </group>
  )
}

export default Shoe