module.exports = {
  tag: ["прайс"],
  button: ["price"],
  func: async(context, { _user, vkcoin }) => {
  	await context.send(`
[ ✔ ] ${_user.name}, ЖДИТЕ!
`);
  }
};