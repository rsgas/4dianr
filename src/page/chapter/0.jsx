export default function Chapter_0 ({refs}) {
    return (
        <div className="w-full lg:h-screen h-auto p-10 overflow-hidden bg-white " ref={(e) => (
            refs.current['Chapter 0'] = e
        )}  id="chapter-0"  role="Chapter 0">
            
            <div className="w-full h-full flex justify-center flex-col ">
            <div className="w-full flex flex-col text-center justify-center">
                <h1 className="lora-400 text-3xl font-bold ">We Started Over Here!!</h1>
                <p className="oswald-400 text-gray-400 mb-5">In this chapter, we don't even know each other</p>
            </div>
            <div className="flex w-full flex-wrap h-auto justify-center items-center gap-10">
                <a href="#xml" className="md:w-[400px] md:h-[400px] h-[200px] w-[200px]">
                    <img src={encodeURI("/4dianr/img/Chapter-0/Meet-And-Talk/TWB1.jpeg")} alt="Abim Twibbon"
                        className="w-full border-gray-700 h-full grayscale drop-shadow-2xl rounded
                        duration-300 hover:grayscale-25"/>
                </a>
                <a href="#xml" className="md:w-[400px] md:h-[400px] h-[200px] w-[200px] ">
                    <img src={encodeURI("/4dianr/img/Chapter-0/Meet-And-Talk/TWB2.jpg")} alt="Diandraa Twibbon"
                        className="w-full border-gray-500 h-full grayscale drop-shadow-2xl rounded
                        duration-300 hover:grayscale-25"/>
                </a>
                
            </div>
            </div>
        </div>
    )
}