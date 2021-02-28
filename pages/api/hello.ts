// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';

const api = (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;

  res.status(200).json({
    name: "Bryan",
    params: query
  })
}

export default api;