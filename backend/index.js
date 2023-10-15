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


const port = process.env.PORT;

const embeddings = new OpenAIEmbeddings();
const model = new OpenAI({ modelName: "gpt-4", temperature: 0});
const tools = [
    new WebBrowser({ model, embeddings }),
];


app.use(express.json());
app.use(cors({ origin: "*" }));

app.post('/edit', async (req, res) => {
    const { html, edit } = req.body;
    console.log({html, edit});
    const executor = await initializeAgentExecutorWithOptions(tools, model, {
        agentType: "zero-shot-react-description",
        verbose: true,
      });
    console.log("Loaded agent.");

    console.log(executor);

    const input = `You are a HTML processer. You are given raw HTML, and a task.
You must output the raw HTML and its original content and nothing else.
// 1. Try to be additive, keep as much of the original structure and styles unless otherwise specified.
// 2. In the final output, only include the raw HTML — NOTHING else.
// 3. When image URLs are asked for, find an actual image URL on the internet to use.
// 4. Do NOT use the web browser unless the user asks for information on the internet (such as a summary or image).

## Input
HTML: ${html}
Task: ${edit}
// The output MUST be HTML and HTML only — no text`;

    const result = await executor.call({ input });

    console.log(result);
    res.json({output: result});
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
