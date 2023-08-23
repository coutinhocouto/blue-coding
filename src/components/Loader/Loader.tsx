import Image from "next/image";
import { LoaderHolder } from "./styles";

const Loader = () => {
  return (
    <LoaderHolder>
      <Image
        src="/loader.gif"
        width={100}
        height={100}
        alt="Blue Coding Loader"
      />
    </LoaderHolder>
  );
};

export default Loader;
