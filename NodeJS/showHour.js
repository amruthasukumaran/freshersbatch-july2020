var strftime = require('strftime') // not required in browsers
    var es_ES = {
        days: ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

        AM: 'AM',
        PM: 'PM',
        am: 'am',
        pm: 'pm',
    }
    var strftimeES = strftime.localize(es_ES)
    console.log(strftimeES('%A  %d %B  %Y, %H:%M:%S'))