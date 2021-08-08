# dwebhook

dwebhook is a free open-source package to create, edit, execute or delete discord webhooks. 

## Installation

You can download our package from doing below command.

```bash
npm install dwebhook
```

## Features

```bash
1. Creating webhooks
2. Modifying webhooks
3. Executing webhooks. (Sending messages)
4. Deleting webhooks
```

This package is too new and there can be errors also executing webhooks does not support embeds for now. They will come in a future version.

## Usage

Creating a webhook
```javascript
 const { WEBHOOK_CREATE, MODIFY_WEBHOOK, EXECUTE_WEBHOOK, DELETE_WEBHOOK } = require('dwebhook')

 /* When you create a webhook you will get a JSON response in the console. Please copy your webhook id and webhook token somewhere safe because you cannot copy webhook url since you created it using API */
 //Image cannot be a url. You have to upload your image to the working directory and then give the path to the image
 // WEBHOOK_CREATE("765640191007784970", "My first webhook", "./example.png", token)
 WEBHOOK_CREATE("channel_id", "name for your webhook", "path to your image", "your discord bot token")
```

Modifying a webhook
```javascript
 const { WEBHOOK_CREATE, MODIFY_WEBHOOK, EXECUTE_WEBHOOK, DELETE_WEBHOOK } = require('dwebhook')

 // You can type "default" in the webhook_name and webhook_image to change the name and image to the default settings
 // your image have to go like this "./myimage.png". Supported types are jpg, png and jpeg
 //MODIFY_WEBHOOK("873893171598348299", "765640191007784970", "New webhook", "./newimage.png", token)
MODIFY_WEBHOOK("your webhook_id", "channel_id", "new webhook name", "path to new webhook image", "your discord bot token")
```

Executing a webhook
```javascript
 const { WEBHOOK_CREATE, MODIFY_WEBHOOK, EXECUTE_WEBHOOK, DELETE_WEBHOOK } = require('dwebhook')

  //Webhook token is not your bot token
  //Webhook content character limit is 2000
  /* EXECUTE_WEBHOOK("873893171598348299", "7I2RXkxqjBdy7j3cslgEZ3rJ_9M1T-1wEZYccjokJyDkpv6dvrGk5WgFVS_L_Mm-hi-s", "Your message") */
  EXECUTE_WEBHOOK("webhook_id", "webhook_token", "Your message goes here")
```

Deleting a webhook
```javascript
 const { WEBHOOK_CREATE, MODIFY_WEBHOOK, EXECUTE_WEBHOOK, DELETE_WEBHOOK } = require('dwebhook')

  //DELETE_WEBHOOK("873893171598348299", "7I2RXkxqjBdy7j3cslgEZ3rJ_9M1T-1wEZYccjokJyDkpv6dvrGk5WgFVS_L_Mm-hi-s")
  DELETE_WEBHOOK("webhook_id", "webhook_token")
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
