export const description = `- Stuff will explode.`
export const helpText = `- Make an explosion. No additional parameters accepted`
export default async (args) => {
  if (args.length) return 'what did I tell you?!'
  return '💥'
}
