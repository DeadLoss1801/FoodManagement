import { useState } from "react";
import Navbar from "./Appbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async () => {
        let url = `http://localhost:8000/user/signup`
        let data = {
            "name": name,
            "email": email,
            "password": password,
            "confirmPassword": confirmPassword
        }


        let response = await axios.post(url, data);
        let user = response.data.data.user;
        localStorage.setItem('id', user._id);
        localStorage.setItem('name', user.name);
        navigate('/');

    }

    return (



        <>
            <Navbar />

            <div class="container mx-auto py-8">
                <h1 class="text-2xl font-bold mb-6 text-center">Registration Form</h1>
                <div class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
                        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="text" id="name" placeholder="John Doe" value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="email" id="email" placeholder="john@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="password" id="password" placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">Confirm Password</label>
                        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                            type="password" id="confirm-password" placeholder="********"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button
                        class="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                        style={{ background: '#9951d5' }}
                        onClick={handleSubmit}
                    >Register</button>
                </div>
            </div>
        </>
    );
}

export default Signup;