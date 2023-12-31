import Head from 'next/head'
import {useRouter} from 'next/router'

const Dynamic = () => {
    const router = useRouter();
    const query = router.query.dynamic;
    console.log(query)
    return (
        <div>
            <Head>
                <title>{query}</title>
            </Head>
            Hi there I am a dynamic router: 
        </div>
    )
};

export default Dynamic;