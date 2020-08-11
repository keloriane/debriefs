import React from 'react';
import "./Blog.scss";
import { Articles } from './Articles';
import { Title } from '../../Title/Title';
import { HomeB } from '../../BreadCrumbs/HomeB';

const Blog = () => {
    return (
        <div id="blog">
                    <Nav animation={e => changePage(e , "/debriefs/")} animation0={e => changePage(e , "/debriefs/services")} animation1={e => changePage(e , "/webinaire/")} animation2={e => changePage(e , "/techspace/")} animation3={e => changePage(e , "/blog")}  />

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