const http = require('http');
const url = require('url');
const fs = require('fs');

const host = '0.0.0.0';
const port = 80;

const requestListener = (req, res) => {
    var parsedURL = url.parse(req.url, true);
    const m = parsedURL.pathname.split('/');
    console.log(`Connection: ${parsedURL.pathname}`);

    switch (m[1]) {
        case 'MinecraftCloaks':
            var username = m[2].split('.')[0];
            console.log(`  * Requesting a cape for ${username}...`);
            if (fs.existsSync(`./capes/${username}.png`)) {
                res.writeHead(200);
                res.end(fs.readFileSync(`./capes/${username}.png`));
                console.log(`      +    Cape found!`);
            } else {
                res.writeHead(404);
                res.end(`${username} doesn't have a cape.`);
                console.log(`     !!!   Couldn't find cape.`);
            }
            break;
        
            case 'MinecraftSkins':
                var username = m[2].split('.')[0];
                console.log(`  * Requesting a skin for ${username}...`);
                if (fs.existsSync(`./skins/${username}.png`)) {
                    res.writeHead(200);
                    res.end(fs.readFileSync(`./skins/${username}.png`));
                    console.log(`      +    Skin found!`);
                } else {
                    res.writeHead(404);
                    res.end(`${username} doesn't have a skin.`);
                    console.log(`     !!!   Couldn't find skin.`);
                }
                break;

        default:
            // should probably pipe the actual output
            res.writeHead(404);
            res.end(`'/MinecraftCloaks/username.png' or '/MinecraftSkins/username.png'`);
            console.log(`  * 404`);
            break;
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on port ${port}.`);
});