import React from 'react';
import "./Blog.scss";
import { Articles } from './Articles';
import { Title } from '../../Title/Title';
import { HomeB } from '../../BreadCrumbs/HomeB';

const Blog = () => {
    return (
        <div id="blog">
            <HomeB />
            <div className="inner-blog">
            <Title title="Blog"/>
            <div className="blog-wrapper">
               <Articles />
               <Articles />
              
            </div>

            </div>
        </div>
    )
}
export default Blog;