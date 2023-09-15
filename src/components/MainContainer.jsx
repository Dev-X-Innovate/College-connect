import React, { useState } from 'react'
import HomeContainer from './HomeContainer';
import { useStateValue } from '../context/StateProvider';
import { useEffect } from 'react';

const MainContainer = () => {

   const [scrollValue, setScrollValue] = useState(0);

   useEffect (() => {}, [scrollValue])


  return (
     <div className='w-full h-auto flex flex-col items-center justify-center'>
        <HomeContainer />

        
     </div>
    );
};

export default MainContainer;