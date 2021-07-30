import React, { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  const getURL = `https://www.breakingbadapi.com/api/characters?name=${query}`;
  const fetchItems = () => fetch(getURL).then((res) => res.json());

  useEffect(() => {
    // fetchItems().then((data) => console.log(data));
    fetchItems().then((data) => setItems(data));

    setIsLoading(false);

    fetchItems();
  },[query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
