import Footer from '@/components/footer'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import { supabase } from '@/components/utils'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import type { Database } from "@/lib/supabase"
import ProductCard from '@/components/productCard'

export default function Home() {

  // const [result, setResult] = useState<any>(null)

  useEffect(() => {
    async function getData() {

      let { data, error } = await supabase
        .from('product')
        .select('*')

      console.log(data)
    }
    getData()
  }, [])

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session)
    })
  }, [])

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
      <div>
        <Header />
        <Navbar />
        <div className="bg-center bg-no-repeat bg-cover py-36" style={{ backgroundImage: 'url("assets/images/banner-bg.jpg")' }}>
          <div className="container">
            <h1 className="mb-4 text-6xl font-medium text-gray-800 capitalize">
              best collection for <br /> home decoration
            </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br />
              accusantium perspiciatis, sapiente
              magni eos dolorum ex quos dolores odio</p>
            <div className="mt-12">
              <a href="#" className="px-8 py-3 font-medium text-white border rounded-md bg-primary border-primary hover:bg-transparent hover:text-primary">Shop Now</a>
            </div>
          </div>
        </div>
        {/* ./banner */}
        {/* features */}
        {/* <div className="container py-16">
          <div className="grid justify-center w-10/12 grid-cols-1 gap-6 mx-auto md:grid-cols-3">
            <div className="flex items-center justify-center gap-5 px-3 py-6 border rounded-sm border-primary">
              <img src="assets/images/icons/delivery-van.svg" alt="Delivery" className="object-contain w-12 h-12" />
              <div>
                <h4 className="text-lg font-medium capitalize">Free Shipping</h4>
                <p className="text-sm text-gray-500">Order over $200</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 px-3 py-6 border rounded-sm border-primary">
              <img src="assets/images/icons/money-back.svg" alt="Delivery" className="object-contain w-12 h-12" />
              <div>
                <h4 className="text-lg font-medium capitalize">Money Rturns</h4>
                <p className="text-sm text-gray-500">30 days money returs</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 px-3 py-6 border rounded-sm border-primary">
              <img src="assets/images/icons/service-hours.svg" alt="Delivery" className="object-contain w-12 h-12" />
              <div>
                <h4 className="text-lg font-medium capitalize">24/7 Support</h4>
                <p className="text-sm text-gray-500">Customer support</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* ./features */}
        {/* categories */}
        {/* <div className="container py-16">
          <h2 className="mb-6 text-2xl font-medium text-gray-800 uppercase">shop by category</h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="relative overflow-hidden rounded-sm group">
              <img src="assets/images/category/category-1.jpg" alt="category 1" className="w-full" />
              <a href="#" className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60">Bedroom</a>
            </div>
            <div className="relative overflow-hidden rounded-sm group">
              <img src="assets/images/category/category-2.jpg" alt="category 1" className="w-full" />
              <a href="#" className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60">Mattrass</a>
            </div>
            <div className="relative overflow-hidden rounded-sm group">
              <img src="assets/images/category/category-3.jpg" alt="category 1" className="w-full" />
              <a href="#" className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60">Outdoor
              </a>
            </div>
            <div className="relative overflow-hidden rounded-sm group">
              <img src="assets/images/category/category-4.jpg" alt="category 1" className="w-full" />
              <a href="#" className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60">Sofa</a>
            </div>
            <div className="relative overflow-hidden rounded-sm group">
              <img src="assets/images/category/category-5.jpg" alt="category 1" className="w-full" />
              <a href="#" className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60">Living
                Room</a>
            </div>
            <div className="relative overflow-hidden rounded-sm group">
              <img src="assets/images/category/category-6.jpg" alt="category 1" className="w-full" />
              <a href="#" className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60">Kitchen</a>
            </div>
          </div>
        </div> */}
        {/* ./categories */}
        {/* new arrival */}
        <div className="container py-16">
          <h2 className="mb-6 text-2xl font-medium text-gray-800 uppercase">top new arrival</h2>
          <ProductCard />
        </div>
        {/* ./new arrival */}
        {/* ads */}
        {/* <div className="container pb-16">
          <a href="#">
            <img src="assets/images/offer.jpg" alt="ads" className="w-full" />
          </a>
        </div> */}
        {/* ./ads */}
        {/* product */}
        <div className="container pb-16">
          <h2 className="mb-6 text-2xl font-medium text-gray-800 uppercase">recomended for you</h2>
          <ProductCard />
        </div>
        {/* ./product */}
        {/* footer */}
        <Footer />
      </div>

    </main>
  )
}
