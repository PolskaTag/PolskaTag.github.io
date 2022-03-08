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
import { useState } from "react";
import BlogPost from "./BlogPost";

const blog_posts = [
  {
    title: "Starting a blog!",
    date: "March 6th, 2022",
    type: "professional",
    content: (
      <>
        <p>
          A blog is an interesting component. They allow you to communicate the
          things that you're doing, whether that be coding or eating a delicous
          dessert. I got the idea to start a blog from my research in AWS
          Serverless technologies like Lambda. I saw this great YouTube video
          from a creator Emily Shea. Following the stream of info she put out, I
          landed on her personal webpage and thought:
        </p>
        <span>Teaching people is a great way to teach yourself</span>
        <p>
          So I'm going to create a blog component. As I learn new things, I'll
          create posts to share with people the things I've learned, and get
          some awesome review as an additional bonus.
        </p>
      </>
    ),
  },
  {
    title: "Helping Ukraine, UECC Ukrainian Center",
    date: "March 5th, 2022",
    type: "life",
    content: (
      <>
        <p>
          My best friend <b>Thomas Duliban</b> and I have been talking about the
          war between Ukraine and Russia. Conflict is never a pretty thing. I
          personally hate all types of conflict. I'm a lover, not a fighter, and
          hearing about the ambitions of men devolving society into a mess
          bothers me. Tom saw a flier about an organization, UECC, getting
          involved to help the Ukrainian people. He reached out to me asking if
          I'd like to come with him to pick up some things to donate, and I
          couldn't say no. Together, with the donations of 8 people, we bought
          supplies and donated them.
        </p>
      </>
    ),
  },
];

export default function Blog() {
  return (
    <div className="blog">
      <div className="blog-left">
        {blog_posts.map((post) => {
          console.log(post);
          return <BlogPost post={post} />;
        })}
      </div>
      <div className="blog-right">
        <div className="sample-item">hello</div>
      </div>
    </div>
  );
}
