import React from 'react'
import Header from '../Header/Header'

const Login = () => {
  return (
     <>
      <Header />
      <div className="flex items-center justify-center text-white">
         <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-xl p-10 w-full max-w-md flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center mb-4">Skill Swap Platform</h1>
        <label className="flex flex-col gap-2">
          <span className="text-lg">Email</span>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded bg-white/20 backdrop-blur-md border border-white/30 focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-lg">Password</span>
          <input
            type="password"
            placeholder="Enter your password"
            className="px-4 py-2 rounded bg-white/20 backdrop-blur-md border border-white/30 focus:outline-none"
          />
        </label>
        <button className="px-6 py-2 bg-white/20 border border-white/30 rounded-full hover:bg-white hover:text-black transition">
          Login
        </button>
        <a href="#" className="text-blue-400 text-sm text-center hover:underline">
          Forgot username/password
        </a>
      </div>
      </div>
    </>
  )
}

export default Login
