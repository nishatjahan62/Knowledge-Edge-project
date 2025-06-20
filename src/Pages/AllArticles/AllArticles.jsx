
import React, { useEffect, useState } from 'react';
import ArticleCard from '../../Components/Hero/ArticleCard';

const AllArticles = () => {
    const [articles,setArticles]=useState([])

     useEffect(()=>{
    fetch('http://localhost:5000/all-articles').then(res=>res.json())
    .then(data=>setArticles(data))
    .catch(error=>console.log(error))
  },[])
 
    return (
        <div className='pt-15 lg:mx-20 mx-5 '>
           <h2 className="text-4xl font-bold text-center pb-8 text-blue-700">Explore all Articles</h2>
           <div className='grid grid-cols-1 lg:grid-cols-3  sm:grid-cols-2 gap-6 w-full justify-center items-center pb-10'>
            {articles.map(article=><ArticleCard 
            key={article._id}
            article={article}></ArticleCard>)}
           </div>
        </div>
    );
};

export default AllArticles;