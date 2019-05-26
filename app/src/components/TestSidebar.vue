<template>
  <div class="sidebar">
    <test-sidebar-discount />
    <test-sidebar-assistant />
  </div>
</template>

<script>
import TestSidebarDiscount from '@/components/TestSidebarDiscount.vue';
import TestSidebarAssistant from '@/components/TestSidebarAssistant.vue';

export default {
  name: 'TestSidebar',
  components: {
    TestSidebarDiscount,
    TestSidebarAssistant,
  },
};
</script>

<style lang="scss">
@import "~@/assets/sass/shared";

.sidebar {
  background-color: #f7f7f7;
  padding: 20px 26px;
}
</style>
