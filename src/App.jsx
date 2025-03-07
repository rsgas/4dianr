import { useState, useRef, useEffect } from 'react'
import './conf.css'
import Navi from './component/navs'
import Lists from './page/lists'
import Chapter_0 from './page/chapter/0'
import Home from './page/home'
import Introduction from './page/introdcution'

function OPC ({imgUrl, paraf}) {
  return (
    <div className={`w-full md:h-[250px] h-[200px] bg-center backdrop-brightness-50 grayscale-100 bg-[url(${imgUrl == "" ? "/4dianr/img/Chapter-0/Meet-And-Talk/MPLS-FB1.jpeg" : imgUrl})] bg-no-repeat bg-cover `}>
        <div className="w-full h-full flex justify-center items-center backdrop-blur-lg">
          <h1 className="text-white lora-400 text-4xl">Chapter {paraf}.</h1>
        </div>
    </div>
  )
}

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
      <OPC imgUrl={""} paraf={0}> 
        {/* imgUrl="", "" sends default value */}

      </OPC>
      <Chapter_0 refs={sectionRefs}>
      </Chapter_0>
    </div>
  )
}

export default App