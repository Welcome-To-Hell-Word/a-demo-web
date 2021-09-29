<template>
  <div id="ArticleList">
    <div id="ArticleListForm">
      <div class="ArticleCard" v-for="item in ArticleListForm" :key="item.id">
        <div class="ArticleCardPhoto">
          <img class="ArticleCardPhotoImg" :src="item.photo" v-on:click="GetById(item.id)">
        </div>
        <div class="ArticleCardInfo">
          <div v-on:click="GetById(item.id)"><a>{{item.title}}</a></div>
          <div>{{item.username}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      ArticleListForm: [
        {
          id: '0001',
          title: 'title01',
          photo: 'http://127.0.0.1:10001/master-spark/file/★.jpg',
          username: 'admin01'
        },
        {
          id: '0002',
          title: 'title02',
          photo: 'http://127.0.0.1:10001/master-spark/file/★.jpg',
          username: 'admin02'
        },
        {
          id: '0003',
          title: 'title03',
          photo: 'http://127.0.0.1:10001/master-spark/file/★.jpg',
          username: 'admin03'
        }
      ]
    }
  },
  methods: {
    GetById (id) {
      this.$axios.get('/article/GetById/' + id).then(result => {
        window.console.log(result.data)
      }).catch(result => {
        window.console.error(result)
      })
    }
  }
}
</script>

<style>
#ArticleList{
  width: 100%;
  height: 70%;
}
#ArticleListForm{
  width: 100%;
  height: 100%;
}
.ArticleCard{
  width: 200px;
  height: 300px;
  float: left;
  text-align: center;
}
.ArticleCardPhoto{
  width: 150px;
  height: 200px;
}
.ArticleCardPhotoImg{
  width: 150px;
  height: 200px;
}
</style>
