<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="mt-2"></p>
        <div class="jumbotron text-center">
          <h1 class="display-4">homeschool.events</h1>
          <p class="lead">A database of homeschool events.</p>

          <div class="form-group">
            <input
              v-model="searchText"
              type="text"
              class="form-control"
              id="search"
              placeholder="Search..."
            >
          </div>
        </div>

        <b-table
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :fields="fields"
          :items="filteredList"
        >
          <!-- A custom formatted column -->
          <template slot="name" slot-scope="data">
            <a :href="data.item.url">{{data.item.name}}</a>
          </template>

          <template
            slot="startDate"
            slot-scope="data"
          >{{data.item.startDate | moment('MMMM Do YYYY')}}</template>

          <template slot="endDate" slot-scope="data">{{data.item.endDate | moment('MMMM Do YYYY')}}</template>
        </b-table>
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
      events,
      sortBy: 'startDate',
      sortDesc: false,
      fields: [
        {
          label: 'Event',
          key: 'name',
          sortable: true
        },
        {
          label: 'Type',
          key: 'type',
          sortable: true
        },
        {
          label: 'Start Date',
          key: 'startDate',
          sortable: true
        },
        {
          label: 'End Date',
          key: 'endDate',
          sortable: true
        },
        {
          label: 'City',
          key: 'location.city',
          sortable: true
        },
        {
          label: 'State',
          key: 'location.state',
          sortable: true
        }
      ]
    }
  },
  computed: {
    filteredList () {
      return this.events.filter(event => {
        const includes = text => {
          if (text) {
            return text.toLowerCase().includes(this.searchText.toLowerCase())
          }
          return false
        }

        const state = states.find(
          state => state.abbreviation === event.location.state
        )

        return (
          includes(event.name) ||
          includes(event.description) ||
          includes(event.location.city) ||
          includes(state.abbreviation) ||
          includes(state.name)
        )
      })
    }
  }
}
</script>
