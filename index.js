const express = require('express');
const app = express();
const port = 3080;

const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  organization: 'org-3huf00qoMaF8jbVpyW9luxwZ',
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

//creating a simple api that calls the function above

app.post('/', async (req, res) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Say this is a test',
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data.choices[0].text);
  res.json({
    data: response.data,
  });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
