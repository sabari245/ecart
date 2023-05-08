import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Head from "next/head";

export default function Cart() {
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
            {/* ./navbar */}
            {/* breadcrumb */}
            <div className="container flex items-center gap-3 py-4">
                <a href="../index.html" className="text-base text-primary">
                    <i className="fa-solid fa-house" />
                </a>
                <span className="text-sm text-gray-400">
                    <i className="fa-solid fa-chevron-right" />
                </span>
                <p className="font-medium text-gray-600">Profile</p>
            </div>
            {/* ./breadcrumb */}
            {/* wrapper */}
            <div className="container grid items-start grid-cols-12 gap-6 pt-4 pb-16">
                {/* sidebar */}
                <div className="col-span-3">
                    <div className="flex items-center gap-4 px-4 py-3 shadow">
                        <div className="flex-shrink-0">
                            <img src="../assets/images/avatar.png" alt="profile" className="object-cover p-1 border border-gray-200 rounded-full w-14 h-14" />
                        </div>
                        <div className="flex-grow">
                            <p className="text-gray-600">Hello,</p>
                            <h4 className="font-medium text-gray-800">John Doe</h4>
                        </div>
                    </div>
                    <div className="p-4 mt-6 space-y-4 text-gray-600 bg-white divide-y divide-gray-200 rounded shadow">
                        <div className="pl-8 space-y-1">
                            <a href="#" className="block font-medium capitalize transition">
                                <span className="absolute top-0 text-base -left-8">
                                    <i className="fa-regular fa-address-card" />
                                </span>
                                Manage account
                            </a>
                            <a href="#" className="relative block capitalize transition hover:text-primary">
                                Profile information
                            </a>
                            <a href="#" className="relative block capitalize transition hover:text-primary">
                                Manage addresses
                            </a>
                            <a href="#" className="relative block capitalize transition hover:text-primary">
                                Change password
                            </a>
                        </div>
                        <div className="pt-4 pl-8 space-y-1">
                            <a href="#" className="relative block font-medium capitalize transition hover:text-primary">
                                <span className="absolute top-0 text-base -left-8">
                                    <i className="fa-solid fa-box-archive" />
                                </span>
                                My order history
                            </a>
                            <a href="#" className="relative block capitalize transition hover:text-primary">
                                My returns
                            </a>
                            <a href="#" className="relative block capitalize transition hover:text-primary">
                                My Cancellations
                            </a>
                            <a href="#" className="relative block capitalize transition hover:text-primary">
                                My reviews
                            </a>
                        </div>
                        <div className="pt-4 pl-8 space-y-1">
                            <a href="#" className="relative block font-medium capitalize transition hover:text-primary">
                                <span className="absolute top-0 text-base -left-8">
                                    <i className="fa-regular fa-credit-card" />
                                </span>
                                Payment methods
                            </a>
                            <a href="#" className="relative block capitalize transition hover:text-primary">
                                voucher
                            </a>
                        </div>
                        <div className="pt-4 pl-8 space-y-1">
                            <a href="#" className="relative block font-medium capitalize transition text-primary">
                                <span className="absolute top-0 text-base -left-8">
                                    <i className="fa-regular fa-heart" />
                                </span>
                                My wishlist
                            </a>
                        </div>
                        <div className="pt-4 pl-8 space-y-1">
                            <a href="#" className="relative block font-medium capitalize transition hover:text-primary">
                                <span className="absolute top-0 text-base -left-8">
                                    <i className="fa-solid fa-right-from-bracket" />
                                </span>
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
                {/* ./sidebar */}
                {/* wishlist */}
                <div className="col-span-9 space-y-4">
                    <div className="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
                        <div className="w-28">
                            <img src="../assets/images/products/product6.jpg" alt="product 6" className="w-full" />
                        </div>
                        <div className="w-1/3">
                            <h2 className="text-xl font-medium text-gray-800 uppercase">Italian L shape</h2>
                            <p className="text-sm text-gray-500">Availability: <span className="text-green-600">In Stock</span></p>
                        </div>
                        <div className="text-lg font-semibold text-primary">$320.00</div>
                        <div className="text-gray-600 cursor-pointer hover:text-primary">
                            <i className="fa-solid fa-trash" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
                        <div className="w-28">
                            <img src="../assets/images/products/product5.jpg" alt="product 6" className="w-full" />
                        </div>
                        <div className="w-1/3">
                            <h2 className="text-xl font-medium text-gray-800 uppercase">Dining Table</h2>
                            <p className="text-sm text-gray-500">Availability: <span className="text-green-600">In Stock</span></p>
                        </div>
                        <div className="text-lg font-semibold text-primary">$320.00</div>
                        <div className="text-gray-600 cursor-pointer hover:text-primary">
                            <i className="fa-solid fa-trash" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
                        <div className="w-28">
                            <img src="../assets/images/products/product10.jpg" alt="product 6" className="w-full" />
                        </div>
                        <div className="w-1/3">
                            <h2 className="text-xl font-medium text-gray-800 uppercase">Sofa</h2>
                            <p className="text-sm text-gray-500">Availability: <span className="text-red-600">Out of Stock</span></p>
                        </div>
                        <div className="text-lg font-semibold text-primary">$320.00</div>
                        <div className="text-gray-600 cursor-pointer hover:text-primary">
                            <i className="fa-solid fa-trash" />
                        </div>
                    </div>
                    <a href="/checkout" className="relative px-6 py-2 text-sm font-medium text-center text-white uppercase transition border rounded bg-primary border-primary hover:bg-transparent hover:text-primary font-roboto">
                        Proceed to checkout
                    </a>
                </div>
                {/* ./wishlist */}
            </div>
            {/* ./wrapper */}
            <Footer />
        </div>

    )
}