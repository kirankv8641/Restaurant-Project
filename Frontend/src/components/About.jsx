 import React from 'react'
 import { Link } from 'react-router-dom'
 import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

 const About = () => {
   return (
    <section className="about" id='about'>
     <div className='container'>
        <div className="banner">
            <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p>The only thing we care about is providing you with the best food experience.</p>
            </div>
            <p className="mid">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem ipsa voluptatum eos beatae adipisci aut possimus id eligendi est dicta quod, impedit, rem nobis earum sequi magnam tempore vero velit.
            </p>
            <Link to={"/"}>Explore Menu <span>
                <HiOutlineArrowNarrowRight />
                </span></Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
     </div>
    </section>
   )
 }
 
 export default About