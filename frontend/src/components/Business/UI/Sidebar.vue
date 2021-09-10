<template>
  <div >
    <v-card>
      <v-navigation-drawer
        permanent
        expand-on-hover
        class="navigationSidebar"
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                David Brown
              </v-list-item-title>
              <v-list-item-subtitle>david_brows88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item link @click="setUserSelection(1)">
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Products</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="setUserSelection(0)">
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="setUserSelection(2)">
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Customer Service</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  methods:{ 
    setUserSelection(value){
      this.$emit('userSelection', value)
    }
  }
}
</script>

<style scoped>
.navigationSidebar{
  margin-top: 60px;
  min-height: 100vh;
  position: fixed;
}
</style>