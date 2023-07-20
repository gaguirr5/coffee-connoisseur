import {useRouter} from 'next/router'
import Link from "next/link"

const CoffeeStore = () =>{
    const router = useRouter();
    console.log(router.query.id)
    return(
        <div>
            Coffee Store
            <Link href="/">
                Back to Home
            </Link>

            <Link href="/coffee-store/two ">
                Go to page dynamic
            </Link>
        </div>
        
    )
}

export default CoffeeStore;