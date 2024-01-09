import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleCreateUser = () => {
        const data = {
            name,
            email,
            dob,
        };
        setLoading(true);
        axios
            .post('http://localhost:3001/users', data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    };

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-4xl my-4 mx-auto font-bold text-center'>Add New User</h1>
            {loading ? <Spinner /> : (
                <div className='flex flex-col rounded-xl w-[600px] p-4 mt-20 mx-auto'>
                    <div className='my-4'>
                        <label className='text-xl mr-4 text-gray-500'>Name</label>
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2 w-full'
                        />
                    </div>
                    <div className='my-4'>
                        <label className='text-xl mr-4 text-gray-500'>Email</label>
                        <input
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2  w-full '
                        />
                    </div>
                    <div className='my-4'>
                        <label className='text-xl mr-4 text-gray-500'>DoB</label>
                        <input
                            type='text'
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2  w-full '
                        />
                    </div>
                    <button className='p-2 bg-sky-300 m-8' onClick={handleCreateUser}>
                        Add User
                    </button>
                </div>
            )}
        </div>
    );
}

export default CreateUser