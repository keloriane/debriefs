import React from "react";

export const Articles = () => {
  return (
    <article className="blog-article">
      <div className="image-article-container">
        <img src={articleImg} alt="" />
      </div>
      <article className="article-headline">
        <h3 className="article-title">Cybersecurité</h3>
        <h3 className="article-time">il y a 2j</h3>
      </article>
      <article className="article-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </article>
    </article>
  );
};
