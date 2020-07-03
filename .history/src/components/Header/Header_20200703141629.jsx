import React,{useState} from 'react'


const Header = () => {
    const [state , setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menu"
    });

    const [disabled, setDisable] = useState(false)

    const handleMenu = () => {
        disableMenu();
        if(state.initial === false)
        {
            setState({
                initial: null,
                clicked:true,
                menuName:"Close"
            });
            console.log(1)
            
        }
        else if (state.clicked === true)
        {
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            });
            console.log(2)
        }
        else if (state.clicked === false)
        {
            setState({
                clicked: !state.clicked,
                menuName: "Close"
            });
            console.log(3)
        }
        
    }
    const disableMenu = () => {
        setDisable(!disabled);
        setTimeout(()=> {
            setDisable(false)
        },1200)
    }


    return (
        <header>
            <div className="header-container">
                <div className="wrapper">
                <div className="hamburger-menu">
                    <button disabled={disabled} className="menu" onClick={handleMenu}>
                        Menu
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
