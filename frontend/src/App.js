
import './App.css';
import Product from './component/Products/Product';
import NavBar from './component/Navbar/NavBar';
import ProductItem from './component/ProductItem';
import SignUp from './component/SignUp/SignUp';
import SignIn from './component/SignIn/SignIn';
import Error from './component/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddItem from './component/additem/AddItem';
import ProfilePage from './component/profilepage/ProfilePage';
import EditProfile from './component/editprofile/EditProfile';
import { useState } from 'react';


function App() {
  const [filterProduct, setFileterproduct]=useState([]);
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/signup' element ={<SignUp/>}/>

      <Route exact path='/signin' element ={<SignIn/>}/>

      <Route exact path='/' element ={
        <>
        <NavBar setFileterproduct={setFileterproduct}/>
        <Product filterProduct={filterProduct}/>
        </>
        }/>

    <Route exact path='/additem' element ={<AddItem/>}/>
    <Route exact path='/editprofile' element ={<EditProfile/>}/>
    <Route exact path='/profile' element ={<>
      <NavBar setFileterproduct={setFileterproduct}/>
     <ProfilePage/>
    </>}/>

      <Route exact path='/*' element ={<Error/>}/>
    </Routes>
    </BrowserRouter>
      
      </>
  );
}

export default App;
