const { download } = require('../utils/download');


module.exports = {
    name: 'crasher',
    description: 'Create a crashing mp4',
    execute(message, args) {
        // I may be in callback hell
        message.channel.messages.fetch({limit: 2})
            .then(msgs => {
                if (msgs.last().attachments) {
                   // if (msgs.last().attachments.first().name === `mp4`){

                    download(msgs.last().attachments.first().url); 

                   setTimeout(function(){ 
                        message.channel.send({
                            files: [{
                                attachment: 'crashers/crashy.mp4',
                                name: 'coolfile.mp4'
                                }]
                            })
                            .then()
                            .catch(console.error);
                        }, 2000);

                    
                    
            }
        })
        .catch(console.error);
    }
}
