import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://static01.nyt.com/images/2020/09/25/sports/25soccer-nationalWEB1/merlin_177451008_91c7b66d-3c8a-4963-896e-54280f374b6d-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
        profileSrc="https://avatars1.githubusercontent.com/u/60902582?s=400&u=361d46cd844ed7362f12ccc3c1f9622d4a373f13&v=4"
        title="Cole Wilkison"
      />
      <Story
        image="https://s30876.pcdn.co/wp-content/uploads/South-Africa.jpg"
        profileSrc="https://avatars3.githubusercontent.com/u/41546522?s=400&u=64e9bef9293431008dabedfb150c956495b6b6d2&v=4"
        title="Gordon Caister"
      />
      <Story
        image="https://cnet4.cbsistatic.com/img/krmv6ZRQv8f87Uy9t8L-iRJgf4o=/1200x675/2020/05/28/7c683cc4-7348-4e3e-b856-6ebd2b3ad79c/gettyimages-1185143893.jpg"
        profileSrc="https://avatars0.githubusercontent.com/u/46906462?s=400&u=f541fc637d418ecda1c5d924d4bff009a0c7c5af&v=4"
        title="Andrew Hoffman"
      />
      <Story
        image="https://content.fortune.com/wp-content/uploads/2020/02/SAF.03.20.San-Francisco.jpg?w=819"
        profileSrc="https://avatars0.githubusercontent.com/u/38302941?s=400&u=3b7e89f5287acbf4ba469f7a2625f3bc4a58927f&v=4"
        title="Nathan Howland"
      />
      <Story
        image="https://cdn.cfr.org/sites/default/files/styles/immersive_image_3_2_desktop_2x/public/image/2019/08/Navy.jpg"
        profileSrc="https://avatars2.githubusercontent.com/u/39506884?s=400&u=1c20856dbf147e53e7b413fee1c9a22ff3453952&v=4"
        title="Brannan"
      />
    </div>
  );
}

export default StoryReel;
