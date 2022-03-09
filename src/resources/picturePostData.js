import redRocks from "./IMG_2020.JPG";
import meOnRedRocks from "./IMG_2168.JPG";

const picturePostData = [
  {
    title: "Red Rocks",
    img: <img src={redRocks} />,
  },
  {
    title: "Me On Red Rocks",
    img: <img src={meOnRedRocks} />,
  },
  {
    title: "Red Rocks",
    img: <img src={redRocks} />,
  },
  {
    title: "Me On Red Rocks",
    img: <img src={meOnRedRocks} />,
  },
];

export default function getPicturePostData() {
  return picturePostData;
}
