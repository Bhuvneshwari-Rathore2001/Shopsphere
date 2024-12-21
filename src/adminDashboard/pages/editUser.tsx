import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditUser = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const { id } = useParams();
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/admin/user/${id}`,
        { withCredentials: true }
      );
      const { success, user } = data;
      if (success) {
        setName(user.name);
        setEmail(user.email);
        setRole(user.role);
      }
    };
    fetchUser();
  }, []);

  const handleEditUser = async (e: any) => {
    e.preventDefault();
     const res = await axios.put(`http://localhost:4000/api/v1/admin/user/${id}`,{
      name:name,
      email:email,
      role:role
     },{
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if(res.data.success){
        setMessage(res.data.msg)
      }

  };

  
  return (
    <form
      className='flex items-center justify-center bg-gray-100 h-screen'
      onSubmit={handleEditUser}
    >
      <main className='w-full max-w-sm flex-col flex gap-3 bg-white text-sm'>
        <div className='w-4/5 m-auto flex flex-col gap-4'>
          <h1 className='text-[#4a4848] font-bold text-xl'>Update User here</h1>

          <div className='flex flex-col gap-1'>
            <label className='text-[#4a4848]'>Name</label>
            <input
              className='border border-[rgba(162,162,162,0.53)] rounded p-2'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-[#4a4848]'>Email</label>
            <input
              className='border border-[rgba(162,162,162,0.53)] rounded p-2'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='category' className='text-[#4a4848]'>
              Role
            </label>
            <select
              id='role'
              name='role'
              value={role} // Bind the state
              onChange={(e) => setRole(e.target.value)} // Update the state
              className='border border-[rgba(162,162,162,0.53)] rounded p-2'
            >
              <option value='Admin'>Admin</option>
              <option value='User'>User</option>
            </select>
          </div>

          <div>
            <button className='w-full h-12 bg-red-600 text-white flex border-red-600 border rounded text-lg items-center justify-center uppercase mt-3'>
              Update
            </button>
          </div>

            {message ? <div className='text-green-500'>{message}</div> :<div className='text-red-500'>Something went Wrong</div>}

        </div>
      </main>
    </form>
  );
};

export default EditUser;
