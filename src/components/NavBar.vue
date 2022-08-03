<template>
<div>
  <b-navbar toggleable="lg" type="dark" id="navbar">
    <b-navbar-brand>Curriculum Vitae</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav id="navBar">
        <b-nav-item href="/home">Inicio</b-nav-item>
        <b-nav-item href="#SobreMi">Sobre mi</b-nav-item>
        <b-nav-item href="/">Educación</b-nav-item>
        <b-nav-item href="/experiencia">Experiencia</b-nav-item>
        <b-nav-item href="/trabajos">Trabajos</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="/">EN</b-dropdown-item>
          <b-dropdown-item href="/">ES</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    name : 'NavBar'
}
</script>

<style>
#navbar{
    background-color: rgba(0, 0, 0, 0.5);
}

#navBar{transition: 0.3s all;}
</style>