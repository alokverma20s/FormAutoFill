'use client'

import { useRouter } from "next/navigation";

function Page(){
    const router = useRouter();
    console.log(router.query);
    return (
        <div>
            <h1>Product Details </h1>
        </div>
    )
}
export default Page;