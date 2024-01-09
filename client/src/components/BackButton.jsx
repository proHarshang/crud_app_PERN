import React from 'react'
import { Link } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";

const CreateBtn = () => {
    return (
        <Link to='/' className='rounded-full bg-cyan-600 p-3 m-3 text-white text-3xl shadow flex align-middle justify-center fixed'><IoChevronBackOutline /></Link>
    )
}

export default CreateBtn