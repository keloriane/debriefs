import React,{useEffect,useState} from 'react';
import "./Blog.scss";
import { Articles } from './Articles';
import { Title } from '../../Title/Title';
import { HomeB } from '../../BreadCrumbs/HomeB';
import axios from "axios"

const Blog = () => {

    const [articles , setArticles] = useState([])
    useEffect(() => {
            axios.get('https://d-briefs.com/wp-json/wp/v2/posts')
                .then((res)=> {
                    setArticles(res.data)
                    console.log(res.data);
                })
                .catch((err)=>{
                    console.warn(err)
                })
                
            }, [])
            console.log(articles);
    return (
        <div id="blog">

            <HomeB />
            <div className="inner-blog">
            <Title title="Blog"/>
            <div className="blog-wrapper">
                {
                    articles.map((article)=>(
                        // <div dangerouslySetInnerHTML={{__html: article.excerpt.rendered}}>
                        //     <Articles
                        //     key={article.id}
                        //     articleImage={article.jetpack_featured_media_url}
                        //     articleTitle={article.title.rendered} 
                        //     articleText={article.excerpt.rendered}
                           
                        //     />

                        // </div>
                        <article className="blog-article">
                        <div className="image-article-container">
                          <img src={article.jetpack_featured_media_ur} alt="" />
                        </div>
                        <article className="article-headline">
                    <h3 className="article-title">{article.title.rendered}</h3>
                          <h3 className="article-time">il y a 2j</h3>
                        </article>
                        <article className="article-content" dangerouslySetInnerHTML={{__html: article.excerpt.rendered}}>
                        
                          
                        </article>
                      </article>

                    ))
                }
             
            </div>

            </div>
        </div>
    )
}
export default Blog;