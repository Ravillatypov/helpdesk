<template>
  <v-card style="width: 100%;">
    <v-card-title>Контакты
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="contacts" :search="search">
      <template slot="items" slot-scope="props">
        <td @click="view(props.item.id)">{{ props.item.name }}</td>
        <td @click="view(props.item.id)">{{ props.item.email }}</td>
        <td @click="view(props.item.id)">{{ props.item.phone }}</td>
        <td @click="view(props.item.id)">{{ props.item.company }}, {{ props.item.job }}</td>
        <td>
          <v-btn icon small @click="edit(props.item.id)">
            <v-icon>edit</v-icon>
          </v-btn>
        </td>
      </template>
      <v-alert
        slot="no-results"
        :value="true"
        color="error"
        icon="warning"
      >По вашему запросу "{{ search }}" ничего не найдено</v-alert>
    </v-data-table>
    <contact-edit :cid="currentid" :opened="editDialog" v-on:close="editDialog=false"></contact-edit>
    <contact-view
      :cid="currentid"
      :opened="viewDialog"
      v-on:close="viewDialog=false"
      v-on:edit="edit(currentid)"
    ></contact-view>
  </v-card>
</template>


<script>
import contactEdit from "./ContactEdit.vue";
import contactView from "./ContactView.vue";
export default {
  data() {
    return {
      search: "",
      currentid: "",
      editDialog: false,
      viewDialog: false,
      headers: [
        {
          text: "Имя",
          align: "left",
          value: "name"
        },
        { text: "почта", value: "email" },
        { text: "номера", value: "phone" },
        { text: "компания", value: "company" },
        { text: "действия", value: "false" }
      ]
    };
  },
  methods: {
    view(id) {
      console.log("view");
      console.log(id);
      this.currentid = id;
      this.editDialog = false;
      this.viewDialog = true;
    },
    edit(id) {
      console.log("edit");
      console.log(id);
      this.currentid = id;
      this.editDialog = true;
      this.viewDialog = false;
    }
  },
  computed: {
    contacts() {
      return this.$store.getters.getContactList;
    }
  },
  components: {
    "contact-view": contactView,
    "contact-edit": contactEdit
  }
};
</script>
