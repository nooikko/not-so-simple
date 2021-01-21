import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { hashPassword } from '@utils';

interface LoginResponse {
  data: {
    createUser: {
      _id;
    };
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const hash = await hashPassword('password_here');

  const { data } = await axios.post<LoginResponse>(
    process.env.FAUNA_URL,
    {
      query: `
      mutation CreateUser($email: String!, $hash: String!) {
        createUser(data: {
          email: $email,
          hash: $hash
        }) {
          _id
        }
      }`,
      variables: {
        email: 'elijahpenney@outlook.com',
        hash,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.FAUNA_TOKEN}`,
      },
    },
  );

  return res.status(200).json({ _id: data.data.createUser._id });
}
