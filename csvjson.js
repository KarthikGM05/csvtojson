const fs = require('fs')
const ctoj = require('csvtojson')
const csvFilePath = './customer-data.xls'

ctoj().fromFile(csvFilePath).then((jsonObj) => {
    fs.writeFile('customer-data.json', JSON.stringify(jsonObj), function (error) {
        if (error)
            return console.error(error)
      })
})