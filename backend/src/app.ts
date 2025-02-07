import express from 'express';
import cors from 'cors';
import { errorHandler } from './utils/errorHandler';
import balanceSheetRoutes from './routes/balanceSheet';

const app = express();

// CORS
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
}));

// Middlewares
app.use(express.json());

// Endpoints
app.get('/', (req, res) => {
  res.send('Welcome to the Xero Balance Sheet API backend');
});
app.use('/balancesheet', balanceSheetRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use(errorHandler);

export default app;
