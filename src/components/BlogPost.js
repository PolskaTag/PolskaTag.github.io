import { useState } from "react";
import "./BlogPost.css";
import person from "../resources/person.png";
import guitar from "../resources/guitar.png";
import code from "../resources/code.png";

// {
//     title: "Helping Ukraine, UECC Ukrainian Center",
//     date: "March 5th, 2022",
//     type: "life",
//     content: (
//       <>
//         <p>
//           My best friend <b>Thomas Duliban</b> and I have been talking about the
//           war between Ukraine and Russia. Conflict is never a pretty thing. I
//           personally hate all types of conflict. I'm a lover, not a fighter, and
//           hearing about the ambitions of men devolving society into a mess
//           bothers me. Tom saw a flier about an organization, UECC, getting
//           involved to help the Ukrainian people. He reached out to me asking if
//           I'd like to come with him to pick up some things to donate, and I
//           couldn't say no. Together, with the donations of 8 people, we bought
//           supplies and donated them.
//         </p>
//       </>
//     ),
//   }

export default function BlogPost(props) {
  const [showBlog, setShowBlog] = useState("blog-content preview-content");

  const onBlogPostClick = () => {
    if (showBlog.match("preview-content")) {
      setShowBlog("blog-content");
    } else {
      setShowBlog("blog-content preview-content");
    }
  };
  const typeToPic = (type) => {
    switch (type) {
      case "professional":
        return <img src={code} alt={type} />;
      case "life":
        return <img src={person} alt={type} />;
      case "fun":
        return <img src={guitar} alt={type} />;
      default:
        return type;
    }
  };
  return (
    <div className="blog-post">
      <div className="blog-header" onClick={onBlogPostClick}>
        <div className="blog-title">
          <h2>{props.post.title}</h2>
          <h3>{props.post.date}</h3>
        </div>
        <div className="blog-type">{typeToPic(props.post.type)}</div>
      </div>
      <div className={showBlog}>{props.post.content}</div>
    </div>
  );
}
