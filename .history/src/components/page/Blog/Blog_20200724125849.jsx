import React from 'react';
import "./blog.scss";

const Blog = () => {
    return (
        <div id="blog">
            <div className="blog-wrapper">
                <article className="blog-article">
                    <img src="" alt=""/>
                    <article className="article-headline">
                        <h3 className="article-title">Cybersecurité</h3>
                        <h3 className="article-time">il y a 2j</h3>
                    </article>
                    <article className="article-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </article>
                </article>
            </div>
        </div>
    )
}
export default Blog;