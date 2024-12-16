
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (<>
        <div className='flex mt-60 items-center h-screen flex-col'>
            <div className='text-red-400 text-4xl mb-4'>Error 404 Page not found</div>
            <Link to='/ShopEase' className='border p-5 rounded-lg '>Go to Homepage</Link>
        </div>
    </>

    )
}

export default ErrorPage