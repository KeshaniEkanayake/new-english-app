<template>
    <div class="background">
      <SideNavigation/>

      <div class="container">
        <!-- first row -->
        <div class="row">
          <CommentShape>
            <!-- Add dynamic text content here with a line break -->
            <div v-html="dynamicText"></div>
          </CommentShape>
        </div>


        <!-- second row -->
        <div class="row">
          <div class="nested-grid">
            <!-- Content for the first column in the second row -->
            <h1>1</h1>

            <!-- Content for the second column in the second row -->
            <AvatarOne/>
          </div>
          
          
          
       </div>
      </div>
    </div>
</template>


<script>
    import { defineComponent } from "vue"
    import CommentShape from "@/components/CommentShape.vue"
    import AvatarOne from "@/components/AvatarOne.vue"
    import SideNavigation from "@/components/SideNavigation.vue"

    import "../assets/css/main.css"

    export default defineComponent({
        components:{
          SideNavigation, 
          CommentShape, AvatarOne
            },

            data() {
              return {
                dynamicText: "Select the module <br> you want to learn",
              };
            },
        })

</script>

<style scoped>

  .container {
  display: grid;
  grid-template-rows: auto auto; /* Two rows, the second one may adjust its height based on content */
  /* Two equal-width columns in the second row */
  /* grid-template-columns: 1fr 1fr;  */
  
}

.nested-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal-width columns */
  /* Gap between columns */
  /* gap: 10px;  */
}
.row {
  /* Styles for rows, if needed */
}

.column {
  /* Styles for columns, if needed */
}
</style>