const http = require('http');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.post('/api/signup', (req, res) => {
  console.log('[backend] Sign-up submitted:', JSON.stringify(req.body, null, 2));

  res.status(200).json({
    success: true,
    message: 'Sign-up successful',
  });
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`[backend] Mock API server listening on http://localhost:${PORT}`);
});
