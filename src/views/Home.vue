<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="mt-2"></p>
        <div class="jumbotron text-center">
          <h1 class="display-4">homeschool.events</h1>
          <p class="lead">A database of homeschool events. </p>

          <div class="form-group">
            <input v-model="searchText" type="text" class="form-control" id="search" placeholder="Search...">
          </div>

        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Event</th>
              <th scope="col">Date</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="event in filteredList" :key="event.name">
              <th scope="row">
                <a :href="event.url">{{event.name}}</a>
              </th>
              <td>{{event.startDate | moment('MMMM Do YYYY')}} - {{event.endDate | moment('MMMM Do YYYY')}}</td>
              <td>{{event.location.city}}, {{event.location.state}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { states } from '../states'
import { events } from '../events'

export default {
  name: 'home',
  data: () => {
    return {
      searchText: '',
      events
    }
  },
  computed: {
    filteredList() {
      return this.events.filter(event => {
        const includes = (text) => {
          if (text) {
            return text.toLowerCase().includes(this.searchText.toLowerCase())
          }
          return false
        }

        const state = states.find(state => state.abbreviation === event.location.state)

        return includes(event.name) || includes(event.description) || includes(event.location.city) || includes(state.abbreviation) || includes(state.name)
      })
    }
  }
}
</script>
