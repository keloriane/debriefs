import React from 'react'


const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="wrapper">
                <div className="hamburger-menu">
                    <button>
                        menu
                    </button>
                </div>
                <div className="logo-container">
                    <div className="inner-logo">

                    </div>
                </div>
                <div className="social">
                    <div className="social-items">
                        <a href="/"><i className="fa"></i></a>
                        <a href="/"><i className="fa"></i></a>
                        <a href="/"><i className="fa"></i></a>
                    </div>
                </div>
                   
                </div>
            </div>
            
        </header>
    )
}


export default Header;
