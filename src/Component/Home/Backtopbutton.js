import React, { useEffect, useState } from 'react'

const BacktoTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        };
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div className='back-to-top-container'>
            <button className={`back-to-top ${isVisible ? 'visible' : ''}`} onClick={scrolltoTop}>
                <span>^</span>
            </button>
        </div>
    )
}

export default BacktoTop
