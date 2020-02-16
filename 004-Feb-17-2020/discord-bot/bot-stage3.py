# Stage 3: Add get role functionality

# Works only with Python 3

# <---DO NOT EDIT--->
import discord
from discord.utils import get
from discord.ext import commands
from discord.ext.commands import Bot
# <------>

#Place your bot token here
TOKEN = ''

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


@bot.command()
async def rolelist(ctx):
        role_list ='''
        C: For those who hate themselves
        Python: For those who are lazy
        '''
        await ctx.send(ctx.message.author.mention+role_list)


@bot.command()
async def getrole(ctx, args):
    if args == 'C':
        role = get(ctx.guild.roles, name = "C") 
        await ctx.author.add_roles(role)
        greet_c ='''
        The year is 1972, Dennis Ritchie invents a powerful gun that shoots both forward and backward simultaneously.
        Not satisfied with the number of deaths and permanent maimings from that invention, he invents C.
        \nWelcome to C, you will both love and hate it.
        '''
        await ctx.send(ctx.message.author.mention+greet_c)

    if args == 'Python':
        role = get(ctx.guild.roles, name = "Python") 
        await ctx.author.add_roles(role)
        greet_py ='''
        1991 - Dutch programmer Guido van Rossum travels to Argentina for a mysterious operation. He returns with a
        large cranial scar, invents Python, is declared Dictator for Life by legions of followers, and announces
        to the world that "There Is Only One Way to Do It."
        Poland becomes nervous.
        \nGreetings fellow parselmouth. Hhiiissss.
        '''
        await ctx.send(ctx.message.author.mention+greet_py)

bot.run(TOKEN)
