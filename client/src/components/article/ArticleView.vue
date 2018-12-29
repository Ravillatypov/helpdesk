<template>
  <div v-if="article">
    <h1>
      {{article.title}}
      <v-btn flat icon :to="{name: 'article-edit', params:{id: article.id}}">
        <v-icon>edit</v-icon>
      </v-btn>
    </h1>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>{{article.author}}, {{article.updated}}</v-flex>
        <v-flex v-html="article.body" xs12 sm8 md4></v-flex>
        <v-flexxs12 sm8 md4>
          <v-chip
            outline
            color="teal"
            text-color="white"
            v-for="tag in article.tags"
            :key="tag"
          >{{ tag }}</v-chip>
        </v-flexxs12>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: { id: { type: String, default: "" } },
  computed: {
    article() {
      let art;
      try {
        art = this.$store.getters.getArticleByID(this.id);
      } catch (err) {
        console.log(err);
        return false;
      }
      return art;
    }
  }
};
</script>