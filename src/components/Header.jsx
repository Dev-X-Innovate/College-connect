import React from 'react';
import Logo from '../img/logo.png';
import { motion } from "framer-motion";
import {TbLogout} from 'react-icons/tb';
import {AiOutlinePlus} from 'react-icons/ai';
import Avatar from '../img/avatar.png';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { useState } from 'react';



const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();
  
  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };




  return (
    <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary'>
      {/* Desktop & Tablet*/}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={""} className='flex items-center gap-2'> 
          <img src={Logo} className='w-[70px] -mt-2 object-cover' alt="logo" />
          <p className='text-headingColor text-3xl font-bold relative'>College Connect<p className='text-[8px] -mt-[15px]'>-By R2*(VS)</p></p>
        </Link>

        <motion.ul 
        initial={{opacity : 0, x : 200}}
        animate={{opacity : 1, x : 0}}
        exit={{opacity : 0, x : 200}}
        
        className='flex items-center gap-8'>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Events</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Attendence</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
        </motion.ul>
        <div className='relative flex items-center gap'>
        <div className='relative'>
        <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
            />
          {
            isMenu && (
              <motion.div 
              initial={{opacity : 0, scale : 0.6}}
              animate={{opacity : 1, scale : 1}}
              exit={{opacity : 0, scale : 0.6}} 
              className='w-40 bg-green-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'>
            {
              user && user.email === "viveksahu_ce_2021@ltce.in" && (
                <Link to={'/createItem'}>
                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'
                
                onClick={() => setIsMenu (false)}
                >New Item <AiOutlinePlus /></p>
                </Link>
              
              )
              
            }
            
              <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'
              onClick={logout}>
                Log Out &nbsp; &nbsp;<TbLogout />
              </p>
          </motion.div>
            )
          }
        </div>
       
          
        
        </div>
        

      </div>
    
      {/*For Mobile*/}
      <div className='flex items-center justify-between md:hidden w-full h-full'>
      
     
      <Link to={"/"} className='flex items-center gap-0'> 
          <img src={Logo} className='w-12 object-cover' alt="logo" />
          <p className='text-headingColor text-2xl font-bold'>C</p>
      </Link>


      <div className='relative'>
          <motion.img 
            whileTap={{scale:0.6}}
            src={user ? user.photoURL : Avatar}
            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
            alt="user profile" 
            onClick={login}
          />
          {
            isMenu && (
              <motion.div 
              initial={{opacity : 0, scale : 0.6}}
              animate={{opacity : 1, scale : 1}}
              exit={{opacity : 0, scale : 0.6}} 
              className='w-40 bg-green-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'>
            {
              user && user.email === "viveksahu_ce_2021@ltce.in" && (
                <Link to={'/createItem'}>
                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'>New Item <AiOutlinePlus /></p>
                </Link>
              
              )
              
            }
      <ul     
        className='flex flex-col'>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2
          onClick={() => setIsMenu (false)}'>Home</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2
          onClick={() => setIsMenu (false)}'>Events</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2
          onClick={() => setIsMenu (false)}'>Attendence</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2
          onClick={() => setIsMenu (false)}'>About Us</li>
      </ul>
            
              <p className='m-2 p-2 rounded-md shadow:md flex items-center justify-center bg-gray-300 gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'
              onClick={logout}>
                Log Out<TbLogout />
                </p>
          </motion.div>
            )
          }
        </div>
        
      </div>  
    
    </header>
  )
}

export default Header