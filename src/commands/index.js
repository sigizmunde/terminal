// Intl is browser's built-in module
const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
});

const commands = {
    help() {
        const command_list = Object.keys(commands);
        const helpList = formatter.format(command_list);
        this.echo(`List of available commands: ${helpList}`);
    }
};

export default commands;