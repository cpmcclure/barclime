const env = require('env-var');
const sensor = require("node-dht-sensor");
const sensorModel = env.get('SENSOR_MODEL').default('11').asIntPositive()
sensor.setMaxRetries(10);
sensor.initialize(sensorModel, 4);


module.exports = {
    getTemperature: () => {
        return new Promise((resolve, reject) => {
            sensor.read(sensorModel, 4, function(err, temperature, humidity) {
                if (!err) {
                    let tempFahrenheit = (temperature * (9/5)) + 32 
                    resolve({temperature: tempFahrenheit, humidity: humidity})
                } else {
                    resolve({temperature: '-', humidity: '-'})
                }
            });
        })
        
    }
}