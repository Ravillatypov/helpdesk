<template>
  <v-card>
    <v-card-title class="grey lighten-4 py-4 title">{{title}}</v-card-title>
    <v-container grid-list-sm class="pa-4">
      <v-layout row wrap>
        <v-flex xs12 align-center justify-space-between>
          <v-text-field prepend-icon="person" placeholder="ФИО" v-model="contact.fio"></v-text-field>
        </v-flex>
        <v-flex xs6>
          <v-text-field prepend-icon="business" placeholder="компания" v-model="contact.company"></v-text-field>
        </v-flex>
        <v-flex xs6>
          <v-text-field placeholder="должность" v-model="contact.job"></v-text-field>
        </v-flex>
        <v-flex xs10 v-for="(mail) in contact.mails" :key="mail">
          <v-text-field prepend-icon="mail" placeholder="Email"></v-text-field>
        </v-flex>
        <v-flex xs10 v-for="(phone) in contact.phones" :key="phone">
          <v-text-field
            type="tel"
            prepend-icon="phone"
            placeholder="(999) 111-22-33"
            mask="(###) ###-##-##"
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-textarea prepend-icon="notes" placeholder="Notes"></v-textarea>
        </v-flex>
      </v-layout>
    </v-container>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat color="primary" @click="cancel()">Cancel</v-btn>
      <v-btn flat @click="save()">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    id: { type: String, required: false },
    isnew: { type: Boolean, required: true }
  },
  data() {
    return {
      contact: {},
      title: ""
    };
  },
  created() {
    if (this.isnew) {
      this.contact = {
        mails: ["1"],
        phones: [""]
      };
      this.title = "Новый контакт";
    } else {
      const IDs = this.id;
      this.contact = this.$store.getters.getContactByID(IDs);
      this.title = this.contact.fio;
    }
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    save() {
      this.$emit("cancel");
    },
    addMail() {
      this.contact.mails.push("");
    },
    addPhone() {
      this.contact.phones.push("");
    },
    removeMail(index) {
      this.contact.mails.splice(index, 1);
      if (this.contact.mails.length === 0) this.contact.push("");
    },
    removePhone(index) {
      this.contact.phones.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.inline__block {
  display: inline-block;
}
</style>
