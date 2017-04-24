import express from 'express'
import slack from 'slack-express'

import * as commands from './commands'
for (let c in commands) {
  if (commands[c]) {
    const command = commands[c]
    slack.slash(command.command, command.method)
  }
}

const app = express()
app.use('/slack/receive', slack)
app.get('/', (req, res)=> res.end('index page'))
app.listen(3777, () => console.log('Listening on port 3337'))
