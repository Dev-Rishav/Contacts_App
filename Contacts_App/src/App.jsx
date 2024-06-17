import './App.css';
import Navbar from './Components/Navbar';
import { MdPersonSearch } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";

function App() {

  return (
    <>
      <div className='max-w-[370px] mx-auto px-4'>
        <Navbar />
        <div className='flex'>
        <div className='relative flex items-center flex-grow'>
          <MdPersonSearch className='text-3xl text-white absolute ml-1'></MdPersonSearch>
          <input type="text" className='border text-white pl-9 bg-transparent border-white h-10 flex-grow rounded-md '></input>
        </div>
        <FaPlusCircle className='text-4xl ml-2 cursor-pointer text-white gap-2'></FaPlusCircle>
      </div>
    </div >
    </>
  )
}

export default App
