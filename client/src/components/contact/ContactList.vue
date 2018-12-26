<template>
  <v-card>
    <v-card-title>
      Contacts
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="contacts"
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.email }}</td>
        <td>{{ props.item.phone }}</td>
        <td>{{ props.item.company }}, {{ props.item.staff }}</td>
        <td>
          <router-link :to="{name: 'contactview', params: {id: props.item.id}}"><v-icon small>pageview</v-icon></router-link>
          <router-link :to="{name: 'contactedit', params: {id: props.item.id}}"><v-icon small>edit</v-icon></router-link>
          <router-link :to="{name: 'contactview', params: {id: props.item.id}}"><v-icon small>delete</v-icon></router-link>
        </td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</template>


<script>
export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Name',
            align: 'left',
            value: 'name'
          },
          { text: 'email', value: 'email' },
          { text: 'phone', value: 'phone' },
          { text: 'company, staff', value: 'company' },
          {text: 'actions', value: 'false'}
        ]
      }
    },
      computed: {
        contacts () {
          return this.$store.getters.getContactList
        }
      },
}
</script>
