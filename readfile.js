const fs=require('fs')

fs.readFile('content.txt','UTF-8', (err, data) => {
    if (err) {
        console.log(err);
        return
    }
    else {
        console.log(data)
    }
});

