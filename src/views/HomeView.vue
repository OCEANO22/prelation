<script setup lang="ts">
import Header from '../components/icons/Header.vue'
import Navbar from '../components/icons/Navbar.vue'
import AboutSection from '../components/icons/AboutSection.vue'
import JobdiskSection from '@/components/JobdiskSection.vue'
import ProgramKerjaTable from '@/components/ProgramKerjaTable.vue'
import Footer from '@/components/Footer.vue'
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
      <div>{{ prelation.name }}</div>
      <div>{{ prelation.caption }}</div>
      </li>
    </ul>
    </div>
  </main>
</template>
