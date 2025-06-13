import path from 'node:path';
import express from 'express';
import dotenv from 'dotenv';
import type { Request, Response } from 'express';

dotenv.config();

const app = express();
const PORT: number = parseInt(process.env.NAVIGATE_GAMES_PORT || '3000', 10);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (_request: Request, response: Response) => {
	response.sendFile(path.join(__dirname, '..', 'pages', 'home.html'));
});

app.get('/mario-kart-world', (_request: Request, response: Response) => {
	response.sendFile(path.join(__dirname, '..', 'pages', 'mario-kart-world.html'));
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
