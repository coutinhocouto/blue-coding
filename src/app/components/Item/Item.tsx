import Image from "next/image";
import { ItemSingle } from "./styles";

const Item = ({ images }) => {
  return (
    <ItemSingle>
      <Image src={images.downsized.url} width={100} height={100} alt="Blue Coding Loader" unoptimized={true} />
    </ItemSingle>
  );
};

export default Item;
