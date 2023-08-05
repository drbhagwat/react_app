import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface cardItem {
  cardTitle: string;
  cardText: number;
  img: IconProp;
}

const Card = ({ cardTitle, cardText, img }: cardItem) => {
  const [components, setComponents] = useState("");

  return (
    <div className="row">
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card">
          <div className="card-body">
            <FontAwesomeIcon icon={img} />
            <h5 className="card-title">{cardTitle}</h5>
            <p className="card-text">{cardText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
