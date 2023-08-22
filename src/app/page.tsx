"use client";

import { useEffect, useState } from "react";
import { getGifs } from "./hooks/Hooks";
import Items from "./components/Item";
import Loader from "./components/Loader";

export default function Home() {
  const [search, setSearch] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [show, setShow] = useState(false);

  const { gifs, isLoadingGifs } = getGifs(search);

  const clearResults = () => {
    setSearchVal('');
    setSearch('');
  }

  /*useEffect(() => [

  ],[]);*/

  return (
    <main>
      <input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="button" onClick={() => setSearchVal(search)}>
        Search Gif
      </button>
      <button type="button" onClick={() => clearResults()}>
        Clear Results
      </button>
      {!isLoadingGifs && searchVal &&
        <Items gifs={gifs} />
      }
    </main>
  );
}
