const client = require("../index");

client.on("messageCreate", async (message) => {
    if (message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`)
        return message.channel.send({
            content: `Hi ${message.author} I'm a powerful Moderation Discord bot powered by SATC`
        })

    if (
        message.author.bot ||
        !message.guild
    )
        return;
});
