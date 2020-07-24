import React from 'react';
import "./Blog.scss";
import articleImg from "./../../../assets/images/webinaires.png"
import { Articles } from './Articles';
const Blog = () => {
    return (
        <div id="blog">
            <div className="blog-wrapper">
               <Articles />
            </div>
        </div>
    )
}
export default Blog;