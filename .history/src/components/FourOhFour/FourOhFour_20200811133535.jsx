import React from 'react'
import Nav from "./../Nav/Nav"
export const FourOhFour = () => {
    let FourOhFourTl = gsap.timeline({paused:true})

    useEffect(() => {
       FourOhFour.from('p', .4,{x:100, opacity:0})
    }, [])
    return (
        <div className="not-found">
                        <Nav animation={e => changePage(e , "/debriefs/")} animation0={e => changePage(e , "/debriefs/services")} animation1={e => changePage(e , "/webinaire/")} animation2={e => changePage(e , "/techspace/")} animation3={e => changePage(e , "/blog")}  />

            <p>404</p> 
            <p className="sorry"> sorry page not found</p>
        </div>
    )
}
export default FourOhFour;