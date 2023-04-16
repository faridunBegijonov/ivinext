// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IMoviesType } from "./types";
import moviesModel from "@/pages/api/model/movies.model";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMoviesType[]>
) {
  switch (req.method) {
    case "GET":
      res.status(200).json(moviesModel);
      break;
    case "POST":
      moviesModel.push();
      break;
    default:
      res.status(405).end("Error");
      break;
  }
}
