<template>
  <div class="post-list">
    <div v-for ="post in posts" :key="post.id">
       <Post :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import Post from './Post.vue'

export default {
  props: ['posts'],
  components: { Post },
  setup(props) {
      onMounted(() => console.log('mounted'))
      onUnmounted(() => console.log('unmounted'))
      onUpdated(() => console.log('updated'))
  }
}
</script>

<style>

</style>