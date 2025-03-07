export default function Chapter_0 ({refs}) {
    return (
        <>
            <div className="w-full h-auto overflow-hidden bg-white " ref={(e) => (
            refs.current['Chapter 0'] = e
        )}  id="chapter-0"  role="Chapter 0">
            {/* bg-center grayscale-50
            bg-[url(/4dianr/img/Chapter-0/Meet-And-Talk/MPLS-FB1.jpeg)] bg-no-repeat */}
            
            <div className="w-full h-auto ">
                <div className="!IMG w-full relative top-[-12px] z-30 text p-10 bg-white ">
                <div className="w-full flex flex-col text-center justify-center">
                        <h1 className="lora-400 text-4xl font-bold ">We Started Over Here!!</h1>
                        <p className="oswald-400 text-gray-500 mb-5">In this chapter, we <span className="underline">don't</span> even know each other</p>
                    </div>
                    <div className="flex w-full flex-wrap h-auto justify-center items-center gap-10">
                        <a href="https://instagram.com/unholybim" target="_blank" className="md:w-[400px] md:h-[400px] h-[200px] w-[200px]">
                            <img src={encodeURI("/4dianr/img/Chapter-0/Meet-And-Talk/TWB1.jpeg")} alt="Abim Twibbon"
                                className="w-full border-gray-700 h-full grayscale drop-shadow-2xl rounded
                                duration-300 hover:grayscale-25 active:grayscale-0 "/>
                        </a>    
                        <a href="https://instagram.com/_ddiandraa" target="_blank" className="md:w-[400px] md:h-[400px] h-[200px] w-[200px] ">
                            <img src={encodeURI("/4dianr/img/Chapter-0/Meet-And-Talk/TWB2.jpg")} alt="Diandraa Twibbon"
                                className="w-full border-gray-500 h-full grayscale drop-shadow-2xl rounded
                                duration-300 hover:grayscale-25 active:grayscale-0" />
                        </a>
                    </div>
                    <div className="w-full flex justify-center mt-10">
                        <div className="sm:w-[50%] w-[80%] text-center">
                            <p className="oswald-400 text-gray-500">We started our journey even when we're did'nt know each other, <i>Dianda Ramadhani</i> comes from <a href="https://www.instagram.com/bdg.smpn49/" className="underline text-gray-700">49 Junior High School In Bandung</a>, while <i>Muhamad Rizky Ibrahim</i> comes from <a href="" className="underline text-gray-700" >59 Junior High School In Bandung</a></p>
                            <p className="oswald-400 text-gray-400">in this MPLS Activity, we don't even talk to each other. But from that moment, our journey <i>began</i></p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center ">
                        <div className="w-[80%] h-[1px] bg-gray-400 m-10"></div>
                    </div>
                    <h1 className="text-center lora-400"><i>That Moment...</i></h1>
                    <div className="w-full flex justify-center">
                        
                        <div className="w-[70%]">
                            <p className="oswald-400 text-gray-500 text-center">
                                Saat itu, aku tiba-tiba berada dalam satu kelompok produktif <i>dengannya</i>. Di sanalah aku mulai lebih mengenal kelas dan juga dirinya. Dialah yang pertama kali menyapaku dan bertanya, <i>~"Mau temenan nggak?"~</i> Karena ragu dan bingung, aku menjawab, "g";
                            </p>
                            <br />
                            <p className="oswald-400 text-gray-500 text-center">Dalam kelompok ini, kami mulai mengenal satu sama lain. Jujur, awalnya aku tidak terlalu peduli padanya.</p>
                            <br />
                            <div className="flex h-auto flex-wrap">
                                <div className="img sm:w-[50%] w-[300px] flex justify-center">
                                    <img src="/4dianr/img/Chapter-0/Meet-And-Talk/Contents/clapper-board.png" alt="Clapperboard" 
                                    className="w-[300px] grayscale duration-200 hover:grayscale-0" title="First Video"/>
                                </div>
                                <div className="paraf sm:w-[50%] w-[100%] flex flex-col justify-center text-start p-2">
                                    <h1 className="lora-400 text-3xl">Our First Video</h1>
                                    <p className="oswald-400 text-md text-gray-500">Disini saya/kita memulai perjalanan di jurusan <i>Produksi Film</i> ini, video klip ini juga hanya menceritakan tentang deskripsi dari alat clapperboard. </p>
                                    <div className="p-5 px-0">
                                    <a href="https://www.instagram.com/reel/C_AnBgMyJ9K/" target="_blank" className="oswald-400 p-2 text-white bg-black hover:bg-gray-500 duration:500 transition-all">See Video/<span>Lihat Video</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}