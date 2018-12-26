export default {
    state: {
        contacts: [{
            id: 'fger',
            first: "test",
            last: "last",
            staff: "staff",
            company: "Layt",
            phones: [{
                    phone: "1921",
                    tag: "voip"
                },
                {
                    phone: "799345234",
                    tag: "mobail"
                }
            ],
            emails: [{
                    email: "las@fir.rt",
                    tag: "work"
                },
                {
                    email: "df.rf@dfg.hy",
                    tag: "personal"
                }
            ],
            description: " test message",
            address: "Kazan, Ershova 16"
        }, {
            id: '1',
            first: "test",
            last: "last",
            staff: "staff",
            company: "JDL",
            phones: [{
                    phone: "1921",
                    tag: "voip"
                },
                {
                    phone: "799345234",
                    tag: "mobail"
                }
            ],
            emails: [{
                    email: "las@fir.rt",
                    tag: "work"
                },
                {
                    email: "df.rf@dfg.hy",
                    tag: "personal"
                }
            ],
            description: " test message",
            address: "Kazan, Ershova 16"
        }]
    },
    actions: {
        addContact({
            commit
        }, contact) {
            commit('ADD_contact', contact)
        }
    },
    mutations: {
        ADD_contact(state, contact) {
            state.contacts.push(contact)
        }
    },
    getters: {
        getContacts(state) {
            return state.contacts
        },
        getContactByID(state){
            return id => {
                return state.contacts.find(it => it.id == id)
            }
        },
        getContactList(state) {
            return state.contacts.map((item) => {
                return {
                    id: item.id,
                    name: `${item.first} ${item.last}`,
                    phone: item.phones.map((item) => {return ' ' + item.phone }).toString(),
                    email: item.emails.map((item) => {return ' ' + item.email}).toString(),
                    company: item.company,
                    staff: item.staff,
                    value: false
                }
            })
        },
    }
}