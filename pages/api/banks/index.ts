import type { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '@utils';
import { Bank, BankType } from '@models';

export default async function handlers(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method, body } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const banks = await Bank.find({});

        res.json(banks);
      } catch (error) {
        throw error;
      }
      break;
    case 'POST':
      try {
        const bank = new Bank(body);
        bank.save();
      } catch (error) {
        throw error;
      }
  }
}
