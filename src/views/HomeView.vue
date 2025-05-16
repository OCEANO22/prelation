<script setup lang="ts">
import {Header} from '@/components/Header.vue'
import {Navbar} from '@/components/Navbar.vue'
import {AboutSection} from '@/components/AboutSection.vue'
import {JobdiskSection} from '@/components/JobdiskSection.vue'
import {ProgramKerjaTable} from '@/components/ProgramKerjaTable.vue'
import {Footer} from '@/components/Footer.vue'
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
    <div>PUBLIC RELATION HUMANIKA</div>
    <div>
    <ul>
      <li v-for="prelation in prelations" :key="prelation.id">
        
      {{ prelation.name }} - {{ prelation.caption | currency }}</li>
    </ul>
    </div>
  </main>
</template>
