import arches from "./arches.jpg";
import meOnRedRocks from "./IMG_2168.JPG";
import bigfoot from "./bigfoot.jpg";
import purpleFlower from "./purpleFlower.JPG";
import patBigBend from "./patBigBend.JPG";

const picturePostData = [
  {
    title: "Arches National Park",
    img: <img src={arches} />,
  },
  {
    title: "Purple Flower",
    img: <img src={purpleFlower} />,
  },
  {
    title: "I Found Bigfoot!",
    img: <img src={bigfoot} />,
  },
  {
    title: "Me At Arches",
    img: <img src={meOnRedRocks} />,
  },
  {
    title: "Pat At Big Bend",
    img: <img src={patBigBend} />,
  },
];

export default function getPicturePostData() {
  return picturePostData;
}
