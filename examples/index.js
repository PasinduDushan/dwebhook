const { WEBHOOK_CREATE, MODIFY_WEBHOOK, EXECUTE_WEBHOOK, DELETE_WEBHOOK } = require('dwebhook')
const token = 'your token goes here'

//Use each function one at a time

// Creating a webhook
//When you create a webhook you will get a JSON response in the console. Please copy your webhook id and token in somewhere safe because you cannot copy webhook url since you created it using API
// WEBHOOK_CREATE("765640191007784970", "My first webhook", "./example.png", token)
WEBHOOK_CREATE("channel_id", "name for your webhook", "path to your image", "your discord bot token")

// Modifying a webhook
// You can type "default" in the webhook_name and webhook_image to change the name and image to the default settings
// your image have to go like this "./myimage.png". Supported types are jpg, png and jpeg
//MODIFY_WEBHOOK("873893171598348299", "765640191007784970", "New webhook", "./newimage.png", token)
MODIFY_WEBHOOK("your webhook_id", "channel_id", "new webhook name", "path to new webhook image", "your discord bot token")

//Sending something using webhook
//Webhook token is not your bot token
//Webhook content character limit is 2000
//EXECUTE_WEBHOOK("873893171598348299", "7I2RXkxqjBdy7j3cslgEZ3rJ_9M1T-1wEZYccjokJyDkpv6dvrGk5WgFVS_L_Mm-hi-s", "Your message")
EXECUTE_WEBHOOK("webhook_id", "webhook_token", "Your message goes here")

//Deleting a webhook
//DELETE_WEBHOOK("873893171598348299")
DELETE_WEBHOOK("webhook_id")