import axios from 'axios';
import { Suspense, lazy, useEffect, useState } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import Header from './Components/Header.tsx';
import Loader from './Components/Loader.tsx';
import Dashboard from './adminDashboard/pages/dashboard.tsx';
import EditOrder from './adminDashboard/pages/editOrder.tsx';
import EditProduct from './adminDashboard/pages/editProduct.tsx';
import EditUser from './adminDashboard/pages/editUser.tsx';
import ProductDetail from './pages/productDetails.tsx';
import { IUser } from './types/user.ts';
import Profile from './pages/profile.tsx';
// import Profile from './pages/Profile.tsx';

const Home = lazy(() => import('./pages/home'));
const Search = lazy(() => import('./pages/search'));
const Cart = lazy(() => import('./pages/cart'));
const Shipping = lazy(() => import('./pages/shipping.tsx'));
const Register = lazy(() => import('./pages/register.tsx'));
const Login = lazy(() => import('./pages/login.tsx'));
const ForgetPassword = lazy(() => import('./pages/forgetPassword.tsx'));
const UpdatePassword = lazy(() => import('./pages/updatePassword.tsx'));
const ResetPassword = lazy(() => import('./pages/resetPassword.tsx'));
const Order = lazy(() => import('./adminDashboard/pages/orders.tsx'));
const OrderDetails = lazy(() => import('./pages/orderDetails.tsx'));

//  Admin Routes Importing

const DashboardLayout = lazy(
  () => import('./adminDashboard/layout/dashboardLayout.tsx')
);
const Orders = lazy(() => import('./adminDashboard/pages/orders.tsx'));
const Products = lazy(() => import('./adminDashboard/pages/products.tsx'));
const NewProduct = lazy(() => import('./adminDashboard/pages/newProduct.tsx'));
const Users = lazy(() => import('./adminDashboard/pages/users.tsx'));
const Reviews = lazy(() => import('./adminDashboard/pages/reviews.tsx'));

function App() {
  const [user, setUser] = useState<IUser>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('http://localhost:4000/api/v1/me', {
        withCredentials: true,
      });
      if (res.data.success) {
        setIsAuthenticated(true);
        setUser(res.data.user);
      }
    };
    fetchUsers();
  }, []);

  return (
    <Router>
      {/* Header */}
      <div className='sticky top-0 left-0 z-50'>
        <Header user={user!} setUser={setUser} />
      </div>
      <Suspense>
        <Routes>
          {/*if not login or login both case  */}
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/product/details/:id' element={<ProductDetail />} />
          <Route
            path='/cart'
            element={isAuthenticated ? <Cart /> : <Navigate to='/' />}
          />

          {/*  Not Logged in Route */}
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

          <Route
            path='/password/forget'
            element={isAuthenticated ? <ForgetPassword /> : <Navigate to='/' />}
          />
          <Route
            path='/password/update'
            element={isAuthenticated ? <UpdatePassword /> : <Navigate to='/' />}
          />
          <Route
            path='/password/reset'
            element={isAuthenticated ? <ResetPassword /> : <Navigate to='/' />}
          />

          {/* Logged In User Routes */}

          <Route
            path='/shipping'
            element={isAuthenticated ? <Shipping /> : <Navigate to='/' />}
          />
          <Route
            path='/order'
            element={isAuthenticated ? <Order /> : <Navigate to='/' />}
          />
          <Route
            path='/order/:id'
            element={isAuthenticated ? <OrderDetails /> : <Navigate to='/' />}
          />
          <Route
            path='/profile'
            element={isAuthenticated ? <Profile /> : <Navigate to='/' />}
          />

          {/* Admin Routes */}

          <Route
            path='/admin'
            element={
              user?.role === 'Admin' || user?.role === 'Owner' ? (
                <DashboardLayout />
              ) : (
                // here we use navigate component from react router dom
                <Navigate to='/' />
              )
            }
          >
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='orders' element={<Orders />} />
            <Route path='orders/update/:id' element={<EditOrder />} />
            <Route path='products' element={<Products />} />
            <Route path='products/new' element={<NewProduct />} />
            <Route path='products/update/:id' element={<EditProduct />} />
            <Route path='users' element={<Users />} />
            <Route path='users/update/:id' element={<EditUser />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
