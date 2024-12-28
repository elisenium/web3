const mongoose = require('mongoose')
const args = process.argv.slice(2);

// Check if required args are present
if (args.length < 3) {
    console.log('Missing required arguments!\n\nUsage: npm start <server> <username> <password> [<name> <number>]\n')
    process.exit(1)
}

const server = args.shift()
const username = args.shift()
const password = args.shift()

const url =
    `mongodb+srv://${username}:${password}@${server}/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const contactSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Contact = mongoose.model('Contact', contactSchema)

if (process.argv.length === 3) {
    Contact.find({}).then(result => {
        console.log('phonebook:')
        result.forEach(contact => {
            console.log(contact.name, contact.number)
        })
        mongoose.connection.close()
    })
}
else {
    const contact = new Contact({
        name: process.argv[3],
        number: process.argv[4]
    })

    contact.save().then(result => {
        console.log(`added ${contact.name} number ${contact.number} to phonebook`)
        mongoose.connection.close()
    })
}

