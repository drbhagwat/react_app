import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const client = axios.create({
  baseURL: "http://localhost:8080/api/v1/divisions",
  headers: {
    "X-API-KEY": "MITE",
  },
});

export const getDivisions = async () => {
  const { data } = await client.get("");
  return data;
};

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getDivisions().then((data) => setPosts(data));
  }, []);

  return (
    <div className="App">
      <NavBar />

      {posts.map((item) => (
        <Card
          key={item}
          cardTitle="Divisions"
          cardText={posts.length}
          img={faHome}
        />
      ))}

      <Footer note="Copyright &#169; MITE 2023" />
    </div>
  );
};

export default App;
