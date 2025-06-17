import React from 'react';
import { useLoaderData } from 'react-router';

const ArticleDetails = () => {
    const {title,content,}=useLoaderData()
    return (
        <div>
       article :
       {content}
       {title}
      
        </div>
    );
};
// publication_date,category,tags,author_id,author_name,author_photo

export default ArticleDetails;