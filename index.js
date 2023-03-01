const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  organization: 'org-3huf00qoMaF8jbVpyW9luxwZ',
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

//creating a simple api that calls the function above

app.post('/', async (req, res) => {
  const { message } = req.body;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });
  res.json({
    // data: response.data,
    message: response.data.choices[0].text,
  });
});

app.get('/models', async (req, res) => {
  const response = await openai.listEngines();
  console.log(responsedata.data);
  res.json({
    models: response.data.data,
  });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
