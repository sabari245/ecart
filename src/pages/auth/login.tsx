import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { supabase } from "@/components/utils";
import Head from "next/head";
import { useState } from "react";

export default function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function LoginUser() {

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })

    }

    async function GoogleAuth() {

        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google'
        })

    }


    return (
        <main>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
                    rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </Head>
            <Header />
            <Navbar />
            <div className="py-16 contain">
                <div className="max-w-lg px-6 mx-auto overflow-hidden rounded shadow py-7">
                    <h2 className="mb-1 text-2xl font-medium uppercase">Login</h2>
                    <p className="mb-6 text-sm text-gray-600">
                        welcome back customer
                    </p>
                    <form action="#" method="post" autoComplete="off">
                        <div className="space-y-2">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-gray-600">Email address</label>
                                <input onChange={(e) => { setEmail(e.target.value) }} type="email" name="email" id="email" className="block w-full px-4 py-3 text-sm text-gray-600 placeholder-gray-400 border border-gray-300 rounded focus:ring-0 focus:border-primary" placeholder="youremail.@domain.com" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-gray-600">Password</label>
                                <input onChange={(e) => { setPassword(e.target.value) }} type="password" name="password" id="password" className="block w-full px-4 py-3 text-sm text-gray-600 placeholder-gray-400 border border-gray-300 rounded focus:ring-0 focus:border-primary" placeholder="*******" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center">
                                <input type="checkbox" name="remember" id="remember" className="rounded-sm cursor-pointer text-primary focus:ring-0" />
                                <label htmlFor="remember" className="ml-3 text-gray-600 cursor-pointer">Remember me</label>
                            </div>
                            <a href="#" className="text-primary">Forgot password</a>
                        </div>
                        <div className="mt-4">
                            <button onClick={LoginUser} type="submit" className="block w-full py-2 font-medium text-center text-white uppercase transition border rounded bg-primary border-primary hover:bg-transparent hover:text-primary font-roboto">Login</button>
                        </div>
                    </form>
                    {/* login with */}
                    <div className="relative flex justify-center mt-6">
                        <div className="relative z-10 px-3 text-gray-600 uppercase bg-white">Or login with</div>
                        <div className="absolute left-0 w-full border-b-2 border-gray-200 top-3" />
                    </div>
                    <div className="flex gap-4 mt-4">
                        <button className="w-1/2 py-2 text-sm font-medium text-center text-white uppercase bg-blue-800 rounded font-roboto hover:bg-blue-700">facebook</button>
                        <button onClick={GoogleAuth} className="w-1/2 py-2 text-sm font-medium text-center text-white uppercase bg-red-600 rounded font-roboto hover:bg-red-500">google</button>
                    </div>
                    {/* ./login with */}
                    <p className="mt-4 text-center text-gray-600">Don't have account? <a href="register.html" className="text-primary">Register
                        now</a></p>
                </div>
            </div>

            <Footer />
        </main>
    )
}