import React from 'react';
import "./Blog.scss";
import { Articles } from './Articles';

const Blog = () => {
    return (
        <div id="blog">
            <div className="blog-wrapper">
               <Articles />
               <Articles />
               <Articles />
               <Articles />
               <Articles />
               <Articles />
               <Articles />
               <Articles />
               <Articles />
               <Articles />
               <Articles />
               <Articles />
            </div>
        </div>
    )
}
export default Blog;