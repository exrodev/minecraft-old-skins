# Minecraft Old Skins

![example of skin and cape](https://exro.dev/static/img/javaw_J2zU2njV13.png)

## How to use

Make sure you have [NodeJS](https://nodejs.org/en/) installed.

Create two folders, one called `skins` and the other called `capes`.

Place your skins/capes in their respective folders and name the files `username.png`, and replace `username` with whatever account you want to have that skin/cape.

Run the script by typing `node index.js`.

[Edit your hosts file](https://docs.rackspace.com/docs/modify-your-hosts-file) and add the following entry:
```
ip_address s3.amazonaws.com
```
Replace `ip_address` with the IP address of the machine that is running the script (if it running on your current machine, put `127.0.0.1`).