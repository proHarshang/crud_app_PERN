import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';

const Table = ({ users }) => {
    return (
        <table className='w-full border-separate border-spacing-2'>
            <thead>
                <tr>
                    <th className='bg-slate-300 py-2 rounded-md'>No</th>
                    <th className='bg-slate-300 py-2 rounded-md'>Name</th>
                    <th className='bg-slate-300 py-2 rounded-md max-md:hidden'>
                        Email
                    </th>
                    <th className='bg-slate-300 py-2 rounded-md max-md:hidden'>
                        DOB
                    </th>
                    <th className='bg-slate-300 py-2 rounded-md'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={user._id} className='h-8'>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {index + 1}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {user.name}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {user.email}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {user.dob}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            <div className='flex justify-center gap-x-4'>
                                <Link to={`/users/update/${user._id}`}>
                                    <AiOutlineEdit className='text-2xl text-yellow-600' />
                                </Link>
                                <Link to={`/users/delete/${user.name}/${user._id}`}>
                                    <MdOutlineDelete className='text-2xl text-red-600' />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;