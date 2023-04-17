import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

function Login() {
  return (
    <div className="flex justify-center items-center h-screen text-white">
      <div className="ring-1 ring-secondary rounded p-2 lg:p-4">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login