import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import CreateBtn from '../components/CreateBtn';
import Table from '../components/Table';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:3001/users/')
            .then((response) => {
                setUsers(response.data.message);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <div className='p-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-4xl my-8 mx-auto font-bold'>All Users</h1>                    
                </div>
                {!loading ? (
                    <Table users={users} />
                ) : (<Spinner />)}
            </div>
            <CreateBtn />
        </>
    );
};

export default Home;