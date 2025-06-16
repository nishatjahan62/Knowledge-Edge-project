import React from 'react';

const ArticleCard = ({article}) => {
    const {title,excerpt,publication_date,author_name}=article
    return (
        <div className='mx-auto w-full max-w-md'>
            <div className="card bg-[#FDFBD4] h-60 overflow-hidden rounded-2xl">
  <div className="card-body ">
    <h2 className="card-title  truncate  font-bold ">{title}</h2>
    <p className='text-xl pt-2  font-bold'>{author_name}</p>
    <p className='text-sm mt-2'>{excerpt}</p>
    <div className="card-actions justify-end">
      <button className="btn bg-blue-600 rounded-2xl text-white">{publication_date}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ArticleCard;