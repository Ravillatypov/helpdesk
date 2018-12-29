<template>
  <v-container fluid grid-list-md>
    <v-data-iterator
      :items="articles"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      content-tag="v-layout"
      row
      wrap
    >
      <v-flex slot="item" slot-scope="props" xs12 sm6 md4 lg3>
        <v-card :to="{name: 'article-view', params:{id: props.item.id}}">
          <v-card-title>
            <h4>{{ props.item.title }}</h4>
          </v-card-title>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-tile>
              <v-list-tile>
                <v-list-tile-content>{{ props.item.description }}</v-list-tile-content>
              </v-list-tile>
              <v-divider inset></v-divider>
              <v-list-tile-content>Метки:</v-list-tile-content>
              <v-list-tile-content class="align-end">
                <v-chip
                  outline
                  color="teal"
                  text-color="white"
                  v-for="tag in props.item.tags"
                  :key="tag"
                >{{ tag }}</v-chip>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Автор:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.author }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Обновлен:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.updated }}</v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4
      }
    };
  },
  computed: {
    articles() {
      return this.$store.getters.articles.getArticleList;
    }
  }
};
</script>