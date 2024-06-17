import './App.css';
import Navbar from './Components/Navbar';
import { MdPersonSearch } from "react-icons/md";
import { FaPlusCircle, FaUser } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from './Components/ContactCard';
import AddAndUpdateContact from './Components/AddAndUpdateContact';

function App() {

  const [contact, setContact] = useState([]); //Initialize an empty array

  const [isOpen,setOpen]= useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  

  const onClose= () => {
    setOpen(false);
  }

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
        <div className='flex '>
          <div className='relative flex items-center flex-grow'>
            <MdPersonSearch className='text-3xl text-white absolute ml-1'></MdPersonSearch>
            <input type="text" className='border text-white pl-9 bg-transparent border-white h-10 flex-grow rounded-md '></input>
          </div>
          <FaPlusCircle  
          onClick={onOpen}
          className='text-4xl ml-2 cursor-pointer text-white gap-2'></FaPlusCircle>
        </div>
        <div className='mt-5 gap-3 flex-col flex' >
          {
            contact.map((contact) => (
              <ContactCard key={contact.id} contact={contact}/>
        ))}
              </div>
      </div >
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
      </>
      )
      
}

      export default App
