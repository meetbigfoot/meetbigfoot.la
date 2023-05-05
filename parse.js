const fs = require('fs')
const Papa = require('papaparse')

fs.readFile('./la-cards.csv', 'utf-8', (err, data) => {
  if (err) console.error(err)
  else {
    const parsedData = Papa.parse(data, { header: true })
    const filteredData = parsedData.data.map(row => ({
      category: row.Category,
      date: row.Date,
      location: row.Location,
      photo: row.Photo,
      title: row.Title,
      url: row.URL,
    }))
    fs.writeFileSync('cards.json', JSON.stringify(filteredData))
  }
})
