<script setup>
import axios from "axios";
import JobCard from "@/components/JobCard.vue";
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

defineProps({ limit: Number, showButton: { type: Boolean, default: false } });
const jobs = ref([]);

onMounted(async () => {
  try {
    const { data } = await axios.get("/api/jobs");
    jobs.value = data;
  } catch (e) {
    console.log(e);
  }
});
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobCard
          v-for="jobItem in jobs.slice(0, limit || jobs.length)"
          :key="jobItem.id"
          :jobItem="jobItem"
        />
      </div>
    </div>
  </section>
  <section class="m-auto max-w-lg my-10 px-6" v-if="showButton">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
