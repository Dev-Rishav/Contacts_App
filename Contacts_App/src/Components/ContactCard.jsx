import React from 'react'
import { IoMdTrash } from 'react-icons/io';
import { RiEditCircleLine } from 'react-icons/ri';
import {FaUser } from "react-icons/fa";

const ContactCard = ({contact}) => {
    console.log(contact);
    return (
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
    )
}

export default ContactCard;