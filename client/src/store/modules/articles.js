export default {
    state: {
        articles: []
    },
    actions: {
        deleteArticle({
            commit
        }, article) {
            commit('DELETE_article', article)
        },
        editArticle({
            commit
        }, article) {
            commit('UPDATE_article', article)
        },
        addComment({
            commit,
            store
        }, comment) {
            let art
            try {
                art = store.getArticleByID(comment.article)
            } catch (error) {
                console.log(error)
                return
            }
            commit('UPDATE_article', art)
        }
    },
    mutations: {
        UPDATE_article(state, article) {
            if (article.id.length > 0) {
                const index = state.articles.findIndex(v => v.id == article.id)
                if (index == -1) {
                    article.id = Math.random().toString()
                    state.articles.push(article)
                } else {
                    state.articles[index] = article
                }
            } else {
                article.id = Math.random().toString()
                state.articles.push(article)
            }
            console.log(state.articles)
        },
        DELETE_article(state, article) {
            const index = state.articles.findIndex(v => v.id == article.id)
            if (index >= 0) state.articles.splice(index, 1)

        }
    },
    getters: {
        getarticles(state) {
            return state.articles
        },
        getArticleByID(state) {
            return id => {
                const index = state.articles.findIndex(it => it.id == id)
                if (index < 0) throw 'not found'
                else
                    return state.articles[index]
            }
        },
        getCommentsByID(state) {
            return id => {
                const index = state.articles.findIndex(it => it.id == id)
                if (index < 0) throw 'not found'
                else
                    return state.articles[index].comments
            }
        },
        getArticleList(state) {
            return state.articles.map((item) => {
                return {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    author: item.author,
                    updated: item.updated,
                    tags: item.tags,
                    value: false
                }
            })
        },
    }
}