import React from 'react'
import { useNavigate } from "react-router-dom";


const Header = ({onClick, name}) => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (

    
   <header className="w-full flex justify-between items-center mb-8 px-10 py-5">
        <button className="cursor-pointer" onClick={goToHome}>
            <img src="/logo.png" className='w-15 h-15 rounded-full' alt="Logo" />
        </button>
        <button
          onClick={onClick}
          className="bg-lime-300 px-4 py-2 rounded hover:bg-lime-100  cursor-pointer"
        >
            {name}
        </button>
      </header>

  )
}

export default Header