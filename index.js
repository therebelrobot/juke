const microAPI = require('micro-api')
const {buffer, text, json} = require('micro')

const slackHandler = async (req, res) => {
  console.log('got something!', req)
  const hook = req.body
  console.log(hook)
  return {success:true}
}

module.exports = microAPI([
  {
    method: 'post',
    path: '/slack/receive',
    handler: slackHandler
  }
]);
