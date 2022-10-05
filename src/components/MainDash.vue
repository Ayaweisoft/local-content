<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
import CardSuccess from "./cardSuccess.vue"

export default {
  name: 'my-component',
  components: {
    // VueGoodTable,
    CardSuccess
},
  data(){
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        { id:1, name:"John", age: 20, createdAt: '',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ],
    };
  },
};

</script>
  
  
  
  
<template>
    <div class="p-8 py-8">
        <div class="relative mb-12">
            <input type="text" name="search" id="search" class="bg-[#D9D9D980] w-full py-2 px-4 rounded-full">
            <img src="../assets/search-icon.svg" alt="search" class="absolute -translate-y-1/2 top-1/2 left-5">
            <span class="absolute text-sm -translate-y-1/2 top-1/2 left-16 opacity-70">search for member</span>
        </div>
        <h2 class="text-[#2BC241] text-[27px] font-medium mb-12">List of Registered Members</h2>
        <div>
            <vue-good-table
                :columns="columns"
                :rows="rows" />
        </div>
       <CardSuccess />
    </div>
</template>
  