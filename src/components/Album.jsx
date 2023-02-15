import React from "react";
import "./album.scss";
import image from "../images/album-image.jpg";

import { AiOutlineHeart } from "react-icons/ai";

function Album(props) {
  // console.log(props.imgUrl)
  return (
    <div className="album__card">
      <section className="card__image-container">
        <img
          src={image}
          alt={`${props.artist} album cover pic`}
          className="album__image"
        />
        <div className="image__text-highlight">
          <p className="band-name__highlight">{props.artist}</p>
          <p className="album-name__highlight">{props.album}</p>
        </div>
      </section>
      <section className="card__info-container">
        <div className="band__info">
          <h2>{props.artist}</h2>
          <p>{props.groupType}</p>
        </div>
        <div className="album__info">
          <h3>{props.album}</h3>
          <p>{`(${props.year})`}</p>
        </div>
        <div className="buttons-container">
          <a href="#">dance</a>
          <AiOutlineHeart className="heart" />
        </div>
      </section>
    </div>
  );
}

export default Album;
