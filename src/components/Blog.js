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
 */
import "./Blog.css";
import { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import getBlogData from "../resources/blogData";

const blogPostData = getBlogData();

export default function Blog() {
  return (
    <div className="blog">
      <div className="blog-left">
        {blogPostData.map((post, index) => {
          return <BlogPost post={post} key={index} />;
        })}
      </div>
      <div className="blog-right">
        <div className="sample-item">hello</div>
      </div>
    </div>
  );
}
