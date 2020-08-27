var fs = require('fs');

//fs.writeFileSync('ex5.js', "Hey ho..! Lets go...!!");
fs.readFile('write.txt','utf8', function(err,data){
    fs.writeFile('myText.txt',data, function(err){
        if (err) throw err;
        console.log('The file has been saved!');
    })
})

fs.writeFile('superText.txt',data = 'its a long way to the top....',function(err){
    if (err) throw err;
    console.log('The file has been saved!');
    console.log(data);
})

