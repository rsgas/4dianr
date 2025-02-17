import { useState, useRef, useEffect } from 'react'
import './conf.css'
import Navi from './component/navs'
import Lists from './page/lists'
import Chapter_0 from './page/chapter/0'
import Home from './page/home'
import Introduction from './page/introdcution'

function App() {

  const [userListen, setUserListen] = useState("Home")
  const sectionRefs = useRef({})

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          setUserListen(entry.target.role)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      "root": null,
      "threshold": 0.5
    })

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const navTheme = () => {
    switch (userListen) {
      case "Home": 
        return { 
          "base" : "text-[#312c25]",
          "hover": "hover:text-[#0c0b09]"
         }
      case "Lists Contents":
        return { 
          "base" : "text-[#d4d7fc]",
          "hover": "hover:text-[#999ab4]"
         }
      case "Chapter 0": 
         return {
          "base": "text-gray-700",
          "hover": "hover:text-black"
         }
      default:
        return { 
          "base" : "text-[#312c25]",
          "hover": "hover:text-[#0c0b09]"
        }
    }
  }

  const href = () => {
    switch (userListen) {
      case "Home":
        return "#introduction"
      case "Introduction":
        return "#lists-contents"
      case "Lists Contents":
        return "#chapter-0"
      case "Chapter 0":
        return "#"
    }
  }

  return (
    <div className='bg-custom selection:text-blue-200 selection:bg-blue-950'>
      {/* Navigation Bar */}
      <Navi href={href} userlisten={userListen} navtheme={navTheme}
      ></Navi>
      {/* Home */}
      <Home
        sectionRefs={sectionRefs}
      ></Home>
      {/* Introduction */}
      <Introduction sectionRefs={sectionRefs}></Introduction>
      {/* Lists Of Contents */}
      <Lists sectionRefs={sectionRefs}>

      </Lists>
      <Chapter_0 refs={sectionRefs}>

      </Chapter_0>
      </div>
  )
}

export default App