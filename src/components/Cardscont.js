import React from 'react'
/* import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png'; */

export default function Cardscont() {
    return (
        <section className='cardContainer'>
            <div className='cards'>
                <img src='./images/icon1.png' alt='icon'/>
                <h1>Declarative</h1>
                <p>React makes it painless to create interactive uis.</p>
            </div>
            <div className='cards'>
                <img src='./images/icon2.png' alt='icon'/>
                <h1>Declarative</h1>
                <p>React makes it painless to create interactive uis.</p>
            </div>
            <div className='cards'>
                <img src='./images/icon3.png' alt='icon'/>
                <h1>Declarative</h1>
                <p>React makes it painless to create interactive uis.</p>
            </div>
            <div className='cards'>
                <img src='./images/icon4.png' alt='icon'/>
                <h1>Declarative</h1>
                <p>React makes it painless to create interactive uis.</p>
            </div>
        </section>
    )
}
