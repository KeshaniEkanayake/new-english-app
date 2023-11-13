<!-- this card component contains questions related to basic level -> reading text 2  -->

<template>
    <n-card>
          <!-- Content of task 1 -->
        <h3>Match the phrases with the sentences. Put the corresponding number of the answer near the question.</h3>
        
        <!-- answers -->
        <table>
          <tr>
            <td><ButtonAnswer answer="1)  Final call"/></td>
            <td><ButtonAnswer answer="2)  Cancelled"/></td>
            <td><ButtonAnswer answer="3)  Boarding"/></td>
          </tr>

          <tr>
            <td><ButtonAnswer answer="4)  Departed"/></td>
            <td><ButtonAnswer answer="5)  Gate change"/></td>
            <td><ButtonAnswer answer="6)  Delayed"/></td>
          </tr>
        </table>
        <br><br>

        <!-- questions -->
        <table class="table-style">
          <tr>
            <td>1. The plane isn't here now.</td>
            <td><InputAnswer/></td>
          </tr>

          <tr>
            <td>2. The plane is late.</td>
            <td><InputAnswer/></td>
          </tr>

          <tr>
            <td>3. The plane is not going to leave.</td>
            <td><InputAnswer/></td>
          </tr>

          <tr>
            <td>4. You can get on the plane now.</td>
            <td><InputAnswer/></td>
          </tr>

          <tr>
            <td>5. The plane is leaving very soon.</td>
            <td><InputAnswer/></td>
          </tr>

          <tr>
            <td>5. You need to go to a different place to get on the plane.</td>
            <td><InputAnswer/></td>
          </tr>
        </table>

        <br>
        <div class="center-item">
          <ButtonCheck/>
        </div>
    </n-card>
  </template>
  


<script>
import ButtonAnswer from "@/components/ButtonAnswer.vue"
import InputAnswer from "@/components/InputAnswer.vue"
import ButtonCheck from "@/components/ButtonCheck.vue"

  export default({
    components:{
    ButtonAnswer, InputAnswer, ButtonCheck,
  }
  })
</script>



<style scoped>
  .n-card {
    max-width: 50%;
    border-radius: 1.25rem;
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
  }

  .table-style{
    text-align: left;
  }
  </style>