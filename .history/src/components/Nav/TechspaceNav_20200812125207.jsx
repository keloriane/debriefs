import React from 'react'

export const TechspaceNav = () => {
    return (
        <div>
            <div className="navigation">
            <nav>
                <Link onClick={props.animation}to="/techspace/histoire">Notre Histoire</Link>
                <Link onClick={props.animation1} to="/techspace/digital-career">digital career center</Link>
                <Link onClick={props.animation2}>l'Agence</Link>
            </nav>
            </div>
        </div>
    )
}
