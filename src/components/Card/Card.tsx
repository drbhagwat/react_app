import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cardItem } from "../cardItem";
import { DashboardDTO } from "../DashBoardDTO";
import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:8080/api/v1/dashboard",
  headers: {
    "X-API-KEY": "MITE",
  },
});

export const getDashBoardDTO = async (): Promise<DashboardDTO> => {
  const { data } = await client.get("");
  const obj = {} as DashboardDTO;
  obj.departments = data.departments;
  obj.designations = data.designations;
  obj.divisions = data.divisions;
  obj.lines = data.lines;
  obj.zones = data.zones;
  return data;
};

const Card = ({ cardTitle, cardText, img }: cardItem) => {
  return (
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card">
          <FontAwesomeIcon className="card-img-top" icon={img} />
          <div className="card-body">
            <h5 className="card-title">{cardTitle}</h5>
            <p className="card-text">{cardText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
