import React from 'react'

const Header = () => {

  return (

    
   <header className="w-full flex justify-between items-center mb-8 px-10 py-5">
        <button>
            <img src="/logo.png" className='w-15 h-15 rounded-full' alt="Logo" />
        </button>
        <button
        //   onClick={handleLogin}
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
        >
            Login
          {/* {isLoggedIn ? "Logged In" : "Login"} */}
        </button>
      </header>

  )
}

export default Header