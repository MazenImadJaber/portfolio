import React from 'react';
import homePic from '../assets/1648047955977.jpg'
export default function Home() {
    return (
        <div >
            <h1>Welcome to My Portfolio</h1>
            <p>Hello! I'm Your Name. I'm a web developer specialized in frontend and backend development for complex scalable web apps. I write about web development on my blog and regularly speak at various web conferences and meetups. Want to know how I may help your project? Check out my project portfolio and resume.</p>
            <img className='image' alt="Mazen"src={homePic}/>
        </div>
    );
};

