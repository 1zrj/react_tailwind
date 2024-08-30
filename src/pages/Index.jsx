import React from 'react'
import Header from '../widgets/Header'
import Hero from '../widgets/Hero'
import Solution from '../widgets/Solution'
import HowItWorks from '../widgets/HowItWorks'
import Clients from '../widgets/Clients'
import Contact from '../widgets/Contact'
import Footer from '../widgets/Footer'

function Index() {
    return (
        <div className='container mx-auto p-4'>
            <Header/>
            <main className='mt-20'>
                <Hero/>
            </main>
            <section className='md:p-20'>
                <Solution/>
            </section>
            <section className='mt-20'>
                <HowItWorks/>
            </section>
            <section className='mt-20 md:w-3/5 mx-auto'>
                <Clients/>
            </section>
            <section className='mt-20 md:w-4/5 mx-auto'>
                <Contact/>
            </section>
            <section className='mt-20'>
                <Footer/>
            </section>
        </div>
    )
}

export default Index
