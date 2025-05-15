<script setup lang="ts">
import { ref,onMounted } from "vue";

interface Prelation{
  id : number
  name: string
  caption: string
}
const prelations  = ref<Prelation[]>([])
const fetchPrelations = async () => {
  const response = await fetch('/api/prelations')
  const data = await response.json()
  prelations.value = data 
}

onMounted(() => {
  fetchPrelations()
})
</script>

<template>
  <main>
    <div>OK</div>
    <div>
    <ul>
      <li v-for="prelation in prelations" :key="prelation.id">
        
      {{ prelation.name }} - {{ prelation.caption | currency }}</li>
    </ul>
    </div>
  </main>
</template>
