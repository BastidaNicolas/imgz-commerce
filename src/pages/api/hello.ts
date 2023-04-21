// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data:any
};

const fakeData = 'hello'
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ data: fakeData });
}
