import React, { useRef } from 'react'

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
    // useFrame((state) => {
    //     const t = state.clock.getElapsedTime()
    //     group.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20)
    //     group.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    //   })

  return (
    <group  {...props} dispose={null}>
    <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
    <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
    <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
    <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
    <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
    <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
    <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
    <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
  </group>
  )
}

export default Shoe