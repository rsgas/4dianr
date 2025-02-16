
export default function Lists ({sectionRefs}) {
    return (
        <div className={`w-full h-auto bg-blue-950 flex flex-col justify-center items-center text-[#d4d7fc] selection:bg-fuchsia-900 selection:text-fuchsia-200`} id='lists-contents' role='Lists Contents'
        ref={(e) => (
          sectionRefs.current['lists'] = e
        )}>
        <div className="paraf md:w-[40%] w-[80%] mt-20 p-10 h-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-start">
          <h1 className='libre-400 text-lg'><b>List Of Contents</b></h1>
          <p className='oswald-400 text-gray-400 text-md'>Before We started the <i>Journey</i> we wan't to y'all know a little spoiler </p>
          <br />
        </div>
          <ol className='libre-400' style={{
            "listStyle": "upper-roman"
          }}>
            <li>
              <b>Opening / <a href="#introduction" className="underline text-white oswald-400"><i>Introduction</i></a></b>
              <ul className='pl-3 oswald-400' style={
                {"listStyle": "'- '"}
              }>
                <li><b>Opening: </b>Thanks, Esspecialy for <a href="https://instagram.com/_ddiandraa" target='_blank' className='underline'><i>Diandra Ramadhani</i></a></li>
                <li><b>Opening: </b> Who Is This For? </li>
              </ul>
            </li>
            <li>
              <b>Chapter 0</b>
              <ul className='pl-3 oswald-400' style={
                {"listStyle": "'- '"}
              }>
                <li><b>Chapter 0: </b>The First Time We Meet</li>
                <li><b>Chapter 0: </b>The First Time We Talks</li>
                <li><b>PKS: </b>The First Time I Fall With Her</li>
              </ul>
            </li>
            <li>
              <b>Chapter I</b>
              <ul className='pl-3 oswald-400' style={
                {"listStyle": "'- '"}
              }>
                <li><b>Chapter I: </b>The No Status Era</li>
                <li><b>Chapter I: </b>The First Time We Getting Closer</li>
                <li><b>Chapter I: </b>Our First Move</li>
              </ul>
            </li>
            <li>
              <b>Chapter II</b>
              <ul className='pl-3 oswald-400' style={
                {"listStyle": "'- '"}
              }>
                <li><b>Chapter II: </b>The First Video Call</li>
                <li><b>Chapter II: </b>The First Time We Getting Closer</li>
                <li><b>Chapter II: </b>Our First Move</li>
              </ul>
            </li>
            <li>
              <b>Chapter III</b>
              <ul className='pl-3 oswald-400' style={
                {"listStyle": "'- '"}
              }>
                <li><b>Chapter III: </b>The First Video Call</li>
                <li><b>Chapter III: </b>The First Time We Getting Closer</li>
                <li><b>Chapter III: </b>Our First Move</li>
              </ul>
            </li>
            <li>
              <b>Chapter III</b>
              <ul className='pl-3 oswald-400' style={
                {"listStyle": "'- '"}
              }>
                <li><b>Chapter III: </b>The First Video Call</li>
                <li><b>Chapter III: </b>Fivaganza 5.0</li>
                <li><b>Chapter III: </b>Study Orientation (Pengenalan Jurusan)</li>
                <li><b>Chapter III: </b>And More Of Our Moments</li>
              </ul>
            </li>
            <li>
              <b>Chapter IV</b>
              <ul className='pl-3 oswald-400' style={
                {"listStyle": "'- '"}
              }>
                <li><b>Chapter IV: </b>First Date, Dago</li>
                <li><b>Chapter IV: </b>Cinncussion Movie, Teras Sunda Cibiru</li>
                <li><b>Chapter IV: </b>Grill Party <i>(Babakaran)</i></li>
              </ul>
            </li>
            <li>
              <b>Closing & Footer</b>
              <ul className='pl-3 oswald-400' style={
                {"listStyle": "'- '"}
              }>
                <li><b>Behind The Code: </b>The Reason We Built This App</li>
                <li><b>Behind The Code: </b>Documentation</li>
                <li><b>Behind The Code: </b>About Us, <i><b>(Developer)</b></i></li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    )
}