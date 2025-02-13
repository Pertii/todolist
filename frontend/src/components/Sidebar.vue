<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li>
          <router-link to="/today">📅 La mia giornata</router-link>
        </li>
        <li>
          <router-link to="/important">⭐ Importante</router-link>
        </li>
        <li>
          <router-link to="/other">📂 Altre attività</router-link>
        </li>
        <li>
          <router-link to="/about">📂 About</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background: #f4f4f4;
  padding: 20px;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  margin: 15px 0;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

nav a.router-link-active {
  color: blue;
}
</style>
