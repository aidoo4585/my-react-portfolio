import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = ()=> { 
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()  //creating a reference for our email form

   useEffect(() => { 
        setTimeout(()=>{ 
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_pc1kwon', 'template_4gmo6di', refForm.current, 'QdcpQEYacf0CXJbJF')
          .then((result) => {
            alert('Your message was sent successfully, thank you!')
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return( 
        <>
        <div className='container contact-page'> 
            <div className='text-zone'> 
                <h1> 
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        index={15} //means a 1.5 second delay for our anim
                    />
                </h1>
                <p> 
                Thank you for visiting my website! If you are interested in discussing freelance 
                </p>
                <p>
                or work opportunities, or if you have an interesting project that you would like to 
                </p>
                <p>collaborate on, I would love to hear from you.</p>
                <div className='contact-form'> 
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'> 
                                <label>Name</label>
                                <input type="text" name="from_name" placeholder='Your full name...' required/>
                            </li>
                            <li className='half'> 
                                <label>Email</label>
                                <input type="email" name="from_email" placeholder='Your email...' required/>
                            </li>
                            <li> 
                                <label>Message</label>
                                <textarea name="message" />
                            </li>
                            <li>
                                <input className='flat-button' type="submit" value="SEND" required/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'> 
                Kenneth Aidoo, 
                <br /> 
                Canada, 
                <br /> 
                North York, M3M1A7 <br /> 
                Toronto  <br /> 
                <span>kenny.aidoo02@gmail.com</span>
            </div>
            <div className='map-wrap'> 
                <MapContainer center={[43.645499155150866, -79.38637762542392]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[43.645499155150866, -79.38637762542392]}> 
                        <Popup> This is the city Kenny grew up, come visit!</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Contact