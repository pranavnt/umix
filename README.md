> ⚠️ **Security Disclaimer**: Do not use in production. This is experimental software. Here be dragons 🐉

<a href="https://youtu.be/8rdGUPiv2O0" target="_blank"><img width="200" alt="Banner" src="/images/umix-banner.png"></a>

# [umix.dev](https://umix.dev)

Umix is a browser extension and developer tool for remixing websites. Let's make the web fun.

If you're just interested in just trying it out, go to our [Repl.it playground](https://replit.com/@aidenbai05/QuestionableRedForm#script.js). Or, [watch our video](https://youtu.be/8rdGUPiv2O0).

Continue if you want to use it in real world websites.

## Umix as a Browser Extension

> **Note:** Umix is pending approval on the Chrome Extension Store. For now, you can manually integrate it via Developer Mode. We currently only support Chrome and Chromium Browsers (Edge, Arc, Brave, Opera, etc.)

1. [Click to download the project ZIP](https://github.com/pranavnt/umix/archive/refs/heads/master.zip)
2. Unzip `umix-master.zip`.
3. Type `chrome://extensions` in your URL address bar
4. Activate Developer Mode
<img width="173" alt="image" src="/images/dev-mode.png">

5. Click Load Unpacked
<img width="466" alt="image" src="/images/unpacked.png">

6. Select the `umix-master` folder
7. Profit.

## Umix as a Developer Tool

Just drop a `<script>` tag at the end of your body... it's just that easy – no quirks, no external API, just AI goodness at your fingertips.

```js
<script src="https://umix.dev/lib.js"></script>
```

## Inspiration

**The Web is boring.**

Monotonous dashboards. Identical interfaces. All apps look the same.

**The Web should be fun.**

Our earliest memories, friends, and identities were made on the web. Deep in IRC chats and custom MySpace CSS and random Wikipedia docs, we found a home–a home in a community of folks who also found the Web fun.

While the Web has matured over the past couple years, there’s an undeniable charm to it’s more hackable and playful past.


## What it does

**Remix the web.** Umix is a browser extension and developer tool that allows internet users to easily remix, reimagine, and reshare web interfaces.

Imagine being able to hover on any part of the page, ask an AI to change it to your desires, and see your creation live – that’s Umix.



## How we built it

On the frontend, we built a chrome extension that traverses the in-memory DOM and updates the HTML based on our backend’s response.

On the backend, we have a Node.js server that handles requests from the frontend. We equipped GPT-4 with a web browser, so it can browse websites and fetch content when it is unsure what to do. This happens multiple times, allowing us to get live information from the web.

Finally, we built a developer tool that allows any web developer to integrate Umix as a JavaScript library. This allows developers to enable native remixing experiences on their own websites.


## Challenges we ran into


- **Unreliability of LLMs** — GPT-4 hallucinated (made stuff up) multiple times or didn’t know the answer to various questions when testing — we couldn’t build directly on top of OpenAI and needed to connect GPT-4 to other tools. We connected it to a web browser using langchain.js and had it fetch factual information/documentation for tools from websites if it was unsure about the answer.
- **DOM structure is hard** – we had to deal with ways to handle wrapper elements, excessive attributes, and overriding classes
- **Designing the UI** – creating a very intuitive UI, especially for remixing use, is extremely difficult. We eventually landed on a very similar approach to v0.dev’s select tool
- **CSR/CORS + Devtool fun** – creating a secure, safe, and robust developer tool and chrome extension, while ensuring security requirements are met took many arduous hours of crying

## What's next for Umix

We made small demo post on Twitter (X) 12 hours ago and has been **viewed 25,000+ times**.

We already have **80** people on our waitlist (as of 4 am)

**It’s time to make the Web fun. Together, we can remix the web.**
