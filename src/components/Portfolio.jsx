import React from 'react'
import HealthZoid from '../assets/portfolio/healthzoid.jpg'
import PgLife from '../assets/portfolio/pgLife.jpg'
import boxOffice from '../assets/portfolio/box.jpg'
import Hportfolio from '../assets/portfolio/port.jpg'
import Rportfolio from '../assets/portfolio/rp.jpg'
import tictactoe from '../assets/portfolio/TicTacToe.jpg'



const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: HealthZoid,
            href: 'https://github.com/aditya9-2/Healthzoid',
            title: 'Healthzoid'


        },

        {
            id: 2,
            src: PgLife,
            href: 'https://github.com/aditya9-2/pgLife',
            title: 'pgLife'


        },

        {
            id: 3,
            src: boxOffice,
            href: 'https://github.com/aditya9-2/box-office',
            title: 'boxOffice'


        },

        {
            id: 4,
            src: Hportfolio,
            href: 'https://github.com/aditya9-2/my-portfolio',
            title: 'HTMLPortfolio'


        },

        {
            id: 5,
            src: Rportfolio,
            href: 'https://github.com/aditya9-2/react-portfolio',
            title: 'RactProtfolio'


        },

        {
            id: 6,
            src: tictactoe,
            href: 'https://github.com/aditya9-2/tictactoe',
            title: 'TicTacToe'


        },
    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6 text-xl'>
                        Checkout some of my work over here

                    </p>

                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {
                        portfolios.map(({ id, src, href, title }) => (

                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>

                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />

                                <div className='flex items-center justify-center'>
                                    <a href={href}
                                        target="_blank"
                                        rel="noreferrer">

                                        <button className='w-1/2 px-6 py-3 m-4'>{title}</button>

                                    </a>

                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Portfolio
