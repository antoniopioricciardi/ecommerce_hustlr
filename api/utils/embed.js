const OpenAI = require('openai');
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function embedText(text) {
  const response = await client.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });
  return response.data[0].embedding;
}

async function embedTexts(texts) {
  const response = await client.embeddings.create({
    model: 'text-embedding-3-small',
    input: texts,
  });
  return response.data.map(d => d.embedding);
}

module.exports = { embedText, embedTexts };