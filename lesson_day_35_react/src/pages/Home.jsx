import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-800">Welcome to Our Website</h1>
            <p className="mt-2 text-lg text-gray-600 text-center">This is home page of our website built with Tailwind CSS + React</p>

            <nav className="flex justify-center space-x-4 mt-6">
                    <Link to="feature" className="text-blue-500 hover:text-blue-700">Feature</Link>
                    <Link to="team" className="text-blue-500 hover:text-blue-700">Team</Link>
            </nav>

            <div className="mt-8">
                <Outlet />
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => navigate('profile')}>
                    Go to profile
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => navigate('dashboard')}>
                    Go to Dashboard
            </button>
        </div>
    )
}

export default Home