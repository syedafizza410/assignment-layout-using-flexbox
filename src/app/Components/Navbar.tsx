import img from '../assets/logo.9ff76f62.png'
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="bg-blue-900 h-24 w-full flex justify-around items-center ">
            
            <div className="fixed top-24 left-96 transform -translate-y-1/2 z-10">
            <Image src={img} alt="logo" height={20} width={120} className='ml-32'/>
            </div>

            <div className="ml-96 text-3xl text-white pl-80">Tuition Free Education Program on Latest Technologies
            </div>

            <ul className="flex justify-between items-center p-10 text-white space-x-6 mr-128">
                <li className="text-2xl">Home</li>
                <li className="text-2xl">Apply</li>
                <li className="text-2xl">Jobs</li>
                <li className="text-2xl">Results</li>
            </ul>
        </nav>
    )
}

export default Navbar