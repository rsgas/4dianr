import { useState, useRef, useEffect } from 'react'
import './conf.css'
import Navi from './component/navs'
import Lists from './page/lists'

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
        return "#"
    }
  }

  return (
    <div className='bg-custom selection:text-blue-200 selection:bg-blue-950'>
      {/* Navigation Bar */}
      <Navi href={href} userlisten={userListen} navtheme={navTheme}
      ></Navi>
      {/* Home */}
      <div className="w-full h-screen flex justify-center items-center"
      ref={
        (e) => (sectionRefs.current["Home"] = e)
      } role='Home'>
        <div className="md:w-1/2 w-[80%]  p-2 h-auto flex flex-col justify-center items-center">
          <h1 className='text playfair-400 text-5xl md:text-6xl typing-anim'>
            {/* BUFFER */}
          </h1>
          
          <a href="#introduction" className='oswald-400 text-[#3b352d] text-2xl bg-[#DAC0A3] underline p-2 py-1.5 rounded-md m-2 mt-10 transition-all duration-300 hover:bg-[#ccb59b]'>Start The <i>Journeyy</i>!!</a>
        </div>
      </div>
      {/* Introduction */}
      <div 
        ref={(e) => (sectionRefs.current['Introduction'] = e)}
        role='Introduction'
        id='introduction'
        className="w-full h-screen flex flex-col justify-center items-center" 
      >
      <div className="md:w-[60%] w-[80%] ">
        <h2 className='playfair-400 text-4xl'>Hello!!</h2>
        <h3 className='lora-400 text-2xl'>Before We Started The Journey, I'm gonna tell you something</h3>
        <p className='text-[#3f382f] text-lg oswald-400'>
            Hiii, ini <a href="https://github.com/rsgas" className='text-[#29251f] underline' target='_blank'><i><b>Abim/rsgas</b></i></a> as a developer. Aku Spending Waktu dan tenaga buat develop app ini secara serius karna mungkin ini bakal berarti besar untuk kita. Seandainya kita putus atau terpisah aku tidak akan <i><a>Undeploy atau menghapus App</a></i> ini dan masi bisa di aksess secara langsung, maafkan kalau mungkin ada beberapa dari kenangan kita yang tidak aku munculin karna entah dari kurang foto atau gambar dll, Terima produk digital ini dan akan saya representasikan kita selama 5 bulan lebih. Aku harap ini bisa membuat kita makin dekat, langgeng dan sampe ke tahap yang jauh <b><i>lebih serius</i></b>
            <br /><br />
            <p className='text-[#3f382f] text-lg oswald-400'>
              Terima kasih juga untuk <i><a href="http://instagram.com/_ddiandraa" target='_blank' className='underline'><b>Diandra Ramadhani</b></a></i> karna telah mau menerima pemberian produk digital ini :3
            </p>
          </p>  
          <div className="w-full text-right oswald-400 text-lg underline">
            <a href="#lists-contents "><i>Lanjutt!!</i></a>
          </div>
        </div>
      </div>
      {/* Lists Of Contents */}
      <Lists sectionRefs={sectionRefs}>

      </Lists>
      </div>
  )
}

export default App