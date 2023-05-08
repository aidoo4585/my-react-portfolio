import './index.scss'
import NameLogo from "../../assets/images/Screenshot 2023-04-26 at 1.22.00 PM.png"; 
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['e', 'n', 'n', 'e', 't', 'h']
    const jobArray = ['S','o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'n', 'e', 'r', '.']
    
   useEffect(() => { 
        setTimeout(()=>{ 
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return( 
        <>
        <div className ='container home-page'> 
            <h1>
            <span className='letterClass' /*default class for animating our letters*/ >
            H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <span>  </span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>m</span>
            <img src={NameLogo} alt='developer' />
            <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                index={15}
            />
            <br />
            <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray}
                index={21}
            />
            </h1>
            <h2>Fullstack Developer / JavaScript Expert / Foodie </h2>
            <Link to='/contact' className='flat-button'> CONTACT ME  </Link>
        </div>
        <Loader type='pacman' />
        </>


    )
} 

export default Home;