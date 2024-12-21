import { DocumentIcon } from '@heroicons/react/24/solid';
import { Card, IconButton, Typography } from '@material-tailwind/react';
import axios from 'axios';
import { RiDeleteBin4Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { IUser } from '../../types/user';

interface IUserTable {
  users: IUser[];
}
const TABLE_HEAD = ['User ID', 'Email', 'Name', 'Role', 'Actions'];

const handleDeleteUser = async (e: any) => {
  e.preventDefault();
  // const res = await axios.delete(
  //   `http://localhost:4000/api/v1/admin/user/${}`,
  //   {
  //     withCredentials: true,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   }
  // );
  // console.log(res);
};

export function UsersTable({ users }: IUserTable) {
  return (
    <Card className='h-full w-full'>
      <table className='w-full min-w-max table-auto text-left'>
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className='p-4 pt-10'>
                <Typography
                  variant='small'
                  color='blue-gray'
                  className='font-bold leading-none'
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='overflow-y-auto'>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td className='p-4'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-bold'
                  >
                    {user._id}
                  </Typography>
                </td>
                <td className='p-4'>
                  <Typography
                    variant='small'
                    className='font-normal text-gray-600'
                  >
                    {user.email}
                  </Typography>
                </td>
                <td className='p-4'>
                  <Typography
                    variant='small'
                    className='font-normal text-gray-600'
                  >
                    {user.name}
                  </Typography>
                </td>
                <td className='p-4'>
                  <Typography
                    variant='small'
                    className='font-normal text-gray-600'
                  >
                    {user.role}
                  </Typography>
                </td>

                <td className='p-4'>
                  <div className='flex items-center gap-2'>
                    <Link to={`update/${user._id}`}>
                      <IconButton variant='text' size='sm'>
                        <DocumentIcon className='h-4 w-4 text-gray-900' />
                      </IconButton>
                    </Link>
                    <IconButton
                      variant='text'
                      size='sm'
                      onClick={handleDeleteUser}
                    >
                      <RiDeleteBin4Fill
                        strokeWidth={3}
                        className='h-4 w-4 text-red-600'
                      />
                    </IconButton>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
