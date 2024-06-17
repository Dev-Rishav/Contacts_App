import './App.css';
import Navbar from './Components/Navbar';
import { MdPersonSearch } from "react-icons/md";
import { FaPlusCircle, FaUser } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";

function App() {

  const [contact, setContact] = useState([]); //Initialize an empty array

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        const contactSnapshot = await getDocs(contactRef);
        const contactList = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContact(contactList); //update default list
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();

  }, []);


  return (
    <>
      <div className='max-w-[370px] mx-auto px-4'>
        <Navbar />
        <div className='flex gap-2'>
          <div className='relative flex items-center flex-grow'>
            <MdPersonSearch className='text-3xl text-white absolute ml-1'></MdPersonSearch>
            <input type="text" className='border text-white pl-9 bg-transparent border-white h-10 flex-grow rounded-md '></input>
          </div>
          <FaPlusCircle className='text-4xl ml-2 cursor-pointer text-white gap-2'></FaPlusCircle>
        </div>
        <div className='mt-5' >
          {
            contact.map(contact => (
              <div key={contact.id} className='p-2 rounded-lg  bg-yellow flex justify-around items-center' >
                <div className='flex gap-2'>
                  <FaUser className='text-orange text-3xl' />
                  <div className=''>
                    <h2 className='font-medium'>{contact.name}</h2>
                    <h2 className='text-sm font-medium'>{contact.Email}</h2>
                    <h2 className='text-sm font-medium'>{contact.Phone_No}</h2>
                  </div>
                  <div className='flex gap-1 text-xl'>
                    <RiEditCircleLine></RiEditCircleLine>
                    <IoMdTrash></IoMdTrash>
                  </div>
                </div>
              </div>
        ))}
              </div>
      </div >
      </>
      )
}

      export default App
