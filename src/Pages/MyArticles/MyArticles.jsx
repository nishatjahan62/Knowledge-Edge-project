import React, { Suspense } from 'react';
import AuthHook from '../../Hooks/AuthHook';
import { ArticlePostedPromise } from '../../services/PostedArticlesApi';
import ArticleList from './ArticleList';

const MyArticles = () => {
    const {user}=AuthHook()
    return (
        <div className='mt-15  mx-5 lg:mx-20 '>
           <Suspense>
           <ArticleList  ArticlePostedPromise={ArticlePostedPromise(user.email)}></ArticleList>
           </Suspense>
        </div>
    );
};

export default MyArticles;