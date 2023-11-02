const chalk = require('chalk');

module.exports = client => {
	if (!process.env.DEBUG_CHANNEL_ID) console.log(`${chalk.yellow.bold('[Warning] Missing \'DEBUG_CHANNEL_ID\' field in the .env file.')}`);
	if (!process.env.ERROR_CHANNEL_ID) console.log(`${chalk.yellow.bold('[Warning] Missing \'ERROR_CHANNEL_ID\' field in the .env file.')}`);
	if (!process.env.WARNING_CHANNEL_ID) console.log(`${chalk.yellow.bold('[Warning] Missing \'WARNING_CHANNEL_ID\' field in the .env file.')}`);

	if (!process.env.FORTNITE_API_KEY) console.log(`${chalk.yellow.bold('[Warning] Missing \'FORTNITE_API_KEY\' field in the .env file.')}`);
	if (!process.env.GIPHY_API_KEY) console.log(`${chalk.yellow.bold('[Warning] Missing \'GIPHY_API_KEY\' field in the .env file.')}`);
	if (!process.env.GENIUS_API_KEY) console.log(`${chalk.yellow.bold('[Warning] Missing \'GENIUS_API_KEY\' field in the .env file.')}`);
	if (!process.env.NASA_API_KEY) console.log(`${chalk.yellow.bold('[Warning] Missing \'NASA_API_KEY\' field in the .env file.')}`);
	if (!process.env.NEWS_API_KEY) console.log(`${chalk.yellow.bold('[Warning] Missing \'NEWS_API_KEY\' field in the .env file.')}`);
	if (!process.env.OPENWEATHERMAP_API_KEY) console.log(`${chalk.yellow.bold('[Warning] Missing \'OPENWEATHERMAP_API_KEY\' field in the .env file.')}`);
	if (!process.env.RIOTGAMES_API_KEY) console.log(`${chalk.yellow.bold('[Warning] Missing \'RIOTGAMES_API_KEY\' field in the .env file.')}`);

	console.log(`\nConnected to Discord as ${chalk.bold(`${client.user.username}`)}\nServing ${chalk.bold(`${client.users.cache.size}`)} user(s) and ${chalk.bold(`${client.channels.cache.size}`)} channel(s) in ${chalk.bold(`${client.guilds.cache.size}`)} guild(s)\n`);
};