<script setup>  
  import { ref } from 'vue'
  import CardSuccess from "./CardSuccess.vue";

  const modal = ref(null)
  function generateCard(id) {
    modal.value = id
  }

  function closeModal() {
      modal.value = null
  }

  const headers = [
    { text: "ID Number", value: "id_number" },
    { text: "Member Name", value: "name", sortable: true },
    { text: "Date Created", value: "created_at", sortable: true },
    { text: "Status", value: "status", sortable: true },
    { text: "Membership type", value: "type", sortable: true },
    { text: "Actions", value: "actions", sortable: true }
  ];

  const items = [
    { "id_number":1000, "name": "Curry", "created_at":"14-03-2002", "status": "verified", "type": "individual", "actions": "Generate" },
    { "id_number":1001, "name": "James", "created_at":"14-03-2002", "status": "verified", "type": "company", "actions": "Generate" },
    { "id_number":1002, "name": "Jordan", "created_at":"14-03-2002", "status": "verified", "type": "individual", "actions": "Generate" },
    { "id_number":1003, "name": "Nicholas", "created_at":"14-03-2002", "status": "verified", "type": "individual", "actions": "Generate" },
    { "id_number":1004, "name": "Duadei", "created_at":"14-03-2002", "status": "verified", "type": "individual", "actions": "Generate" },
    { "id_number":1005, "name": "Victor", "created_at":"14-03-2002", "status": "verified", "type": "individual", "actions": "Generate" },
    { "id_number":1006, "name": "Dein", "created_at":"14-03-2002", "status": "verified", "type": "individual", "actions": "Generate" },
    { "id_number":1007, "name": "Marvellous", "created_at":"14-03-2002", "status": "verified", "type": "individual", "actions": "Generate" },
  ];
</script>
<template>
  <div class="py-16 p-8 sm:py-8 flex-[2_1_500px] md:flex-[3_1_auto] lg:flex-[4_1_auto]">
    <div class="relative mb-12">
        <input type="text" name="search" id="search" class="bg-[#D9D9D980] w-full py-2 px-4 rounded-full">
        <img src="../assets/search-icon.svg" alt="search" class="absolute -translate-y-1/2 top-1/2 left-5">
        <span class="absolute text-sm -translate-y-1/2 top-1/2 left-16 opacity-70">search for member</span>
    </div>
    <h2 class="text-[#2BC241] text-2xl sm:text-[27px] font-medium mb-12 sm:text-left text-center">List of Registered Members</h2>
    <div>
      <EasyDataTable
        :headers="headers"
        :items="items"
      >
        <template #header-name="header">
          <div class="customize-header">
            {{ header.text }}
          </div>
        </template>
        <template #item-actions="item">
          <div class="customize-item">
            <button @click="generateCard(item.id_number)" class="w-full text-white bg-[#2BC241] py-1 px-2">
              {{ item.actions }}
            </button>
          </div>
        </template>
      </EasyDataTable>  
    </div>
  </div>

  <!-- modal -->
  <CardSuccess :id="modal" v-if="modal" @close="closeModal" />
</template>
  
  
<!-- <template>
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
                :rows="rows"
                :search-options="{
                  enabled: true
                }">
                <template slot="table-row" slot-scope="props">
                  <span v-if="props.column.field == 'age'">
                    <span style="font-weight: bold; color: blue;">{{props.row.age}}</span> 
                  </span>
                  <span v-else>
                    {{props.formattedRow[props.column.field]}}
                  </span>
                </template>
            </vue-good-table>
        </div>
    </div>
</template> -->
  