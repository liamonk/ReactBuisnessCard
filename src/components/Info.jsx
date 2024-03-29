import React from "react";
import Me from "/me.jpg"

export default function Info (){
    return(
        <div className='info'>
            <img className='info--img' src={Me} />
            <h1 className='info--name'>Liam Keegan</h1>
            <h3 className='info--bio'>Some Guy</h3>
            <h4 className='info--address'>liamonk</h4>
            <div className = 'info--buttons'>
                <form action="mailto:liamokeegan@gmail.com">
                    <button className='info--emailButton'>
                        <i class="material-icons">email</i>Email
                    </button>
                </form>
                <form action = "https://github.com/liamonk">
                    <button className='info--githubButton'>
                        <i class="fa fa-github"></i>GitHub
                    </button>
                </form>
            </div>
        </div>
    )
}