'use client'

import Link from "next/link"

const Login = () => {
  return (
    <div>Login
        <br/>
        <Link href="/login/loginstudent">Login as Student</Link>
        <br/>
        <Link href="/login/loginteacher">Login as Teacher</Link>
    </div>
  )
}

export default Login