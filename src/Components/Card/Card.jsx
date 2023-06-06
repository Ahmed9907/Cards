import { Component } from "react";
import style from "./card.module.css";

export default class Card extends Component {
  render() {
    const { title, imgUrl, author, price, description } = this.props.cardInfo;
    const { increasePrice, index, deleteCard } = this.props;
    return (
      <div className="my-card text-white p-3 rounded-3 me-3">
        <img
          src={
            imgUrl ||
            "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
          }
          className="w-100"
        />

        <span className={style.test}>Route</span>
        <h2 className="py-3 test">{title}</h2>
        <p>{description}</p>
        <div className="card--info d-flex justify-content-between">
          <span>
            <i className="fa-brands fa-ethereum me-2"></i>
            {price} ETH
          </span>
          <span>
            <i className="fa-regular fa-clock me-2"></i>3 days left
          </span>
        </div>
        <button
          className="btn btn-success w-100 mt-3"
          onClick={() => {
            increasePrice(index);
          }}
        >
          Increase Price
        </button>

        <button
          className="btn btn-primary w-100 mt-3"
          onClick={() => {
            deleteCard(index);
          }}
        >
          Delete Card
        </button>

        <div className="card--footer d-flex align-items-center mt-3">
          <img src="./images/image-avatar.png" />
          <p className="mb-0 ms-3">
            Creation of{" "}
            <a href="https://facebook.com" className="text-decoration-none">
              {author}
            </a>
          </p>
        </div>
      </div>
    );
  }
}
