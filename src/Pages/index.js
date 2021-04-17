import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import FullpageWrapper from '../Container/index'

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} />   
         <FullpageWrapper/>
        </>
    )
}

export default Home;