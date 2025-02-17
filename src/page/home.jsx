export default function Home ({sectionRefs}) {
    return (
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
    )
}