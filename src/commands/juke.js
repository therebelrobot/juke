import * as boom from './boom'

const jCommands = {
  boom
}

export const command = '/juke'
export const method = async (payload, message) => {
  console.log(payload)
  let args = payload.message.text

  if (args.indexOf(' ') > -1) args = args.split(' ')
  else args = [args]

  const jCommand = args.shift()
  console.log(jCommand, args)

  let results = ''
  if (jCommand === 'help') {
    if (args.length) {
      const helpCommand = args.shift()
      if (!jCommands[helpCommand]) results += `Sorry, the ${helpCommand} command doesn't exist`
      else {
        results = `/juke ${helpCommand} ${jCommands[helpCommand].helpText}
`
      }
    } else {
      results += `
Available commands for juke:
`
      for (let commandName in jCommands) {
        const helpCommand = jCommands[commandName]
        results += `/juke ${commandName} ${helpCommand.description}
`
      }
    }
  }
  else if (!jCommands[jCommand]) return message({text:'Sorry, not sure I caught that. Please try again.'})
  else results = await jCommands[jCommand].default(args)

  message({text:results})
}
