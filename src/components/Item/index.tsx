import Item from "./Item";
import { ItemHolder } from "./styles";
import { GifsProps } from "./types";

export default function Items({ gifs } : GifsProps) {
  if (gifs.data) {
    return (
      <ItemHolder>
        {gifs.data.map((e) => (
          <Item key={e.id} images={e.images} />
        ))}
      </ItemHolder>
    );
  } else {
    return <section>Noting found!</section>;
  }
}
