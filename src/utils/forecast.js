const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/17ae17408409e68c79f65c4360ca5d53/' + latitude + ',' + longitude

    request({
        url,
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            callback('Unable to connect!', undefined)
        } else if (body.error) {
            callback('Location not found!', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain. The temprature high is ' + body.daily.data[0].temperatureHigh + ' degrees and the temprature low is ' + body.daily.data[0].temperatureLow + ' degrees')
        }
    })
}

module.exports = forecast