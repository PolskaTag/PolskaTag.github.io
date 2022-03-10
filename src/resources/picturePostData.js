import arches from "./arches.jpg";
import meOnRedRocks from "./IMG_2168.JPG";
import bigfoot from "./bigfoot.jpg";
import purpleFlower from "./purpleFlower.JPG";
import patBigBend from "./patBigBend.JPG";

const picturePostData = [
  {
    title: "Arches National Park",
    img: <img src={arches} alt="Arches National Park" />,
  },
  {
    title: "Purple Flower",
    img: <img src={purpleFlower} alt="Purple Flower" />,
  },
  {
    title: "I Found Bigfoot!",
    img: <img src={bigfoot} alt="I Found Bigfoot!" />,
  },
  {
    title: "Me At Arches",
    img: <img src={meOnRedRocks} alt="Me At Arches" />,
  },
  {
    title: "Pat At Big Bend",
    img: <img src={patBigBend} alt="Pat At Big Bend" />,
  },
];

export default function getPicturePostData() {
  return picturePostData;
}
