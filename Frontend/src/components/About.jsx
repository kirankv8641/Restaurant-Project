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
                We are a family-owned restaurant that has been serving delicious food for over 20 years. Our menu features a wide variety of dishes, including vegetarian and vegan options. We use only the freshest ingredients and our chefs are passionate about creating delicious meals that will satisfy your taste buds.
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