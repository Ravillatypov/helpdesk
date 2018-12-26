<template>
  <v-card v-if="contact">
    <v-card-title>
      <h2>{{contact.first + ' ' + contact.last }}</h2>
      <v-spacer></v-spacer>
      <!-- <v-btn flat icon>
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn flat icon @click="opened=false">
        <v-icon>close</v-icon>
      </v-btn> -->
    </v-card-title>
    <v-list two-line>
      <v-list-tile v-for="(phone,i) in contact.phones" :key="phone.phone">
        <v-list-tile-action>
          <v-icon v-show="i==0" color="indigo">phone</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{phone.phone}}</v-list-tile-title>
          <v-list-tile-sub-title>{{phone.tag}}</v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-icon>chat</v-icon>
        </v-list-tile-action>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon color="indigo">business</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{contact.company}}</v-list-tile-title>
          <v-list-tile-sub-title>{{contact.staff}}</v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action></v-list-tile-action>
      </v-list-tile>

      <v-divider inset></v-divider>

      <v-list-tile v-for="(email,i) in contact.emails" :key="email.email">
        <v-list-tile-action>
          <v-icon v-show="i==0" color="indigo">mail</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{email.email}}</v-list-tile-title>
          <v-list-tile-sub-title>{{email.tag}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile v-show="contact.description.trim().length > 0">
        <v-list-tile-action>
          <v-icon color="indigo">note</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{contact.description}}</v-list-tile-title>
          <v-list-tile-sub-title></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-divider inset></v-divider>

      <v-list-tile v-show="contact.address.trim().length > 0">
        <v-list-tile-action>
          <v-icon color="indigo">location_on</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{contact.address}}</v-list-tile-title>
          <v-list-tile-sub-title></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    contact () {
      const id = this.id
      return this.$store.getters.getContactByID(id)
    }
  }
};
</script>
