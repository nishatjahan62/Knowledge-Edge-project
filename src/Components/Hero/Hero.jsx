import React from 'react';
import Banner from './Banner';
import FeaturedArticles from './Featured/FeaturedArticles';
import CategoryLink from './CategoryLink';

const Hero = () => {
    return (
        <div className='mx-5 lg:mx-10'>
            <Banner></Banner>
            <FeaturedArticles></FeaturedArticles>
            <CategoryLink></CategoryLink>
        </div>
    );
};

export default Hero;