import React,{useEffect,useState} from 'react';
import "./Blog.scss";
import { Articles } from './Articles';
import { Title } from '../../Title/Title';
import { HomeB } from '../../BreadCrumbs/HomeB';
import axios from "axios"

const Blog = () => {

    const [article , setArticle] = useState()
    useEffect(() => {
        
        
            axios.get('https://d-briefs.com/wp-json/wp/v2/posts')
                .then((res)=> {
                    console.log(res.data);
                    setArticle(res.data)
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