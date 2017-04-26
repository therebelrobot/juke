require('dotenv').config()

import express from 'express'
import slack from 'slack-express'

import * as commands from './commands'
console.log(commands)
for (let c in commands) {
  if (commands[c]) {
    const command = commands[c]
    slack.slash(command.command, command.method)
  }
}

const app = express()
app.use('/', slack)
// app.get('/', (req, res)=> res.end('index page'))
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))
