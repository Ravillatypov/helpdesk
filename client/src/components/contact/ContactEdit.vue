<template>
  <v-dialog v-model="isopened" width="550px">
    <v-card>
      <v-card-title class="grey lighten-4 py-4 title">{{title}}</v-card-title>
      <v-list two-line>
        <v-list-tile>
          <v-list-tile-content>
            <v-text-field
              style="width: 100%;"
              clearable
              prepend-icon="person"
              placeholder="ФИО"
              v-model="contact.name"
            ></v-text-field>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-text-field
              style="width: 100%"
              prepend-icon="business"
              placeholder="компания"
              clearable
              v-model="contact.company"
            ></v-text-field>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-text-field
              style="width: 100%"
              prepend-icon="work"
              placeholder="должность"
              clearable
              v-model="contact.job"
            ></v-text-field>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-for="(phone,i) in contact.phones" :key="i+999">
          <v-list-tile-content>
            <v-text-field
              v-model="phone.val"
              style="width: 100%"
              type="tel"
              prepend-icon="phone"
              placeholder="(999) 111-22-33"
              mask="(###) ###-##-##"
              clearable
            ></v-text-field>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn v-if="i==0" icon small @click="addPhone()">
              <v-icon>add</v-icon>
            </v-btn>
            <v-btn v-else icon small @click="removePhone(i)">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile v-for="(mail,i) in contact.mails" :key="i+9999">
          <v-list-tile-content>
            <v-text-field
              style="width: 100%"
              prepend-icon="mail"
              placeholder="Email"
              v-model="mail.val"
              clearable
            ></v-text-field>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn v-if="i==0" icon small @click="addMail()">
              <v-icon>add</v-icon>
            </v-btn>
            <v-btn v-else icon small @click="removeMail(i)">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-textarea
              style="width: 100%"
              prepend-icon="notes"
              placeholder="Комментарии"
              v-model="contact.note"
              flat
              no-resize
              rows="3"
              clearable
            ></v-textarea>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="cancel()">отмена</v-btn>
        <v-btn flat @click="save()">{{ action }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
function defaultContact() {
  return {
    id: '',
    name: "",
    company: "",
    job: "",
    mails: [{ val: "" }],
    phones: [{ val: "" }],
    note: ""
  };
}
export default {
  props: {
    cid: { type: String, default: "" },
    opened: { type: Boolean, required: true }
  },
  data() {
    return {
      contact: defaultContact(),
      title: "Новый контакт",
      action: "создать"
    };
  },
  methods: {
    cancel() {
      this.contact = defaultContact();
      this.$emit("close");
    },
    save() {
      this.$store.dispatch("editContact", this.contact);
      this.contact = defaultContact();
      this.$emit("close");
    },
    addMail() {
      this.contact.mails.push({ val: "" });
    },
    addPhone() {
      this.contact.phones.push({ val: "" });
    },
    removePhone(i) {
      this.contact.phones.splice(i, 1);
    },
    removeMail(i) {
      this.contact.mails.splice(i, 1);
    },
    loadContact() {
      if (typeof(this.cid) == 'string' && this.cid.length > 0)
        try {
          this.contact = this.$store.getters.getContactByID(this.cid);
        } catch (err) {
          console.log(err);
          this.contact = defaultContact();
        }
      else this.contact = defaultContact();
    }
  },
  computed: {
    isopened: {
      get: function() {
        return this.opened
      },
      set: function(val) {
        if (!val) this.cancel()
      }
    }
  },
  watch: {
    cid: function(newval, oldval) {
      console.log(`cid old: ${oldval} new: ${newval}`);
      this.loadContact();
      if (this.contact.name.length > 0){
        this.title = this.contact.name
        this.action = "сохранить"
      } else {
        this.title = "Новый контакт"
        this.action = "создать"
      }
    }
  }
};
</script>
