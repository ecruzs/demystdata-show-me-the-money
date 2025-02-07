import { Router, Request, Response } from 'express';
import { getBalanceSheet } from '../api/xeroClient';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const data = await getBalanceSheet();
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
});

export default router;
