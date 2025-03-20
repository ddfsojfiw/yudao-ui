<template>
  <!-- <doc-alert title="大屏设计器" url="https://doc.iocoder.cn/report/screen/" /> -->

  <ContentWrap :bodyStyle="{ padding: '0px' }" class="!mb-0">
  <iframe :src="`${src}/#/chart/preview/12`" width="100%" height="500px"></iframe>
  </ContentWrap>

</template>
<script lang="ts" setup>
defineOptions({ name: 'screen' })

const src = ref(import.meta.env.VITE_GOVIEW_URL)
</script>

