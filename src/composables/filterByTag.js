import { ref } from 'vue'

const filterByTag = (posts) => {

  const tags = ref([])
  const tagSet = new Set()

  posts.forEach(item => {
      item.tags.forEach(tag => tagSet.add(tag))
  })

  tags.value = [...tagSet]

  return { tags }

}

export default filterByTag