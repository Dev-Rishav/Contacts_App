import React from 'react'
import {AiOutlineClose} from "react-icons/ai"

const Modal = ({isOpen, onClose, children}) => {

    // console.log(isOpen);
    return (
        <>
            {isOpen && <><div
                className='m-auto z-50 relative min-h-[200px] max-w-[80%] bg-white'>
                    <div className='flex justify-end'>
                        <AiOutlineClose onClick = {onClose} className='cursor-pointer self-end text-2xl'></AiOutlineClose>

                    </div>
            {children}
            </div>
            <div onClick = {onClose} className=' absolute top-0 z-40 backdrop-blur h-screen w-screen'/>
            </>}
        </>
    )
}

export default Modal