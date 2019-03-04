<template>
  <div class="container mt-2">
    <div class="row">
      <div class="col">
        <h1>Submit an event</h1>

        <form id="submitForm" @submit.prevent="submitEvent">
          <div class="form-group">
            <label for="name">Name</label>
            <input v-model="event.name" type="text" class="form-control" id="name" required>
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea v-model="event.description" class="form-control" id="description" rows="3"></textarea>
          </div>

          <div class="form-group">
            <label for="startDate">Start Date</label>
            <datepicker v-model="event.startDate" bootstrap-styling name="startDate" format="MMM dd yyyy" required></datepicker>

          </div>
          <div class="form-group">
            <label for="endDate">End Date</label>
            <datepicker v-model="event.endDate" bootstrap-styling name="endDate" format="MMM dd yyyy" required></datepicker>
          </div>

          <div class="form-group">
            <label for="city">City</label>
            <input v-model="event.city" type="text" class="form-control" id="city" required>
          </div>
          <div class="form-group">
            <label for="state">State</label>
            <select v-model="event.state" class="form-control" id="state" required>
              <option v-for="state in states" :key="state.abbreviation" v-bind:value="state.abbreviation">{{state.name}}</option>
            </select>
          </div>

          <button type="submit" class="btn btn-raised btn-success">Submit</button>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

import { states } from '../states'

export default {
  name: 'submit',
  components: {
    Datepicker
  },
  methods: {
    submitEvent () {
      // console.log(this.event)
    }
  },
  data: () => {
    return {
      states,
      event: {
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        city: '',
        state: ''
      }
    }
  }
}
</script>
