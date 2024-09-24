<template>
  <nav class="toolbar">
    <router-link to="/doctores" class="toolbar-link" @mouseover="highlight" @mouseout="unhighlight">Doctores</router-link>
    <a href="#" class="toolbar-link" @mouseover="highlight" @mouseout="unhighlight">Citas</a>
    <router-link to="/hospitales" class="toolbar-link" @mouseover="highlight" @mouseout="unhighlight">Hospitales/Clínicas</router-link>
    <a href="#" class="toolbar-link" @mouseover="highlight" @mouseout="unhighlight">Productos recomendados</a>
  </nav>
</template>

<script>
export default {
  methods: {
    highlight(event) {
      event.target.style.color = 'blue';
    },
    unhighlight(event) {
      event.target.style.color = 'white';
    }
  }
}
</script>
