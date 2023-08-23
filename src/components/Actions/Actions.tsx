import { ActionsHolder } from "./styles";

interface PaginationProps {
  total_count: number;
  count: number;
  offset: number;
}

interface GifsProps {
  pagination: PaginationProps;
}

interface ActionsProps {
  pagination: number;
  loadMore: number;
  setPagination: React.Dispatch<React.SetStateAction<number>>;
  setLoadMore: React.Dispatch<React.SetStateAction<number>>;
  gifs: GifsProps;
}

const Actions = ({
  pagination,
  loadMore,
  setPagination,
  setLoadMore,
  gifs,
}: ActionsProps) => {
  return (
    <ActionsHolder>
      {loadMore < 50 && <button type="button" onClick={() => setLoadMore(loadMore + 25)}>Load More Gif&apos;s</button>}
      {pagination != 0 && <button type="button" onClick={() => setPagination(pagination - loadMore)}>« Previous Page</button>}
      {pagination < 4998 && <button type="button" onClick={() => setPagination(pagination + loadMore)}>Next Page »</button>}
    </ActionsHolder>
  );
};

export default Actions;
