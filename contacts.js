const path = require("path")
const fs = require("fs/promises")
const contactsPath = path.join(__dirname, "/db/contacts.json")
const { v4 } = require("uuid")

async function allListContacts() {
    try {
        const data = await fs.readFile(contactsPath)
        const contacts = JSON.parse(data)
        return contacts
    } catch (error) {
        console.log(error.message)
    }
}

async function getContactById(id) {
    try {
        const contacts = await allListContacts()
        const selectContact = contacts.find((item) => item.id === id)
        if (!selectContact) {
            throw new Error(`Contact with id=${id} not found`)
        }
        return selectContact
    } catch (error) {
        console.log(error.message)
    }
}

async function removeContact(contactId) {
    try {
        const contacts = await allListContacts()
        const idx = contacts.findIndex((item) => item.id === contactId)
        if (idx === -1) {
            throw new Error(`Contact with id=${contactId} not found`)
        }
        const newContacts = contacts.filter((item) => item.id !== contactId)
        const contactsString = JSON.stringify(newContacts)
        await fs.writeFile(contactsPath, contactsString)
        return contacts[idx]
    } catch (error) {
        throw error
    }
}

async function addContact(name, email, phone) {
    try {
        const contacts = await allListContacts()
        const newContact = { id: v4(), name, email, phone }
        contacts.push(newContact)
        const contactsString = JSON.stringify(contacts)
        await fs.writeFile(contactsPath, contactsString)
        return newContact
    } catch (error) {
        throw error
    }
}

module.exports = {
    allListContacts,
    getContactById,
    removeContact,
    addContact,
}
