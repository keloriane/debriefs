import React from 'react';
import "./categories.scss";
const categories = [
    {
        id:1,
        subtitle: "Team",
        image:`${require("./../../../../assets/images/team.png")}`
    },
    {
        id:2,
        subtitle: "Webinaire",
        image:`${require("./../../../../assets/images/webinares.png")}`
    },
    {
        id:3,
        subtitle: "Articles",
        image:`${require("./../../../../assets/images/articles.png")}`
    }
]
const Categories = () => {

    return (
        <section id="category">
            <div className="container-fluid">
              <div className="row">
                  <div className="cat">

                  </div>
              </div>
            </div>
        </section>
    )
}

export default Categories