import React from "react";
import styles from "../../../css/analytics.module.css";
import StackShareCard from "./StackshareCard";

const StackshareContainer = () => {
  return (
    <div>
      <h2 className={styles.stackshare_header}>Tech stacks:</h2>
      <div className={styles.stackshare_tile_container}>
        {tempStore.map((item, index) => (
          <StackShareCard link={item.link} imgUrl={item.imgUrl} key={index} />
        ))}
      </div>
    </div>
  );
};

export default StackshareContainer;
const tempStore = [
  {
    link: "https://stackshare.io/google/google",
    imgUrl: "/googleicon.webp",
  },
  {
    link: "https://stackshare.io/twitch/twitch",
    imgUrl: "/twitchicon.webp",
  },
  {
    link: "https://stackshare.io/twitter/twitter",
    imgUrl: "/twittericon.webp",
  },
  {
    link: "https://stackshare.io/amazon/amazon",
    imgUrl: "/awsicon.webp",
  },
  {
    link: "https://stackshare.io/lyft/lyft",
    imgUrl: "/lyfticon.webp",
  },
  {
    link: "https://stackshare.io/facebook/facebook",
    imgUrl: "/fbicon.webp",
  },
  {
    link: "https://stackshare.io/uber-technologies/uber",
    imgUrl: "/ubericon.webp",
  },
];
