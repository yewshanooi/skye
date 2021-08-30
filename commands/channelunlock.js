const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { embedColor } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('channelunlock')
		.setDescription('Unlocks the current channel'),
	cooldown: '25',
    guildOnly: true,
    execute (interaction) {
        if (!interaction.member.permissions.has('MANAGE_CHANNELS')) return interaction.reply('Error: You have no permission to use this command.');

        const currentChannel = interaction.channel;

            const embed = new MessageEmbed()
                .setTitle('Channel Unlock')
                .setDescription(`Successfully unlocked channel ${currentChannel}`)
                .setTimestamp()
                .setColor(embedColor);

            interaction.reply({ embeds: [embed] }).then(interaction.guild.roles.cache.forEach(role => {
                currentChannel.permissionOverwrites.create(role, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true
                });
            }));
        // Current channelunlock command will override existing staff & muted role permissions.
	}
};