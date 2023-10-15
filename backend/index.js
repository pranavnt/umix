const oai = require("openai");
const express = require('express');
const cors = require('cors'); // Import cors middleware
const { OpenAI } = require("langchain/llms/openai");
const { ChatOpenAI } = require("langchain/chat_models/openai");
const { WebBrowser } = require("langchain/tools/webbrowser");
const { OpenAIEmbeddings } = require("langchain/embeddings/openai");
const { initializeAgentExecutorWithOptions } = require("langchain/agents");
const app = express();

// load dotenv
require("dotenv").config();


const port = 3000;

// const openai = new oai.OpenAI({
    // apiKey: "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",
// })

const embeddings = new OpenAIEmbeddings({apiKey: "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"});
const model = new ChatOpenAI({ modelName: "gpt-4", temperature: 0,  apiKey: "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" });
const tools = [
    new WebBrowser({ model, embeddings }),
];


app.use(express.json());
app.use(cors({ origin: "*" }));

app.post('/edit', async (req, res) => {
    const { html, edit } = req.body;
    console.log({html, edit});
    const executor = await initializeAgentExecutorWithOptions(tools, model, {
        agentType: "openai-functions",
        verbose: true,
      });
    console.log("Loaded agent.");
    
    console.log(executor);
    
    const input = `You are a HTML post processer. You are given raw HTML, and a task. Execute the task on the HTML, and output the raw HTML and it's original content and nothing else. Try to be additive, keep as much of the original structure and styles unless otherwise specified. Output only HTML and no text (no explanations after or before). If you are asked to provide a URL, show a REAL url, not a fake one saying one should insert something. You have access to the following additional functions: window.getCoffee() -> Promise<string>
    getRandomJoke: Calls an API to fetch a random Chuck Norris joke.
    Return Value: A string containing the joke.
    getWeather(city): Calls an API to fetch weather information for a specified city.
    getRandomQuote: Calls an API to fetch a random quote.
    Return Value: A string containing the quote.
    getRandomDog: Calls an API to fetch a random dog image.
    Return Value: A string containing the URL of the dog image.
    getRandomUser: Calls an API to fetch random user information.
    Return Value: A string containing the first and last name of a randomly generated user.
    
    You have access to the fade, slide, and rotate classes. `

    const result = await executor.run({ input })
    
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "system", content: `You are a HTML post processer. You are given raw HTML, and a task. Execute the task on the HTML, and output the raw HTML and it's original content and nothing else. Try to be additive, keep as much of the original structure and styles unless otherwise specified. Output only HTML and no text (no explanations after or before). If you are asked to provide a URL, show a REAL url, not a fake one saying one should insert something. You have access to the following additional functions: window.getCoffee() -> Promise<string>
getRandomJoke: Calls an API to fetch a random Chuck Norris joke.
Return Value: A string containing the joke.
getWeather(city): Calls an API to fetch weather information for a specified city.
getRandomQuote: Calls an API to fetch a random quote.
Return Value: A string containing the quote.
getRandomDog: Calls an API to fetch a random dog image.
Return Value: A string containing the URL of the dog image.
getRandomUser: Calls an API to fetch random user information.
Return Value: A string containing the first and last name of a randomly generated user.

You have access to the fade, slide, and rotate classes. 
` },{ role: "user", content: `Here is an HTML element: ${html}. Here is your task ${edit}. Do not use script tags, write it inline.` }],
        model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion.choices[0].message);
    console.log(result);
    res.json({"content":chatCompletion.choices[0].message.content});
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

