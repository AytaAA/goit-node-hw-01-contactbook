const operationsContacts = require("./contacts")

const { Command } = require("commander")
const program = new Command()
program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone")

program.parse(process.argv)

const argv = program.opts()

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            const allListContacts = await operationsContacts.allListContacts()
            console.table(allListContacts)
            break

        case "get":
            const getContact = await operationsContacts.getContactById(Number(id))
            console.table(getContact)
            break

        case "add":
            const add = await operationsContacts.addContact(name, email, phone)
            console.table(add)
            break

        case "remove":
            const del = await operationsContacts.removeContact(Number(id))
            console.table(del)
            break

        default:
            console.warn("\x1B[31m Unknown action type!")
    }
}

invokeAction(argv)
