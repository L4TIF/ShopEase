import { Link } from "react-router-dom"




const Home = () => {
    return (<>
        <div className="lg:flex h-screen gap-10 items-start lg:mt-60 justify-between text-center  text-5xl">
            <div>
                <h1 className="mb-2 mt-16">Find the best products at ShopEase!</h1>
                <p className="mb-6 text-lg text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, aspernatur.</p>
                <Link to='Shop' className=" py-4 px-8 rounded-xl text-lg text-white bg-black">Shop now</Link>
            </div>
            <div>
                <div className="lg:mr-20 mt-10 flex justify-center items-center" ><img className=" w-28 md:w-80 object-contain" src="../public/shopping-cart.png" /></div>
            </div>
        </div>

    </>
    )
}

export default Home