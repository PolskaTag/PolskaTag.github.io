/** Blog.js will be a component hosted in a separate route. The blog is somewhere
 * where I can post updates of my life, both personal and career oriented. It's
 * mostly for fun - and will be a good way to express myself!
 *
 * Blog.js will be cut into 2 content sections - one containing blog posts
 * and the other containing pictures that I upload.
 *
 * BlogPosts will be listed in Blog.js, and have a preview of the content of the
 * full blog post. User's can click on the preview to show the full blog post.
 *
 * PicturePosts will be listed on the right side of Blog.js. The pictures will
 * have a preview and a title of the picture. The user can click on the picture
 * to have an expanded version of the picture appear. It would be nice to also
 * have a description of the picture (optional).
 *
 * Thought: as the amount of blogs grow, the page height will grow. As of now there
 * is no pagination - and im not sure if I even want to include that. I was thinking
 * though: what if I make a "table of contents" side bar that lets you travel to
 * a specified blog post quickly instead of scrolling through everything?
 */
import "./Blog.css";
import { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import getBlogData from "../resources/blogData";
import getPicturePostData from "../resources/picturePostData";
import PicturePost from "./PicturePost";

const blogPostData = getBlogData();
const picturePostData = getPicturePostData();

export default function Blog() {
  const showBlogs = () => {
    let blog = document.querySelector(".blog-left");
    let pictures = document.querySelector(".blog-right");

    blog.classList.remove("section-hide");
    pictures.classList.add("section-hide");
  };

  const showPictures = () => {
    let blog = document.querySelector(".blog-left");
    let pictures = document.querySelector(".blog-right");

    pictures.classList.remove("section-hide");
    // we add these styles because if the window gets resized, the right side
    // of the blog's display gets set to none.
    pictures.style.display = "flex";
    pictures.style.flexDirection = "column";
    blog.classList.add("section-hide");
  };

  return (
    <div className="blog">
      <div className="toggle-buttons">
        <div className="blog-button" onClick={showBlogs}>
          Blog Posts
        </div>
        <div className="blog-button" onClick={showPictures}>
          Pictures
        </div>
      </div>
      <div className="blog-left">
        {blogPostData.map((post, index) => {
          return <BlogPost post={post} key={index} />;
        })}
      </div>
      <div className="blog-right">
        <h1 className="blog-right-title">Some Cool Pics!</h1>
        {picturePostData.map((post, index) => {
          return <PicturePost post={post} key={index} />;
        })}
      </div>
    </div>
  );
}
