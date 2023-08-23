"use client";

import Actions from "@/components/Actions";
import Form from "@/components/Form";
import Items from "@/components/Item";
import Loader from "@/components/Loader";
import { useState } from "react";
import { getGifs } from "@/hooks/Hooks";

export default function Home() {
  const [search, setSearch] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [pagination, setPagination] = useState(0);
  const [loadMore, setLoadMore] = useState(25);

  const { gifs, isLoadingGifs } = getGifs(searchVal, loadMore, pagination);

  return (
    <main>
      <Form
        search={search}
        setSearch={setSearch}
        setSearchVal={setSearchVal}
        setPagination={setPagination}
        setLoadMore={setLoadMore}
      />
      {isLoadingGifs && searchVal && <Loader />}
      {!isLoadingGifs && searchVal && <Items gifs={gifs} />}
      {!isLoadingGifs && searchVal && (
        <Actions
          pagination={pagination}
          loadMore={loadMore}
          setPagination={setPagination}
          setLoadMore={setLoadMore}
          gifs={gifs}
        />
      )}
    </main>
  );
}
