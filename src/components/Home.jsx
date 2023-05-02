import React from 'react'
import HeroImage from '../assets/heroImage.png'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'
const Home = () => {
    return (
        <div name='home' className='h-screen w-full bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-900'>


            <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

                <div className='flex flex-col justify-center h-full'>

                    <h2 className='text-4xl sm:text-7xl font-bold text-slate-300'>
                        I'm a Developer
                    </h2>
                    <p className='text-slate-400  py-4 max-w-md'>

                        Welcome to my portfolio! I am Aditya, a freelancer with a passion for exploring new technologies. My curiosity and enthusiasm drive me to always be learning and experimenting with the latest advancements in my field. You can see some of the work I've done in the past in the projects section of my portfolio, which will give you a sense of my skills and experience. Thank you for taking the time to visit, and I hope you find what you're looking for.

                    </p>

                    <div>
                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 cursor-pointer'>
                            Portfolio
                            <span className=' group-hover:rotate-90 duration-300'>
                                <MdKeyboardArrowRight size={25} className=' ml-1' />
                            </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img src={HeroImage} alt="my profile"
                        className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>
            </div>
        </div>
    )
}

export default Home
