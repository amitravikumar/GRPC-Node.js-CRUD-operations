const client = require('./client')
client.list({}, (error, notes) => {
    if (!error){
        console.log('Notes fetched Successfully')
    }else{
        console.error(error)
    }
})