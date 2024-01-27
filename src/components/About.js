import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
  const a= useContext(noteContext)
  useEffect(()=>{
    a.update();
  },[])
  return (
    <div>
      About Page
    </div>
  )
}

export default About
//about page{a.state.name} and in class{a.state.class}