import React from 'react';
import './Home.css';
import poster from '../../utils/image/poster.webp';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Home() {
    return (
        <div className="Home">
            <div className="poster">                
                <div className="poster__left">
                    
                </div>
                <div className="poster_right">
                    <img src={poster} alt="poster" />
                </div>
            </div>
        </div>
    )
}

export default Home
