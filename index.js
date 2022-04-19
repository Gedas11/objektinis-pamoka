import {Animals, Cars} from './classes/animals.js'
import Helper from './classes/helper.js'

const Car = new Cars('skoda', 'fabia') //instancija
console.log(Helper.adresas)
console.log(Helper.mutiplayer(20,30))


Car.setParam('mazda')
console.log(Animals.grupe)

console.log(Car.returnLine())


