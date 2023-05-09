import './index.scss'
import NameLogo from "../../assets/images/better.png"; 
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import myLogo from '../../assets/images/my-name-logo.png'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['e', 'n', 'n', 'e', 't', 'h']
    const jobArray = ['S','o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']
    
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
            <div className='my-logo'> 
            <img src={myLogo} alt='logo'/>
            </div>
        </div>
        <Loader type='pacman' />
        </>


    )
} 

export default Home;