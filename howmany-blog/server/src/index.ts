import express from 'express';
import bodyParser from 'body-parser';
import postsRoutes from './routes/posts';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/posts', postsRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Howmany.blog API');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});