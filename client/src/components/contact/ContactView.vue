<template>
  <v-dialog v-model="isopened" width="550px">
    <v-card v-if="contact">
      <v-card-title>
        <h2>{{contact.name }}</h2>
        <v-spacer></v-spacer>
        <v-btn flat icon @click="$emit('edit')">
          <v-icon>edit</v-icon>
        </v-btn>
        <v-btn flat icon @click="$emit('close')">
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-title>
      <v-list two-line>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon color="indigo">business</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{contact.company}}</v-list-tile-title>
            <v-list-tile-sub-title>{{contact.job}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider inset></v-divider>
        <v-list-tile v-for="(phone,i) in contact.phones" :key="i+999">
          <v-list-tile-action>
            <v-icon v-show="i==0" color="indigo">phone</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>+7{{phone.val}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider inset></v-divider>
        <v-list-tile v-for="(mail,i) in contact.mails" :key="i+9999">
          <v-list-tile-action>
            <v-icon v-show="i==0" color="indigo">mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{mail.val}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-show="contact.note.length > 0">
          <v-list-tile-action>
            <v-icon color="indigo">note</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{contact.note}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    cid: { type: String, default: "" },
    opened: { type: Boolean, required: true }
  },
  computed: {
    isopened: {
      get: function() {
        return this.opened
      },
      set: function(val) {
        if (!val) this.$emit('close')
      }
    },
    contact() {
      let cont
      try {
        cont = this.$store.getters.getContactByID(this.cid);
      } catch (err) {
        return false;
      }
      return cont;
    }
  }
};
</script>
