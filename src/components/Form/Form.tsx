import { FormHolder } from "./styles";
import Image from "next/image";

interface FormProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSearchVal: React.Dispatch<React.SetStateAction<string>>;
  setPagination: React.Dispatch<React.SetStateAction<number>>;
  setLoadMore: React.Dispatch<React.SetStateAction<number>>;
}

const Form = ({
  search,
  setSearch,
  setSearchVal,
  setPagination,
  setLoadMore,
}: FormProps) => {
  const clearResults = () => {
    setSearchVal("");
    setSearch("");
    setPagination(0);
    setLoadMore(25);
  };

  return (
    <FormHolder>
      <Image src="/logo.png" width={232} height={50} alt="Blue Coding" />
      <div>
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
      </div>
    </FormHolder>
  );
};

export default Form;
