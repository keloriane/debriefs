import React,{useEffect} from 'react';
import "./Blog.scss";
import { Articles } from './Articles';
import { Title } from '../../Title/Title';
import { HomeB } from '../../BreadCrumbs/HomeB';
import axios from "axios"


const Blog = () => {
    useEffect(() => {
        
        
            axios.get('https://d-briefs.com/wp-json/wp/v2/posts')
                .then((res)=> {
                    console.log(res.data.title.rendered);
                })
                .catch((err)=>{
                    console.warn(err)
                })
          
    }, [])
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