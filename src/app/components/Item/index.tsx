import Item from "./Item";
import { ItemHolder } from "./styles";

export default function Items({ gifs }) {
  if (gifs.data) {
    return (
      <ItemHolder>
        {gifs.data.map((e: { images: any; url: string; id: string }) => (
          <Item key={e.id} images={e.images} />
        ))}
      </ItemHolder>
    );
  } else {
    return <section>Noting found!</section>;
  }
}
