import jwt from 'jsonwebtoken';

export function verifyToken(jwtToken: string) {
  try {
    return jwt.verify(jwtToken, process.env.SECRET_KEY);
  } catch (error) {
    console.error(error) //eslint-disable-line
    return null;
  }
}
