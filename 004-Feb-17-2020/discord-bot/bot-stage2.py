# Same as stage 1 but with decorators

# Works only with Python 3

# <---DO NOT EDIT--->
import discord
from discord.utils import get
from discord.ext import commands
from discord.ext.commands import Bot
# <------>

#Place your bot token here
TOKEN = 'NTQ1NjM1NzgxNjgzOTcwMDQ4.XkkQ2g.cpmI-G7axPxnXqpuHLN0oDvZ-yY'

client = discord.Client()

bot = commands.Bot(command_prefix='p!') # bot prefix, for eg p!hello

# Remove default help command
bot.remove_command('help')

@bot.event
async def on_ready():
    print("Successfully Booted Up!")
    await bot.change_presence(activity=discord.Game(name="TestBot | p!help"))


@bot.command()
async def hello(ctx):
    # # we do not want the bot to reply to itself
    # if message.author == client.user:
    #     return
    #msg = 'Hello {0.author.mention}'.format(message)
    await ctx.send("Hello "+ctx.message.author.mention+"!")

bot.run(TOKEN)
