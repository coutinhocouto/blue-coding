export interface DataProps {
  images: ImageProps;
  url: string;
  id: number;
}

export interface GifsData {
  data: DataProps[];
}

export interface DownProps {
  url: string;
}

export interface ImageProps {
  downsized: DownProps;
}

export interface GifsProps {
  gifs: GifsData;
}
