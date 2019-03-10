class Message {
    constructor() {
        this.messages = [];
    }
    welcome() {
        return '<h1 style="text-align: center">Welcome to my app</h1><h4 style="text-align: center">Safe Journey</h4>';
    }
}
module.exports = new Message();
