import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const XERO_API_URL = process.env.XERO_API_URL || 'http://localhost:3000/api.xro/2.0/Reports/BalanceSheet';

export const getBalanceSheet = async () => {
  try {
    const response = await axios.get(XERO_API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch Balance Sheet from Xero API');
  }
};
