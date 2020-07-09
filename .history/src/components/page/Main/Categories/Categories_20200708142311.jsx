import React from 'react';
import "./categories.scss";
import {Link} from 'react-router-dom';
const categories = [
    {
        id:1,
        title: "Team",
        image:`${require("./../../../../assets/images/team.png")}`
    },
    {
        id:2,
        title: "Webinaire",
        image:`${require("./../../../../assets/images/webinaires.png")}`
    },
    {
        id:3,
        title: "Articles",
        image:`${require("./../../../../assets/images/articles.png")}`
    }
]
const Categories = () => {

    return (
        <section id="category">
            <div className="container-fluid">
              <div className="row">
                  <div className="cat">
                    {categories.map(cat => 
                      (  <div className="cat-container" key={cat.id} style={`backgroundImage=url(${cat.image})`}>
                            <div className="cat-details">
                                <h2> <Link>{cat.title}</Link></h2>
                            </div>
                            <div className="cat-image">

                            </div>
                        </div>)
                        )}
                  </div>
              </div>
            </div>
        </section>
    )
}

export default Categories