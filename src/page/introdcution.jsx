export default function Introduction ({sectionRefs}) {
    return (
        <div 
        ref={(e) => (sectionRefs.current['Introduction'] = e)}
        role='Introduction'
        id='introduction'
        className="w-full p-10 h-auto md:h-screen flex flex-col justify-center items-center" 
      >
      <div className="md:w-[60%] w-[80%] ">
        <h2 className='playfair-400 text-4xl'>Hello!!</h2>
        <h3 className='lora-400 text-2xl'>Before We Started The Journey, I'm gonna tell you something</h3>
        <p className='text-[#3f382f] text-lg oswald-400'>
            Hiii, ini <a href="https://github.com/rsgas" className='text-[#29251f] underline' target='_blank'><i><b>Abim/rsgas</b></i></a> as a developer. Aku Spending Waktu dan tenaga buat develop app ini secara serius karna mungkin ini bakal berarti besar untuk kita. Seandainya kita putus atau terpisah aku tidak akan <i><b>Undeploy</b> atau <b>menghapus App</b></i> ini dan masi bisa di aksess secara langsung, maafkan kalau mungkin ada beberapa dari kenangan kita yang tidak aku munculin karna entah dari kurang foto atau gambar dll, Terima produk digital ini dan akan saya representasikan kita selama 5 bulan lebih. Aku harap ini bisa membuat kita makin dekat, langgeng dan sampe ke tahap yang jauh <b><i>lebih serius</i></b>
          </p>  
          <br />
          <p className='text-[#3f382f] text-lg oswald-400'>
              Terima kasih juga untuk <i><a href="http://instagram.com/_ddiandraa" target='_blank' className='underline'><b>Diandra Ramadhani</b></a></i> karna telah mau menerima pemberian produk digital ini :3
            </p>
          <div className="w-full text-right oswald-400 text-lg underline">
            <a href="#lists-contents "><i>Lanjutt!!</i></a>
          </div>
        </div>
      </div>
    )
}