import request from 'supertest';
import app from '../src/app';
import * as xeroClient from '../src/api/xeroClient';

jest.mock('../src/api/xeroClient');

describe('GET /balancesheet', () => {
  it('should return balance sheet data when the API call is successful', async () => {
    const mockBalanceSheetData = {
      Reports: [
        {
          ReportName: 'BalanceSheet',
          Rows: [
            { Title: 'Assets', Amount: 50000 },
            { Title: 'Liabilities', Amount: 20000 }
          ]
        }
      ]
    };
    (xeroClient.getBalanceSheet as jest.Mock).mockResolvedValue(mockBalanceSheetData);

    const response = await request(app).get('/balancesheet');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockBalanceSheetData);
  });

  it('should return an error when the API call fails', async () => {
    (xeroClient.getBalanceSheet as jest.Mock).mockRejectedValue(new Error('API failure'));

    const response = await request(app).get('/balancesheet');

    expect(response.status).toBe(500);
    expect(response.body.error).toBe('API failure');
  });

  it('should return 404 for an unknown route', async () => {
    const response = await request(app).get('/unknown-route');
    expect(response.status).toBe(404);
    expect(response.body.error).toBe('Route not found');
  });

});
