import React from 'react';

const Article = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      {/* You can include additional information like author, date, etc. based on your data */}
    </div>
  );
};

export default Article;
