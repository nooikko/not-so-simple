import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface LoginResponse {
  data: {
    findUserByEmail: {
      email: string;
      hash: string;
    };
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    body: { email, password },
  } = req;

  if (!email || !password) {
    return res.status(400).json({
      error: 'Request missing username or password',
    });
  }

  const { data } = await axios.post<LoginResponse>(
    process.env.FAUNA_URL,
    {
      query: `
      query GetUser($email: String!) {
        findUserByEmail(email: $email) {
          _id
          email
          hash
        }
      }`,
      variables: {
        email,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.FAUNA_TOKEN}`,
      },
    },
  );

  if (!data.data.findUserByEmail?.email) {
    return res.status(400).json({
      error: 'User not found',
    });
  }

  const matching = await bcryptjs.compare(
    password,
    data.data.findUserByEmail.hash,
  );

  if (!matching) {
    return res.status(400).json({
      error: 'Incorrect password',
    });
  }

  const token = jwt.sign(data.data.findUserByEmail, process.env.SECRET_KEY);

  return res.status(200).json({ token });
}
