import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import Card, { getDashBoardDTO } from "./components/Card/Card";
import {
  faBuilding,
  faDivide,
  faLinesLeaning,
  faSection,
} from "@fortawesome/free-solid-svg-icons";
import { DashboardDTO } from "./components/DashBoardDTO";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { cardItem } from "./components/cardItem";

const App = () => {
  const [dashboard, setDashboard] = useState<DashboardDTO>();

  useEffect(() => {
    getDashBoardDTO().then((data) => setDashboard(data));
  }, []);

  let cardList: cardItem[] = [];

  var tempCardItem: cardItem = {
    cardText: dashboard?.divisions,
    cardTitle: "# Divisions",
    img: faDivide as IconProp,
  };

  cardList[0] = tempCardItem;

  var tempCardItem: cardItem = {
    cardText: dashboard?.departments,
    cardTitle: "# Departments",
    img: faBuilding as IconProp,
  };
  cardList[1] = tempCardItem;

  var tempCardItem: cardItem = {
    cardText: dashboard?.lines,
    cardTitle: "# Lines",
    img: faLinesLeaning as IconProp,
  };
  cardList[2] = tempCardItem;

  var tempCardItem: cardItem = {
    cardText: dashboard?.zones,
    cardTitle: "# Zones",
    img: faSection as IconProp,
  };
  cardList[3] = tempCardItem;

  return (
    <div className="container-fluid">
      <NavBar />
      {cardList.map((cardItem) => (
        <Card
          key={cardItem.cardTitle}
          cardTitle={cardItem.cardTitle}
          cardText={cardItem.cardText}
          img={cardItem.img}
        />
      ))}
      <Footer note="Copyright &#169; MITE 2023" />
    </div>
  );
};

export default App;
