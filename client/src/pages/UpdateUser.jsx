import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:3001/users/${id}`)
            .then((response) => {
                setName(response.data.message.name);
                setEmail(response.data.message.email);
                setDob(response.data.message.dob);
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
                console.log(error);
            });
    }, [])

    const handleUpdateUser = () => {
        const data = {
            name: name,
            email: email,
            dob: dob,
        };
        setLoading(true);
        axios
            .put(`http://localhost:3001/users/${id}`, data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                console.log(data);
            });
    };

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-4xl my-4 mx-auto font-bold text-center'>Update {name}</h1>
            {loading ? <Spinner /> : (
                <div className='flex flex-col rounded-xl w-[600px] p-4 my-8 mx-auto'>
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
                    <button className='p-2 bg-sky-300 m-8' onClick={handleUpdateUser}>
                        Update
                    </button>
                </div>
            )}
        </div>
    )
}

export default UpdateUser