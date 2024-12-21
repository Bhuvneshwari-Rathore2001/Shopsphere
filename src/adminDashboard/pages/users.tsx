import axios from 'axios';
import { useEffect, useState } from 'react';
import { UsersTable } from '../Components/UsersTable';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get('http://localhost:4000/api/v1/admin/users', {
        withCredentials: true,
      });
      if (res.data.success) {
        setUsers(res.data.users);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className='mt-10'>
      <UsersTable users={users}/>
    </div>
  );
};

export default Users;
