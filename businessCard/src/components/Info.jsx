import React from "react";
import Me from "/me.png"

export default function Info (){
    return(
        <div className='info'>
            <img className='info--img' src={Me} />
            <h1 className='info--name'>Liam Keegan</h1>
            <h3 className='info--bio'>Some Guy</h3>
            <h4 className='info--address'>liamonk</h4>
            <div className = 'info--buttons'>
                <button className='info--emailButton'>Email</button>
                <button className='info--linkedInButton'>LinkedIn</button>
            </div>
        </div>
    )
}