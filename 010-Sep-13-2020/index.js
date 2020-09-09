const Discord = require('discord.js');

const client = new Discord.Client();
require('dotenv').config();

const token = process.env.DISCORD_TOKEN;

const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

client.once('ready', () => console.log('ready!'));

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function replyMsg(textMsg) {
    projectId = process.env.PROJECT_ID;
    // A unique identifier for the given session
    const sessionId = uuid.v4();

    // Create a new session
    const sessionClient = new dialogflow.SessionsClient();
    const sessionPath = await sessionClient.projectAgentSessionPath(
        projectId,
        sessionId
    );

    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: textMsg,
                // The language used by the client (en-US)
                languageCode: 'en-US',
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    //   console.log("Detected intent");
    const result = responses[0].queryResult;
    console.log(`Query: ${result.queryText}`);
    //   console.log(`  Response: ${result.fulfillmentText}`);
    //   if (result.intent) {
    //     console.log(`  Intent: ${result.intent.displayName}`);
    //   } else {
    //     console.log(`  No intent matched.`);
    //   }

    return await result.fulfillmentText;
}

client.on('message', (message) => {
    console.log(message.author.bot);
    if (!message.author.bot) {
        replyMsg(message.content).then((res) => {
            console.log(res);
            message.channel.send(res);
        });
    }
});

client.login(token);
