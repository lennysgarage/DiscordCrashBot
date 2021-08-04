let http = require('https');
let fs = require('fs');
const { exec } = require('child_process');


module.exports = {
    downloadVideo(url) {
        const file = fs.createWriteStream("downloads/testy.mp4");
        const request = http.get(url, (response) => {
            response.pipe(file)
            .on('finish', () => {
                exec("sh utils/crasher.sh 'downloads/testy.mp4' 'crashers/crashy.mp4'", (err, stdout, stderr) => {
                    console.log(stdout);
                    console.error(stderr);
                    console.error(err);
                }); 
            });
        });
    },

    downloadImage(url) {
        const file = fs.createWriteStream("downloads/testy.png");
        const request = http.get(url, (response) => {
            response.pipe(file)
            .on('finish', () => {
                exec("sh utils/crasherImage.sh 'downloads/testy.png' 'crashers/crashy.mp4'", (err, stdout, stderr) => {
                    console.log(stdout);
                    console.error(stderr);
                    console.error(err);
                }); 
            });
        });
    }
}
