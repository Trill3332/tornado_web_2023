import Image from './components/image'
import HeaderLine from './components/HeaderLine'
import Profileinfo from './components/Profileinfo'


function App() {

  return (
    <>
      <div className="font-serif flex justify-center  items-center h-48 mx-auto">
        <div className=' bg-white w-72 p-5 rounded-xl text-center m-auto shadow-md'>
          <Image />
          <HeaderLine />
          <Profileinfo />
        </div>
      </div>
    </>
  )
}

export default App
