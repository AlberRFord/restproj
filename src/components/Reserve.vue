<template>
  <Header />
  <h1>Hello {{ name }}, Welcome on Reserving a table page</h1>
  <small
    >Every restaurant has the number of tables equal 100, the number of the
    table you want to reserve, will be between 1 and 100
  </small>
  <div class="Reserving">
    <input
      type="text"
      v-model="numberOfTable"
      placeholder="Enter the number of the table"
    />
    <button v-on:click="reserveATable">Reserve</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name : 'Reserve',
  data() {
    return {
      numberOfTable: "",
    };
  },
  methods: {
    async reserveATable() {
      let result = await axios.post("http://localhost:3000/reserves", {
        name: this.name,
        number: this.numberOfTable,
      });
      let res = await axios.patch("http://localhost:3000/restaurant",{
         tablesnum: this.tablesnum--
      })
      console.warn(result);
      console.warn(res);
      if (result.status ==200){
        localStorage.setItem("user-info", JSON.stringify(res.data));
      }
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }

    
    },
    
  },
};
</script>