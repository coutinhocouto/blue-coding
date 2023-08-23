import Image from "next/image";
import { ItemSingle } from "./styles";
import { ImageProps } from "./types";

interface ImageProp {
  images: ImageProps;
}

const Item = ({ images }: ImageProp) => {
  return (
    <ItemSingle>
      <Image src={images.downsized.url}  layout="fill" alt="Blue Coding Gif" unoptimized={true} />
    </ItemSingle>
  );
};

export default Item;
