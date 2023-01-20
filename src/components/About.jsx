import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>

                <p className='text-xl mt-20 py-4'>
                    Hi, my name is Aditya Basak and I am a developer. I have been a developer for the past 2 years, websites and applications for clients worldwide. I specialize in building beautiful, responsive websites using HTML, CSS, and JavaScript.

                </p>

                <p className='text-xl'>
                    I am experienced in using a variety of frameworks such as Bootstrap, React, Tailwind, Next JS & Firebase. love the creativity and problem-solving that goes into building a website, and I am always looking for new challenges to tackle.
                </p>

            </div>


        </div>
    )
}

export default About
