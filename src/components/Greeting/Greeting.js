import { useEffect } from 'react';
import './Greeting.scss'

const Greeting = () => {

    return (
        <>
            <div class="container">
                <div class="box">

                    <div class="title">
                        <div class="first_block"></div>
                        <h1><span></span>Luis Cerqueira</h1>
                    </div>

                    <div class="role">
                        <div class="block"></div>
                        <p>Full-Stack Developer</p>
                    </div>

                </div>
            </div>

            <div class="texto">
                <div class="logo_container">
                    <div class = 'logo'></div>
                </div>
            </div>
        </>
    )
}

export default Greeting