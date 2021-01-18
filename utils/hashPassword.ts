import bycrypt from 'bcryptjs';

export async function hashPassword(password: string): Promise<string> {
  const salt = await bycrypt.genSalt(10);
  const hash = await bycrypt.hash(password, salt);

  return hash;
}
