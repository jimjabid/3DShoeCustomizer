import React, { useState } from 'react'
import { AnimatePresence,motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import config  from '../config/config'
import state from "../store"
import {download} from "../assets"
import {downloadCanvasToImage, reader} from "../config/helpers"
import {EditorTabs,FilterTabs,DecalTypes} from "../config/constants"
import { fadeAnimation, slideAnimation } from '../config/motion'
import { AIPicker, ColorPicker, FilePicker,Tab,CustomButton } from '../components'
import { Color } from 'three'


const Customizer = () => {
  const snap = useSnapshot(state)

  const [file,setFile] = useState("");

  const [prompt,setPrompt] = useState ("");
  const [generatingImg, setGeneratingImg] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShoe: true,
    stylishShoe: false,
  })

  //show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "filepicker":
        return <FilePicker
        file ={file}
        setFile ={setFile}
        readFile ={readFile}
        />
      case "aipicker":
        return <AIPicker/>
      default:
        return null;
    }
  }

  const handleDecals = (type,result) =>{
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;
    
    if (!activeFilterTab[decalType.filterTab]){
      handleActiveFilterTab(decalType.filterTab)
    }
  
  }

  const handleActiveFilterTab = (tabName) =>{
    switch (tabName) {
      case "logoShoe":
          state.isLogoTexture = !activeFilterTab[tabName]
        break;    
      case "stylishShoe":
          state.isFullTexture = !activeFilterTab[tabName];
        break;    
      default:
        state.isFullTexture = false;
        state.isLogoTexture = true;
        break;
    }

    //after setting state, activeFiltertab is updated

    setActiveFilterTab ((prevState)=>{
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      }
    })
  }

  const readFile = (type) => {
    reader(file)
    .then((result)=>{
      handleDecals(type,result);
      setActiveEditorTab("")
    })
  }
  return (
    <AnimatePresence>
      {!snap.intro &&(
        <>
          <motion.div key="custom"
          className='absolute top-0 left-0 z-10'
          {...slideAnimation("left")}>
            <ColorPicker/>
            <div className='flex items-center min-h-screen'>
            
              <div className='editortabs-container tabs'>
             
                {EditorTabs.map((tab) =>(
                  <Tab
                  key={tab.name}
                  tab = {tab}
                  handleClick = {()=>setActiveEditorTab(tab.name)}
                  />
                )                  
                )}
                {generateTabContent()}
              </div>
            </div>
          </motion.div>
          <motion.div
          className='absolute top-5 right-5 z-10'
          {...fadeAnimation}>
            <CustomButton
            type="filled"
            title = "Go Back"
            customStyle= "w-fit px-4 py-2.5 font-bold text-sm"
            handleClick={() => state.intro= true}

            />
          </motion.div>
          <motion.div className='filtertabs-container'
          {...slideAnimation("up")}>
            {FilterTabs.map((tab) => (
              <Tab
              key={tab.name}
              tab={tab}
              isFilterTab
              isActiveTab = {activeFilterTab[tab.name]}
              handleClick={() => handleActiveFilterTab(tab.name) }
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer