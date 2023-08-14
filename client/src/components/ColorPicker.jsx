import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from "../store"

const ColorPicker = () => {
  const snap = useSnapshot(state);

  const handleColorChange = (color) => {
    if (snap.current) {
      state.items[snap.current] = color.hex;
      state.color = color.hex;
    }
  };

  return (
    <div className={`absolute flex top-5 z-10  ml-3 ${snap.current ? 'left-full' : 'hidden'}`}>
      <SketchPicker
      color={snap.items[snap.current]}
      disableAlpha
      onChange={handleColorChange}

      />
      <h1 className='xl:text-[10rem]  ml-3 text-[3rem] xl:leading-[11rem] leading-[7rem] font-black text-black xs:mt-[25%] sm:mt-0 uppercase '>{snap.current}</h1>

    </div>
    // <div className='absolute left-full ml-3'>
    //   <SketchPicker
    //   color={snap.color}
    //   disableAlpha
    //   onChange={(color) => state.color = color.hex}

    //   />


    // </div>
  )
}

export default ColorPicker