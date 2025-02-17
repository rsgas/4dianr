
export default function Navi ({href, navtheme, userlisten}) {
    return (
        <div className={"flex h-20 items-center justify-center backdrop-blur-3xl fixed w-full z-40"}>
          <div className={`flex justify-evenly items-center p-5 gap-3 h-20 transition-all duration-200 ${navtheme().base}`}>
              <a href="#"><img src="/4dianr/icon/logo.png" title='Ini btw gambar aneh yang aku gambar di tangan kamu hehehehe :3' style={{"width": "40px"}} 
              className='grayscale-100 hover:grayscale-0 transition-all duration-100'/></a>
              <h1 className="playfair-400 text-2xl font-bold">Our Journey</h1>
              <div className="wrp">
                <a href={href()} className={`p-2 rounded border py-1.5 poppins-400 transition-all duration-200 ${navtheme().hover}`}>
                  {userlisten}
                </a>
              </div>
          </div>  
      </div>
    )
}