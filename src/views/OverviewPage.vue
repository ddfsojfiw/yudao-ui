<template>
  <div>
    <!-- 右上角登录链接 -->
    <div class="top-right">
      <router-link to="/login">登录</router-link>
    </div>
    <!-- 总览页面内容 -->
    <h1>项目总览</h1>
    <p>这里展示项目的总体信息，无需登录即可查看。</p>
  </div>
</template>


<script setup lang="ts">
// 可以添加总览页面的逻辑
</script>

<style scoped>
.top-right {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>