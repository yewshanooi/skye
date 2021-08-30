const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('deafen')
		.setDescription('Deafen the selected user with or without a reason')
        .addUserOption(option => option.setName('user').setDescription('Select a user').setRequired(true))
		.addStringOption(option => option.setName('reason').setDescription('Enter a reason')),
	cooldown: '25',
    guildOnly: true,
    execute (interaction) {
        if (!interaction.member.permissions.has('DEAFEN_MEMBERS')) return interaction.reply('Error: You have no permission to use this command.');

            const memberField = interaction.options.getMember('user');
                if (memberField.user.bot === true) return interaction.reply('Error: You cannot deafen a bot.');
				if (memberField.permissions.has('DEAFEN_MEMBERS')) return interaction.reply('Error: This user cannot be deafen.');

                const Guild = interaction.client.guilds.cache.get(interaction.guild.id);
                const Member = Guild.members.cache.get(memberField.user.id);
                    if (!Member.voice.channel) return interaction.reply('Error: This user is currently not in a voice channel.');

            let reasonField = interaction.options.getString('reason');
                if (!reasonField) {
                    reasonField = 'None';
                }

        const embed = new MessageEmbed()
			.setTitle('Deafen')
			.addField('User', `${memberField}`)
            .addField('ID', `\`${memberField.user.id}\``)
			.addField('By', `\`${interaction.user.tag}\``)
			.addField('Reason', `\`${reasonField}\``)
			.setTimestamp()
            .setColor('#FF0000');

        interaction.reply({ embeds: [embed] }).then(memberField.voice.setDeaf(true));
	}
};