const updatePresence = async (client, state) => {
    // Set the presence
    const activity = {
        name: 'Protecting SATC',
        type: 'STREAMING',
        details: 'discord.gg/inviteCode',
        state: state,
        timestamps: {
            start: Date.now(),
        },
     };
    client.user.setPresence({
        pid: process.pid,
        activity: activity,
        status: 'streaming',
    });
};
