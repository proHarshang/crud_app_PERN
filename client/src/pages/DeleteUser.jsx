import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteUser = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id, name } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    const handleDeleteUser = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:3001/users/${id}`)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('User Deleted successfully', { variant: 'success' });
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Error', { variant: 'error' });
                console.log(error);
            });
    };

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-4xl my-8 mx-auto font-bold text-center'>Delete {name}</h1>
            {loading ? <Spinner /> : (
                <div className='flex flex-col items-center rounded-xl w-[650px] p-8 my-40 mx-auto'>
                    <h3 className='text-2xl'>Are You Sure You want to delete <strong>{name}</strong>?</h3>

                    <button
                        className='p-4 bg-red-600 text-white m-8 w-full'
                        onClick={handleDeleteUser}
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    )
}

export default DeleteUser;