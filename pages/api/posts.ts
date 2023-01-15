import type { NextApiRequest, NextApiResponse } from 'next'

type Posts = {
  title: string,
  describe: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Posts[]>
) {
  
  res.status(200).json([
    {
      title: 'Hello Worl332322 !',
      describe: 'Lorem ipsum'
    },
    {
      title: 'Hello Wo312321rld !',
      describe: 'Lorem ipsum'
    }
  ])
}
