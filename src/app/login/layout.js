'use client'

import { usePathname, useRouter } from "next/navigation"

const layout = ({children}) => {
    const router = useRouter();
    const pathname = usePathname();


    const navigate = (name) => {
        router.push(name);
    };
  return (
    <div>
        <ul className="flex items-center gap-6 font-semibold absolute top-0 mt-3 left-[50%] -translate-x-[50%]">
            <li><h4 onClick={()=>navigate('/')} className="font-bold text-xl cursor-pointer">Login Navbar</h4></li>
            {pathname !== '/login'?<li><button onClick={()=> navigate('/login')}>Login</button></li>:null }
            {pathname !== '/login/loginstudent'?<li><button onClick={()=> navigate('/login/loginstudent')}>Login Student</button></li>:null }
            {pathname !== '/login/loginteacher'?<li><button onClick={()=> navigate('/login/loginteacher')}>Login Teacher</button></li>:null }
        </ul>
        <div className="mt-20">
            {children}
        </div>
    </div>
  )
}

export default layout