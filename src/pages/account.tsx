import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Head from "next/head";

export default function Account() {
    return (
        <div>
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
            <div className="container py-4 flex items-center gap-3">
                <a href="../index.html" className="text-primary text-base">
                    <i className="fa-solid fa-house" />
                </a>
                <span className="text-sm text-gray-400">
                    <i className="fa-solid fa-chevron-right" />
                </span>
                <p className="text-gray-600 font-medium">Account</p>
            </div>
            {/* ./breadcrumb */}
            {/* account wrapper */}
            <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
                {/* sidebar */}
                <div className="col-span-3">
                    <div className="px-4 py-3 shadow flex items-center gap-4">
                        <div className="flex-shrink-0">
                            <img src="../assets/images/avatar.png" alt="profile" className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover" />
                        </div>
                        <div className="flex-grow">
                            <p className="text-gray-600">Hello,</p>
                            <h4 className="text-gray-800 font-medium">John Doe</h4>
                        </div>
                    </div>
                    <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                        <div className="space-y-1 pl-8">
                            <a href="#" className="relative text-primary block font-medium capitalize transition">
                                <span className="absolute -left-8 top-0 text-base">
                                    <i className="fa-regular fa-address-card" />
                                </span>
                                Manage account
                            </a>
                            <a href="#" className="relative hover:text-primary block capitalize transition">
                                Profile information
                            </a>
                            <a href="#" className="relative hover:text-primary block capitalize transition">
                                Manage addresses
                            </a>
                            <a href="#" className="relative hover:text-primary block capitalize transition">
                                Change password
                            </a>
                        </div>
                        <div className="space-y-1 pl-8 pt-4">
                            <a href="#" className="relative hover:text-primary block font-medium capitalize transition">
                                <span className="absolute -left-8 top-0 text-base">
                                    <i className="fa-solid fa-box-archive" />
                                </span>
                                My order history
                            </a>
                            <a href="#" className="relative hover:text-primary block capitalize transition">
                                My returns
                            </a>
                            <a href="#" className="relative hover:text-primary block capitalize transition">
                                My Cancellations
                            </a>
                            <a href="#" className="relative hover:text-primary block capitalize transition">
                                My reviews
                            </a>
                        </div>
                        <div className="space-y-1 pl-8 pt-4">
                            <a href="#" className="relative hover:text-primary block font-medium capitalize transition">
                                <span className="absolute -left-8 top-0 text-base">
                                    <i className="fa-regular fa-credit-card" />
                                </span>
                                Payment methods
                            </a>
                            <a href="#" className="relative hover:text-primary block capitalize transition">
                                voucher
                            </a>
                        </div>
                        <div className="space-y-1 pl-8 pt-4">
                            <a href="#" className="relative hover:text-primary block font-medium capitalize transition">
                                <span className="absolute -left-8 top-0 text-base">
                                    <i className="fa-regular fa-heart" />
                                </span>
                                My wishlist
                            </a>
                        </div>
                        <div className="space-y-1 pl-8 pt-4">
                            <a href="#" className="relative hover:text-primary block font-medium capitalize transition">
                                <span className="absolute -left-8 top-0 text-base">
                                    <i className="fa-regular fa-arrow-right-from-bracket" />
                                </span>
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
                {/* ./sidebar */}
                {/* info */}
                <div className="col-span-9 grid grid-cols-3 gap-4">
                    <div className="shadow rounded bg-white px-4 pt-6 pb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-medium text-gray-800 text-lg">Personal Profile</h3>
                            <a href="#" className="text-primary">Edit</a>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-gray-700 font-medium">John Doe</h4>
                            <p className="text-gray-800">example@mail.com</p>
                            <p className="text-gray-800">0811 8877 988</p>
                        </div>
                    </div>
                    <div className="shadow rounded bg-white px-4 pt-6 pb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-medium text-gray-800 text-lg">Shipping address</h3>
                            <a href="#" className="text-primary">Edit</a>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-gray-700 font-medium">John Doe</h4>
                            <p className="text-gray-800">Medan, North Sumatera</p>
                            <p className="text-gray-800">20371</p>
                            <p className="text-gray-800">0811 8877 988</p>
                        </div>
                    </div>
                    <div className="shadow rounded bg-white px-4 pt-6 pb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-medium text-gray-800 text-lg">Billing address</h3>
                            <a href="#" className="text-primary">Edit</a>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-gray-700 font-medium">John Doe</h4>
                            <p className="text-gray-800">Medan, North Sumatera</p>
                            <p className="text-gray-800">20317</p>
                            <p className="text-gray-800">0811 8877 988</p>
                        </div>
                    </div>
                </div>
                {/* ./info */}
            </div>
            {/* ./account wrapper */}
            {/* footer */}
            <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
                <div className="container grid grid-cols-3">
                    <div className="col-span-1 space-y-8 mr-2">
                        <img src="../assets/images/logo.svg" alt="logo" className="w-30" />
                        <div className="mr-2">
                            <p className="text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic?
                            </p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-gray-500"><i className="fa-brands fa-facebook-square" /></a>
                            <a href="#" className="text-gray-400 hover:text-gray-500"><i className="fa-brands fa-instagram-square" /></a>
                            <a href="#" className="text-gray-400 hover:text-gray-500"><i className="fa-brands fa-twitter-square" /></a>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <i className="fa-brands fa-github-square" />
                            </a>
                        </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 gap-8">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
                                <div className="mt-4 space-y-4">
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Marketing</a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Analitycs</a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Commerce</a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Insights</a>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
                                <div className="mt-4 space-y-4">
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Pricing</a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Documentation</a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Guides</a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">API Status</a>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
                                <div className="mt-4 space-y-4">
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Marketing</a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Analitycs</a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Commerce</a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Insights</a>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
                                <div className="mt-4 space-y-4">
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Pricing</a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Documentation</a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">Guides</a>
                                    <a href="#" className="text-base text-gray-500 hover:text-gray-900 block">API Status</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* ./footer */}
            {/* copyright */}
            <div className="bg-gray-800 py-4">
                <div className="container flex items-center justify-between">
                    <p className="text-white">© TailCommerce - All Right Reserved</p>
                    <div>
                        <img src="../assets/images/methods.png" alt="methods" className="h-5" />
                    </div>
                </div>
            </div>
            {/* ./copyright */}
        </div>

    )
}