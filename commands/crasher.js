const { downloadImage, downloadVideo } = require('../utils/download');


module.exports = {
    name: 'crasher',
    description: 'Create a crashing mp4',
    execute(message, args) {
        message.channel.messages.fetch({limit: 2})
            .then(msgs => {
            if (msgs.last().attachments) {
                let attachedFile = msgs.last().attachments.first().url;
                if (attachIs(attachedFile, "png") || attachIs(attachedFile, "jpeg") || attachIs(attachedFile, "jpg")) {
                    downloadImage(attachedFile); 
                }
                if (attachIs(attachedFile, "mp4")) {
                    downloadVideo(attachedFile);
                }
                    

                // Im not a timeout because I can't get my code to properly wait for the bash script to finish
                // Im not sure if i'm doing callbacks wrong
                // I've tried much with no avail trying callback's and promises
                setTimeout(function(){ 
                    message.channel.send({
                        files: [{
                            attachment: 'crashers/crashy.mp4',
                            name: 'coolfile.mp4'
                            }]
                        })
                        .then()
                        .catch(console.error);
                    }, 3000);
                }
        })
        .catch(console.error);
    }
}


function attachIs(url, fileFormat) {
    //True if this url has fileFormat format.
    return url.indexOf(fileFormat, url.length - fileFormat.length /*or 3*/) !== -1;
}
