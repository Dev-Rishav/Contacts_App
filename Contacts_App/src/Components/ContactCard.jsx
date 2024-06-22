import React from 'react'
import AddAndUpdateContact from './AddAndUpdateContact.jsx'
import { IoMdTrash } from 'react-icons/io';
import { RiEditCircleLine } from 'react-icons/ri';
import {FaUser } from "react-icons/fa";
import {deleteDoc,doc} from "firebase/firestore";
import {db} from "../config/firebase"

const ContactCard = ({contact}) => {

    const [isOpen,setOpen]= useState(false);

    const onOpen = () => {
      setOpen(true);
    };
  
    
  
    const onClose= () => {
      setOpen(false);
    }

    console.log( contact);


    const deleteContact = async (id)=> {
        try {
            
            await deleteDoc(doc(db,"contacts",id))

        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <>
            <div key={contact.id} 
            className='p-2 rounded-lg  bg-yellow flex justify-between items-center' >
            <div className='flex gap-2'>
                <FaUser className='text-orange text-4xl self-center' />
                <div className=''>
                    <h2 className='font-medium'>{contact.name}</h2>
                    <h2 className='text-sm font-medium'>{contact.Email}</h2>
                    <h2 className='text-sm font-medium'>{contact.Phone_No}</h2>
                </div>
                <div className='flex  text-xl ml-auto gap-2'>
                    <RiEditCircleLine></RiEditCircleLine>
                    <IoMdTrash onClick={() => deleteContact(contact.id)}/>
                </div>
            </div>
        </div>
        <AddAndUpdateContact isOpen={isOpen} onClose={onClose} ></AddAndUpdateContact>
        </>
        
    )
}
//TODO add navigate option

export default ContactCard;