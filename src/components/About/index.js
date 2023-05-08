import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => { 
    const [letterClass, setLetterClass] = useState('text-animate')
    const [isLoading, setIsLoading] = useState(true)

        
    useEffect(() => { 
        setTimeout(()=>{ 
            setIsLoading(false)
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return( 
        <>
        <div className='container about-page'>
            <div className='text-zone'> 
                <h1> 
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    index={15}
                /> 
                </h1>
                <p>
                I am a software engineer with a passion for creating innovative solutions to complex problems. I have always been fascinated by computers and technology, and I pursued a degree in Software Engineering from Western University to learn how to turn that passion into a career.
                </p>
                <p> 
                Over the years, I have developed a wide range of programming skills, including proficiency in Java, Python, C++, C#, and JavaScript. I have worked on a variety of projects, from web applications to video games, and I am always eager to learn and explore new technologies.
                </p>
                <p>
                What sets me apart from other software engineers is my versatility and my ability to communicate effectively. I am a generalist who can be put in any situation and rely on my learning and intuition to understand how I can contribute. I am also inquisitive and a hard worker, and once I understand the fundamentals of a problem, I can learn anything.
                </p>
                <p> 
                Outside of work, I enjoy staying active by working out and playing basketball. I also enjoy reading, learning about the stock market, and exploring business ideas. My professional goal is to become an entrepreneur and create businesses that make a positive impact on people's lives. At the same time, I want to continue working as a software engineer and become one of the top experts in my field. Ultimately, I want to work on projects that help others and improve their lives through the power of technology.
                </p>
                <p>
                Thank you for taking the time to read my "About Me" section! If you have any questions or would like to get in touch, my contact information is available on my website.
                </p>
            </div>
            <div className='stage-cube-cont'> 
                <div className='cubespinner'/*Hold the 6 sides of cube with diff icons */ > 
                    <div className='face1'> 
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/> 
                    </div>
                    <div className='face2'> 
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/> 
                    </div>
                    <div className='face3'> 
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/> 
                    </div>
                    <div className='face4'> 
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/> 
                    </div>
                    <div className='face5'> 
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/> 
                    </div>
                    <div className='face6'> 
                        <FontAwesomeIcon icon={faPython} color='#FFEFDB'/> 
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About