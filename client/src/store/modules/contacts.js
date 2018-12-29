export default {
    state: {
        contacts: []
    },
    actions: {
        deleteContact({
            commit
        }, contact) {
            commit('DELETE_contact', contact)
        },
        editContact({
            commit
        }, contact) {
            commit('UPDATE_contact', contact)
        }
    },
    mutations: {
        UPDATE_contact(state, contact) {
            if (contact.id.length > 0) {
                const index = state.contacts.findIndex(v => v.id == contact.id)
                if (index == -1) {
                    contact.id = Math.random().toString()
                    state.contacts.push(contact)
                } else {
                    state.contacts[index] = contact
                }
            } else {
                contact.id = Math.random().toString()
                state.contacts.push(contact)
            }
            console.log(state.contacts)
        },
        DELETE_contact(state, contact) {
            const index = state.contacts.findIndex(v => v.id == contact.id)
            if (index >= 0) state.contacts.splice(index, 1)

        }
    },
    getters: {
        getContacts(state) {
            return state.contacts
        },
        getContactByID(state) {
            return id => {
                const index = state.contacts.findIndex(it => it.id == id)
                if (index < 0) throw 'not found'
                else
                return state.contacts[index]
            }
        },
        getContactList(state) {
            return state.contacts.map((item) => {
                return {
                    id: item.id,
                    name: item.name,
                    phone: item.phones.map((it) => {
                        return ' +7' + it.val
                    }).toString(),
                    email: item.mails.map((it) => {
                        return ' ' + it.val
                    }).toString(),
                    company: item.company,
                    job: item.job,
                    value: false
                }
            })
        },
    }
}