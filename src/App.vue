<template>
  <div id="app" class="d-flex flex-column h-100">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="success">
        <b-navbar-brand to="/">homeschool.events</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse"/>

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/submit">Submit</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <main role="main" class="flex-shrink-0">
      <router-view/>
    </main>

    <footer class="footer mt-auto py-3">
      <div class="container">
        <span class="text-muted">Created by <a href="https://e1.lc/tAfSUQ">eventOne</a> - <a href="https://github.com/eventOneHQ/homeschool.events">Open Source</a></span>
        <span class="text-muted float-right">&copy; {{new Date().getFullYear()}} eventOne, Inc.</span>
      </div>
    </footer>
  </div>
</template>

<style>
.footer {
  background-color: #f5f5f5;
}
</style>
