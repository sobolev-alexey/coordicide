# Firebase functions

Firebase functions for IOTA Documentation

## Install Firebase CLI

Before you can install the Firebase CLI, you will need to install `Node.js` on your machine. Once you've installed `Node.js`, you can install the Firebase CLI using `npm` by running the following command:

```shell
npm install -g firebase-tools
```

## Install dependencies

Install dependencies listed in `functions` package.json files

```shell
cd functions
yarn
```

## Build project

Project is written in TypeScript, so you'll need to build it before deploying. This will create a new folder `lib` under `functions`.

```shell
cd functions
yarn build
```

## Testing

To test this locally, run

```shell
firebase functions:shell
```

Then call a function with parameters
`submitComment.post('/submitComment').form({})`

## Deploy fo Firebase

1. Log in to Firebase (for the first time use). Follow instructions on the screen.

```shell
firebase login
```

2. Deploy

```shell
firebase deploy --project iota-documentation
```

## Handling function timeouts

Default timeout can be changed here <https://console.cloud.google.com/functions/list>
After you select your function and then press "Edit" it is located under the "More" drop-down at the bottom of the page. The current max is 540 seconds.
Read more <https://firebase.google.com/docs/functions/manage-functions#set_timeout_and_memory_allocation>
