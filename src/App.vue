<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="success">
        <b-navbar-brand to="/">homeschool.events</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse" />

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/submit">Submit</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view/>
  </div>
</template>

<style>

</style>
