# How to setup the Best Portfolio!

This gist is in reference with the HackClub NMIT workshop - How to setup the Best Portfolio.

## Overview

You will be able to setup and host various web app/sites on different subdomains and domains through a single droplet on DigitalOcean. You will also have a professional email ID by the end of it.
Please be sure to watch the webinar on YouTube for a clear understanding about the purpose.

## Pre-requisite - GitHub Student Developer Pack

Please make sure you have signed up for the GitHub Student Developer Pack.
To access your GitHub Education Pack visit, https://hack.af/pack and choose Nitte Meenakshi Institute of Technology - in organisation/club option.

## Step 1 - Register for a Domain and update nameservers

With GitHub Student Developer Pack you get three choices with domain registration:

1.  namecheap - you can register a .me TLD domain for 1 year,
2.  name.com - register domains among the listed TLDs for 1 year,
3.  .tech - register a .tech TLD for 1 year.

While the webinar video follows the .tech registration process, it is recommended to register .me TLD website using namecheap for a personal portfolio website (you can learn more [here](https://domain.me/)). While going with the namecheap process, skip the GitHub Pages installation as it does not facilitate the use case we are following here.

You can also consider certain free TLDs as well if you wish to simply test the process. Some of the popular free TLDs include `.tk` `.gq` `.cf`.

After completing the registration process, update the nameservers to these 3

- ns1.digitalocean.com
- ns2.digitalocean.com
- ns3.digitalocean.com

## Step 2 - Generate and save ssh key

Open your local terminal (certain operating systems require Git being installed).
Enter the command below, followed by a passphrase.

    ssh-keygen -t rsa

For a Windows System, there is a `.ssh` folder is created in your current user's directory and two files are found inside this folder. One of them ends with `.pub`, this is your public key that you should be using in the next step.

## Step 3 - Create a new droplet on Digital Ocean

Follow the steps in the webinar to create a new droplet, and choose options that suits your preference.
Be sure to use the public ssh key generated previously while doing so.

After doing this, head over to the Networking tab and add your domain to the same project. Next, go to the same domain settings in DigitalOcean and create `A` record for the primary domain by entering '@' in the hostname field and choosing the droplet that you just created.

## Step 4 - Install Termius and Login to the server

One of the great tools that you get for free with the GitHub Student Developer Pack is Termius, which is a fantastic SSH Client for logging into remote servers and managing the functionalities. Install Termius by going to this [link](https://termius.com/education?utm_source=github%20termius) and signing in with your GitHub account.

You can login to your server by using the following command. Replace `SERVER_IP_ADDRESS` with your actual server IP address of the droplet you just created on DigitalOcean.

    ssh root@SERVER_IP_ADDRESS

## Step 5 - Secure the server by disabling root user

It is always recommended to secure a server by disabling the root user since by design a root user has several admin privileges which can be destructively used. Therefore, we will be creating a new user, add it to the sudo group and disable root login.

Create a new user by entering the following command. Replace `demo` with username.

    adduser demo

    gpasswd -a demo sudo

Login to the new user and crosscheck ssh setup. Run all the following commands.

    su - demo
    mkdir .ssh
    chmod 700 .ssh
    nano .ssh/authorized_keys

Hit `CTRL-X` to exit the file, then `Y` to save the changes that you made, then `ENTER` to confirm the file name. Then restrict the modification of these ssh keys.

    chmod 600 .ssh/authorized_keys

Return back to root account

    exit

Next, we have to disable the login to the root account.

    nano /etc/ssh/sshd_config

Change

```
PermitRootLogin yes
```

to

```
PermitRootLogin no
```

And then enter this command to restart the ssh

    service ssh restart

Before logging out of the root (you will not be able to log back in), be sure to test the config by opening a new terminal window and logging in to the new user account - you might want to test the sudo privileges as well just to be sure. To do this using termius, go to Hosts -> Right click on the host -> Duplicate to change the username details -> Connect via SSH in a new window. Or run the following command in a new local terminal window.

    ssh demo@SERVER_IP_ADDRESS

Thereafter, you can logout of the root account by simply entering the exit command.

    exit

## Step 6 - Installing Nginx

Nginx is the standard reverse proxy used on a server. Install nginx by running the following commands.

    sudo apt update
    sudo apt install nginx

Check the status of nginx if everything is installed perfectly.

     systemctl status nginx

Go to the ip address of your server and check if you see the nginx welcome screen.

## Step 7 - Setting up Firewall

We do not want any users to be accessing the website by entering the IP address and the port number, therefore we should be enabling the firewall while allowing 3 ports for SSH, HTTP and HTTPS. Run the following commands to accomplish the same.

```
sudo ufw enable
sudo ufw status
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
```

Once again check the status to ensure everything is working well.

## Step 8.1 - Configuring Nginx

We will not be modifying any of the nginx default files since we plan on running multiple subdomains and modifying the default files might lead to quite a few issues. Instead we will be creating separate directories for each subdomain as well as the primary domain.

Create the directory for **example.me** as follows, using the `-p` flag to create any necessary parent directories:

```
sudo mkdir -p /var/www/example.me/html
```

Next, assign ownership of the directory with the `$USER` environment variable, (replace the second `$USER` with the username).

```
sudo chown -R $USER:$USER /var/www/example.me/html
```

The permissions of your web roots should be correct if you haven’t modified your `umask` value, but you can make sure by typing:

```
sudo chmod -R 755 /var/www/example.me
```

Next, if you plan on serving static html files or if you just wish to quickly test things - create a sample `index.html` page using `nano` or your favourite editor. In case you plan on directly **deploying node.js or dynamic apps, refer to the Step 8.2**.

```
nano /var/www/example.me/html/index.html
```

Inside, add the following sample HTML: `/var/www/example.me/html/index.html`

```
<html>
    <head>
        <title>Welcome to Example.me!</title>
    </head>
    <body>
        <h1>Success!  The example.me server block is working!</h1>
    </body>
</html>
```

For Nginx to serve this content, it’s necessary to create a server block with the correct directives. Instead of modifying the default configuration file directly, let’s make a new one at `/etc/nginx/sites-available/example.me`:

```
sudo nano /etc/nginx/sites-available/example.me
```

Paste in the following configuration block, which is similar to the default, but updated for our new directory and domain name(this part of the process is different for a node.js app): `/etc/nginx/sites-available/example.me`

```
server {
        listen 80;
        listen [::]:80;

        root /var/www/example.me/html;
        index index.html index.htm index.nginx-debian.html;

        server_name example.cme www.example.me;

        location / {
                try_files $uri $uri/ =404;
        }
}
```

Next, let’s enable the file by creating a link from it to the `sites-enabled` directory, which Nginx reads from during startup:

```
sudo ln -s /etc/nginx/sites-available/example.me /etc/nginx/sites-enabled/
```

Two server blocks are now enabled and configured to respond to requests based on their `listen` and `server_name` directives

- `example.me`: Will respond to requests for `example.com` and `www.example.com`.
- `default`: Will respond to any requests on port 80 that do not match the other two blocks.

To avoid a possible hash bucket memory problem that can arise from adding additional server names, it is necessary to adjust a single value in the `/etc/nginx/nginx.conf` file. Open the file:

```
sudo nano /etc/nginx/nginx.conf
```

Find the `server_names_hash_bucket_size` directive and remove the `#` symbol to uncomment the line: `/etc/nginx/nginx.conf`

```
...
http {
    ...
    server_names_hash_bucket_size 64;
    ...
}
...

```

Save and close the file when you are finished.

Next, test to make sure that there are no syntax errors in any of your Nginx files:

```
sudo nginx -t
```

If there aren’t any problems, restart Nginx to enable your changes:

```
sudo systemctl restart nginx
```

Nginx should now be serving your domain name. You can test this by navigating to `http://example.me`, where you should see something like this:

> Note `/var/www/html`: The actual web content, which by default only consists of the default Nginx page , is served out of the `/var/www/html` directory. This can be changed by altering Nginx configuration files.

## Step 8.2 - Configuring Nginx for node.js apps

While the entire process of the configuration remains exactly the same as specified above in Step 8.1, one change has to be made in the configuration file for the server block.
Enter the command below to open the server block config file:

```
sudo nano /etc/nginx/sites-available/example.me
```

Replace the contents with the following:

```
server {
        listen 80;
        listen [::]:80;

        server_name example.me www.example.me;


location / {
        proxy_pass http://localhost:5000; #whatever port your app runs on
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
```

As you can observe, the location specifies the port instead of the static files previously.
If you had previously configured the server block for serving static files, then please be sure to test the config and restart nginx.

```
sudo nginx -t
sudo systemctl restart nginx
```

## Step 9 - Setting up a subdomain

You have to start by adding another `A` record to your domain in DigitalOcean. Enter just the subdomain (example: enter **api** for **api.example.me**) in the hostname field and choose the same droplet IP. Refer the video to resolve any doubts.

Next follow the same process to add a new subdomain block to the nginx config.

    sudo mkdir -p /var/www/example.com/html
    sudo chown -R $USER:$USER /var/www/example.me/html
    sudo chmod -R 755 /var/www/example.me

To serve static html files, enter the following command and paste your html file contents.

    nano /var/www/example.me/html/index.html

> **Tip:** You can load all of your static website files by connecting to the server using the SFTP option in the termius app.

Once again, based on whether you wish to host a node.js app or serve static html files, paste the respective configuration in the file. Refer to Step 8.1 for static files and Step 8.2 for node.js apps.
As specified earlier, the following command is to open the editor and configure the specific server block.

    sudo nano /etc/nginx/sites-available/example.me

The final three commands once again remain the same.

    sudo ln -s /etc/nginx/sites-available/example.me /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl restart nginx

Be sure to test if it is working by going and visiting the subdomain. Note: it may take a few minutes for the subdomain to load.

## Step 10 - Install node js and use to git to load apps

This part is fairly straightforward, simply run the following commands and clone your repo into the apps directory.

```
sudo apt install nodejs

node --version

mkdir apps

git clone yourproject.git

cd yourproject
npm install

```

> **Tip:** You can use Bootstrap builders to quickly create a website, you can edit this later -> [https://startbootstrap.com/themes/freelancer/](https://startbootstrap.com/themes/freelancer/)

## Step 11 - Setup PM2 process manager to keep your app running

This is to ensure that the app restarts on its own whenever and if the server ever restarts.

```
sudo npm i pm2 -g
pm2 start app (or whatever your file name)

# To make sure app starts when reboot
pm2 startup ubuntu
```

Repeat the process to have another app running on a different port.

## Step 12 - Using Let's Encrypt to obtain SSL

By now you should have your primary domain and a couple of other subdomains that you may have created, up and running. All of them are served via the HTTP protocol hence in this step we will be using [Let's Encrypt](https://letsencrypt.org/) to obtain SSL certificates. Run all the following commands, you maybe prompted to enter your email ID and it is recommended that you enter your valid email ID.

```
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

The SSL certificates generated are valid only for 90 days and you may perform a dry run of the renewal by running the following command.

```
# Only valid for 90 days, test the renewal process with
certbot renew --dry-run
```

## Step 13 - Setting up your email accounts

After having tested several options, [ImprovMX](https://improvmx.com/) is the best way for anyone looking to create and use professional looking email IDs for free.

Headover to [ImprovMX website](https://improvmx.com/), enter the details and click on create free alias.
Verify your email.
In DigitalOcean head over to Networking -> Domain -> Your domain and delete all previous MX Records.
Add the records specified in ImprovMX
![The serrings](https://d33wubrfki0l68.cloudfront.net/b50f554584425c89c1f10820b29ab3b45f4091d1/71ce1/img/improvmx2.png)

Additionally, you may be prompted to add TXT record, go ahead and do that as well.

Guide available -> [Here](https://improvmx.com/guides/send-emails-using-gmail/)
Setup 2-factor authentication and login on your Gmail account.
Open Security Tab in your Google Account and create an App Password, while doing so choose mail and mac under app and device respectively.

Go to Gmail -> Settings -> Accounts and Import. Then, select “Add another email address you own” under Aliases.
Set your forwarded email (your alias) and your sender’s name. Untick “treat as an alias”.
SMTP is **smtp.gmail.com**, port is right already. Username is **your gmail address** (incl. @gmail.com). Password is the app password you generated in Step 2.  
Leave TLS enabled as is. You will receive an email from Gmail asking you to confirm ownership with a code. Fill in the code in the popup modal, and you are all set!

# That's it!

You now have a flexible portfolio setup as well as professional email IDs setup!

## Thank you for being a part of this webinar!

Please be sure to follow HackClub NMIT on the all the different platforms:
Twitter: [https://twitter.com/HackClubNmit](https://twitter.com/HackClubNmit)

Instagram: [https://www.instagram.com/hackclubnmit](https://www.instagram.com/hackclubnmit/)

Facebook: [https://fb.me/hackclubnmit](https://fb.me/hackclubnmit)

LinkedIn: [https://www.linkedin.com/company/hackclubnmit](https://www.linkedin.com/company/hackclubnmit)

Github: [https://github.com/HackClubNMIT](https://github.com/HackClubNMIT)

Youtube: [https://www.youtube.com/channel/UCMcJ0_61s_G1UvPbVPs2edw](https://www.youtube.com/channel/UCMcJ0_61s_G1UvPbVPs2edw)

If you have any questions, you can reach us via the above specified platforms.
