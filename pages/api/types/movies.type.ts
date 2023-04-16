import { StaticImageData } from "next/image";

export interface IMoviesType {
  id: number;
  name: string;
  full_name: string;
  year_time: string;
  country: string;
  rating: number;
  description: string;
  audio_tracks: string;
  starring: string;
  img: StaticImageData;
  trailer: string;
}
