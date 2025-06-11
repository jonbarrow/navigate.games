import path from 'node:path';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT: number = parseInt(process.env.NAVIGATE_GAMES_PORT || '3000', 10);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (_req: Request, res: Response) => {
	res.redirect('/mario-kart-world'); // TODO - Expand this to other games?
});

app.get('/mario-kart-world', (_req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, '..', 'pages', 'mario-kart-world.html'));
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});

export default app;