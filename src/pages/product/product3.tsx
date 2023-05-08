import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import ProductCard from "@/components/productCard";
import Head from "next/head";
import Review from "@/components/review";
import Comment from "@/components/comment";
export default function Product() {
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
            {/* breadcrumb */}
            <div className="container flex items-center gap-3 py-4">
                <a href="../index.html" className="text-base text-primary">
                    <i className="fa-solid fa-house" />
                </a>
                <span className="text-sm text-gray-400">
                    <i className="fa-solid fa-chevron-right" />
                </span>
                <p className="font-medium text-gray-600">Product</p>
            </div>
            {/* ./breadcrumb */}
            {/* product-detail */}
            <div className="container grid grid-cols-2 gap-6">
                <div>
                    <img src="../assets/images/products/product1.jpg" alt="product" className="w-full" />
                    <div className="grid grid-cols-5 gap-4 mt-4">
                        <img src="../assets/images/products/product2.jpg" alt="product2" className="w-full border cursor-pointer border-primary" />
                        <img src="../assets/images/products/product3.jpg" alt="product2" className="w-full border cursor-pointer" />
                        <img src="../assets/images/products/product4.jpg" alt="product2" className="w-full border cursor-pointer" />
                        <img src="../assets/images/products/product5.jpg" alt="product2" className="w-full border cursor-pointer" />
                        <img src="../assets/images/products/product6.jpg" alt="product2" className="w-full border cursor-pointer" />
                    </div>
                </div>
                <div>
                    <h2 className="mb-2 text-3xl font-medium uppercase">Italian L Shape Sofa</h2>
                    <div className="flex items-center mb-4">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fa-solid fa-star" /></span>
                            <span><i className="fa-solid fa-star" /></span>
                            <span><i className="fa-solid fa-star" /></span>
                            <span><i className="fa-solid fa-star" /></span>
                            <span><i className="fa-solid fa-star" /></span>
                        </div>
                        <div className="ml-3 text-xs text-gray-500">(150 Reviews)</div>
                    </div>
                    <div className="space-y-2">
                        <p className="space-x-2 font-semibold text-gray-800">
                            <span>Availability: </span>
                            <span className="text-green-600">In Stock</span>
                        </p>
                        <p className="space-x-2">
                            <span className="font-semibold text-gray-800">Brand: </span>
                            <span className="text-gray-600">Apex</span>
                        </p>
                        <p className="space-x-2">
                            <span className="font-semibold text-gray-800">Category: </span>
                            <span className="text-gray-600">Sofa</span>
                        </p>
                        <p className="space-x-2">
                            <span className="font-semibold text-gray-800">SKU: </span>
                            <span className="text-gray-600">BE45VGRT</span>
                        </p>
                    </div>
                    <div className="flex items-baseline mt-4 mb-1 space-x-2 font-roboto">
                        <p className="text-xl font-semibold text-primary">$45.00</p>
                        <p className="text-base text-gray-400 line-through">$55.00</p>
                    </div>
                    <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius eum
                        reprehenderit dolore vel mollitia optio consequatur hic asperiores inventore suscipit, velit
                        consequuntur, voluptate doloremque iure necessitatibus adipisci magnam porro.</p>
                    <div className="pt-4">
                        <h3 className="mb-1 text-sm text-gray-800 uppercase">Size</h3>
                        <div className="flex items-center gap-2">
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-xs" className="hidden" />
                                <label htmlFor="size-xs" className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer">XS</label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-sm" className="hidden" />
                                <label htmlFor="size-sm" className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer">S</label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-m" className="hidden" />
                                <label htmlFor="size-m" className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer">M</label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-l" className="hidden" />
                                <label htmlFor="size-l" className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer">L</label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-xl" className="hidden" />
                                <label htmlFor="size-xl" className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 border border-gray-200 rounded-sm shadow-sm cursor-pointer">XL</label>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <h3 className="mb-3 text-xl font-medium text-gray-800 uppercase">Color</h3>
                        <div className="flex items-center gap-2">
                            <div className="color-selector">
                                <input type="radio" name="color" id="red" className="hidden" />
                                <label htmlFor="red" className="block w-6 h-6 border border-gray-200 rounded-sm shadow-sm cursor-pointer" style={{ backgroundColor: '#fc3d57' }} />
                            </div>
                            <div className="color-selector">
                                <input type="radio" name="color" id="black" className="hidden" />
                                <label htmlFor="black" className="block w-6 h-6 border border-gray-200 rounded-sm shadow-sm cursor-pointer" style={{ backgroundColor: '#000' }} />
                            </div>
                            <div className="color-selector">
                                <input type="radio" name="color" id="white" className="hidden" />
                                <label htmlFor="white" className="block w-6 h-6 border border-gray-200 rounded-sm shadow-sm cursor-pointer" style={{ backgroundColor: '#fff' }} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="mb-1 text-sm text-gray-800 uppercase">Quantity</h3>
                        <div className="flex text-gray-600 border border-gray-300 divide-x divide-gray-300 w-max">
                            <div className="flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none">-</div>
                            <div className="flex items-center justify-center w-8 h-8 text-base">4</div>
                            <div className="flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none">+</div>
                        </div>
                    </div>
                    <div className="flex gap-3 pt-5 pb-5 mt-6 border-b border-gray-200">
                        <a href="#" className="flex items-center gap-2 px-8 py-2 font-medium text-white uppercase transition border rounded bg-primary border-primary hover:bg-transparent hover:text-primary">
                            <i className="fa-solid fa-bag-shopping" /> Add to cart
                        </a>
                        <a href="#" className="flex items-center gap-2 px-8 py-2 font-medium text-gray-600 uppercase transition border border-gray-300 rounded hover:text-primary">
                            <i className="fa-solid fa-heart" /> Wishlist
                        </a>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <a href="#" className="flex items-center justify-center w-8 h-8 text-gray-400 border border-gray-300 rounded-full hover:text-gray-500">
                            <i className="fa-brands fa-facebook-f" />
                        </a>
                        <a href="#" className="flex items-center justify-center w-8 h-8 text-gray-400 border border-gray-300 rounded-full hover:text-gray-500">
                            <i className="fa-brands fa-twitter" />
                        </a>
                        <a href="#" className="flex items-center justify-center w-8 h-8 text-gray-400 border border-gray-300 rounded-full hover:text-gray-500">
                            <i className="fa-brands fa-instagram" />
                        </a>
                    </div>
                </div>
            </div>
            {/* ./product-detail */}
            {/* description */}
            <div className="container pb-16">
                <h3 className="pb-3 font-medium text-gray-800 border-b border-gray-200 font-roboto">Product details</h3>
                <div className="w-3/5 pt-6">
                    <div className="text-gray-600">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus deleniti natus
                            dolore cum maiores suscipit optio itaque voluptatibus veritatis tempora iste facilis non aut
                            sapiente dolor quisquam, ex ab.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quae accusantium voluptatem
                            blanditiis sapiente voluptatum. Autem ab, dolorum assumenda earum veniam eius illo fugiat possimus
                            illum dolor totam, ducimus excepturi.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia modi ut expedita! Iure molestiae
                            labore cumque nobis quasi fuga, quibusdam rem? Temporibus consectetur corrupti rerum veritatis
                            numquam labore amet.</p>
                    </div>
                    <table className="w-full mt-6 text-sm text-left text-gray-600 border-collapse table-auto">
                        <tbody><tr>
                            <th className="w-40 px-4 py-2 font-medium border border-gray-300">Color</th>
                            <th className="px-4 py-2 border border-gray-300 ">Blank, Brown, Red</th>
                        </tr>
                            <tr>
                                <th className="w-40 px-4 py-2 font-medium border border-gray-300">Material</th>
                                <th className="px-4 py-2 border border-gray-300 ">Latex</th>
                            </tr>
                            <tr>
                                <th className="w-40 px-4 py-2 font-medium border border-gray-300">Weight</th>
                                <th className="px-4 py-2 border border-gray-300 ">55kg</th>
                            </tr>
                        </tbody></table>
                </div>
            </div>
            {/* ./description */}
            <Review />
            <Comment />

            {/* related product */}
            <div className="container pb-16">
                <h2 className="mb-6 text-2xl font-medium text-gray-800 uppercase">Related products</h2>
                <ProductCard />
            </div>
            {/* ./related product */}
            <Footer />
        </div>

    )
}