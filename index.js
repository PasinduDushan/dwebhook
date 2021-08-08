const fetch = require('node-fetch')
const datauri = require('datauri');

//const WEBHOOK_CREATE = "/channels/{channel.id}/webhooks"
//const MODIFY_WEBHOOK = "/webhooks/{webhook.id}"
//const DELETE_WEBHOOK = "/webhooks/{webhook.id}"
//const EXECUTE_WEBHOOK = "/webhooks/{webhook.id}/{webhook.token}"

module.exports = {
  WEBHOOK_CREATE: async function(channel_id, webhook_name, webhook_avatar, token) {
    if(channel_id === undefined){
        throw new TypeError("must provide channel id")
    }
    if(webhook_name === undefined){
        throw new TypeError("must provide a name for the webhook")
    }
    if(webhook_avatar === undefined){
        throw new TypeError("you must upload a image to your directory and declare it in the code. Ex:- ./myimage.png")
    } else if(webhook_avatar.startsWith('https' || 'http')){
        throw new TypeError("you must upload your image to the code and give the path to the image.")
    }

    const content = await datauri(`${webhook_avatar}`);

    let URL = `https://discord.com/api/v9/channels/${channel_id}/webhooks`;
        var requestOptions = {
                    method: 'POST',
                    headers:{
                        "Authorization": `Bot ${token}`,
                        "Content-type": `application/json`
                    },
             body: JSON.stringify({
                "name": `${webhook_name}`,
                "avatar": `${content}`
            })
        };

        fetch(URL, requestOptions)
              .then(response => response.json())
              .then(console.log)
              .then(console.log('Data URL Scheme Encode Complete'))
              .then(console.log('Webhook creation success'))
              .catch(console.error);
},
MODIFY_WEBHOOK: async function(webhook_id, channel_id, webhook_name, webhook_avatar, token){
    if(webhook_id === undefined){
        throw new TypeError('you must provide webhook id you want to modify')
    }
    if(webhook_name === undefined){
        throw new TypeError('you must provide a new name for webhook')
    } else if(webhook_name === "default"){
        webhook_name = "Webhook Package"
    }
    if(webhook_avatar === undefined){
        throw new TypeError('you must provide a new avatar url')
    } else if(webhook_avatar === "default"){
        webhook_avatar = "./node_modules/dwebhook/public/discord.jpg"
    } else if(webhook_avatar.startsWith("https" || "http")){
        throw new TypeError("image url's aren't supported")
    }
    if(channel_id === undefined){
        throw new TypeError('you must provide a new channel id')
    }

    const content = await datauri(`${webhook_avatar}`);

    let URL = `https://discord.com/api/v9/webhooks/${webhook_id}`;
    var requestOptions = {
        method:"PATCH",
        headers:{
            "Authorization": `Bot ${token}`,
            "Content-type": `application/json`
        },
        body: JSON.stringify({
           "name": `${webhook_name}`,
           "avatar": `${content}`,
           "channel_id": `${channel_id}`
        })
    };

    fetch(URL, requestOptions)
       .then(response => response.json())
       .then(console.log)
       .then(console.log('Data URL Scheme Encode Complete'))
       .then(console.log('Modification Success'))
       .catch(console.error)
},
EXECUTE_WEBHOOK: async function(webhook_id, webhook_token, content){
    if(webhook_id === undefined){
        throw new TypeError('you must provide webhook id you want to modify')
    }
    if(webhook_token === undefined){
        throw new TypeError('you must provide the webhook token you want to execute')
    }
    if(content === undefined){
        throw new TypeError('you must provide something to us to send.')
    } else if(content.length > 2000){
        throw new TypeError('character limit is 2000. you cannot exceed it.')
    }

    let URL = `https://discord.com/api/v9/webhooks/${webhook_id}/${webhook_token}`;
    var requestOptions = {
        method:"POST",
        headers:{
            "Content-type": `application/json`
        },
        body: JSON.stringify({
           "content": `${content}`,
        })
    };

    fetch(URL, requestOptions)
       .then(response => response.text())
       .then(console.log('Webhook Sent'))
       .catch(console.error)
},
DELETE_WEBHOOK: async function(webhook_id, token){
    if(webhook_id === undefined){
        throw new TypeError('you must provide webhook id you want to delete')
    }
    if(token === undefined){
        throw new TypeError('you must provide a valid bot token')
    }

    let URL = `https://discord.com/api/v9/webhooks/${webhook_id}`;
    var requestOptions = {
        method:"DELETE",
        headers:{
            "Authorization": `Bot ${token}`
        }
    };

    fetch(URL, requestOptions)
       .then(response => response.text())
       .then(console.log('Webhook Deleted'))
       .catch(console.error)
}
}