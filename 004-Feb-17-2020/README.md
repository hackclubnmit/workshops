# Making A Discord Bot

This is a tutorial where we make a small discord bot where it will respond to user
messages and give some functionality like giving roles to users.

## What you will learn in this exercise

- Python Basics
- The Discord API Workflow
- Setting up a connection to Discord API
- Communicating with the Discord API using [discord.py](https://discordpy.readthedocs.io/en/latest/index.html)
- Some basics of networking and access tokens

## Prerequisistes

- A Discord Account: make one here -> https://discordapp.com/
- Have Python installed -> https://www.python.org/downloads/
- Install Discord Python API -> https://discordpy.readthedocs.io/en/latest/intro.html#installing
- A text Editor (I recommend vscode) -> https://code.visualstudio.com/

## Python Basics Guides

- Offical Documentation: https://docs.python.org/3/tutorial/index.html
- Well Written Tutorials: https://realpython.com/
- [Derek Banas's Youtube Tutorials](https://www.youtube.com/watch?v=nwjAHQERL08&list=PLGLfVvz_LVvTn3cK5e6LjhgGiSeVlIRwt)
- [Sentdex's Youtube Tutorials](https://www.youtube.com/watch?v=eXBD2bB9-RA&list=PLQVvvaa0QuDeAams7fkdcwOGBpGdHpXln)

## Making an Application On Discord

### For a visual guide - [Here](https://realpython.com/how-to-make-a-discord-bot-python/)

- Visit the [Discord Developer Portal](http://discordapp.com/developers/applications)
- An application allows you to interact with Discord’s APIs by providing authentication tokens, designating permissions, and so on. To create a new application, select New Application.
- Type in any name and click Create.
- You’ll need to create a bot user. To do so, in Bot Settings, select Add Bot.
- And you're done. Change the name of the bot if you like.
- Keep in mind that this is the place where you will get the token for the bot.

## Make your Own Server

- Open your discord client and click on the + button on the left side of your screen.
- Give it a name and select the region.

## Adding a Bot to a Server

- Go back to [Discord Developer Portal](http://discordapp.com/developers/applications)
- select the OAuth2 page from the left-hand navigation:
- You now need to authorize API access to your newly created application. In this case, you’ll want to grant your application’s bot user access to Discord APIs using your application’s OAuth2 credentials.
- To do this, scroll down and select bot from the SCOPES options and Administrator from BOT PERMISSIONS
- Select Copy beside the URL that was generated for you, paste it into your browser, and select your guild from the dropdown options
