<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/tasks">Task List</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 10px;
  text-decoration: none;
  color: #42b983;
}
</style>
