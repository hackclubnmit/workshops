# Simple Discord Bot which responds to message

# Works only with Python 3 only
import discord
from discord.utils import get

TOKEN = 'NTQ1NjM1NzgxNjgzOTcwMDQ4.XkkQ2g.cpmI-G7axPxnXqpuHLN0oDvZ-yY'

client = discord.Client()

@client.event
async def on_message(message):
    # we do not want the bot to reply to itself
    if message.author == client.user:
        return

    if message.content.startswith('Hello'):
        msg = 'Hello {0.author.mention}!'.format(message)
        await message.channel.send(msg)

@client.event
async def on_ready():
    print("The bot is ready!")
    print('Logged in as')
    print(client.user.name)
    print(client.user.id)
    print('------')

client.run(TOKEN)
