---
layout: post
title:  Using a GoDaddy Domain With GitHub Pages
date: 2019-07-10 12:58 
categories: tutorial web
---
GitHub Pages is an excellent way to setup a static site, or a Jekyll blog and the default domains provided by GitHub 
are perfectly fine. Custom domains however are a cheap way to increase branding on your site while still being able to 
rely on GitHub for free hosting. 

Almost any domain provider will work great for a custom domain, however I decided to purchase mine from GoDaddy. 

## GoDaddy DNS Management

### Creating A Records

After purchasing your domain from GoDaddy the first step you should take is to head to your DNS settings page. You can 
find this either on your GoDaddy products page by expanding the domains section, or by inserting your domain into this 
url.

``` https://dcc.godaddy.com/manage/YOUR DOMAIN HERE/dns ```

On this page you will be creating A records to map your domain to the GitHub Pages servers.

To create an A record press the "ADD" button on the bottom right of your records list. 

After pressing ADD, a drop-down menu to select record type should appear, select A. 

Next three more input boxes will appear, you can ignore the TTL box if you would like, as the default settings will 
work fine. 

In the host box type "@" without quotation marks, and in "points to" box type 185.199.108.153

You will then have to create three more A records in the same way but pointing to the following IP addresses:

* 185.199.109.153
* 185.199.110.153
* 185.199.111.153

#### Optional - Subdomain Forwarding

This step can be skipped as your domain now points to the GitHub Pages servers, however while trying to avoid the 
ongoing argument about if the www. subdomain is redundant, at the bare minimum it should redirect you to your site. 

You forward the www. subdomain to your domain in the forwarding section of your DNS management page. 

In the subdomain box type "www".

If you are planning on enforcing https on your GitHub Pages site, make sure you select https:// in the forward to 
section, and then type your domain in the box next to it.

Leave forward type set to permanent, and the settings as forward only. 

## GitHub Repository Settings 

Assuming you have already setup your pages GitHub repository, navigate to your repositories settings page.

Here scroll down to the GitHub pages section, type your domain into the custom domain box and press save, whilst here 
you can also optionally enforce https.

Your GoDaddy domain should now point to your pages site!