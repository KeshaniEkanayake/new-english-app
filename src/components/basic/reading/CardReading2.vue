<!-- this card component contains an image and a a table related to a basic level -> reading comprehension question  -->

<template>
    <n-card>
      <template #cover>
        <img src="@/assets/images/images-in-questions/readingText2-departure.jpg" class="image-style">
        </template>
          <h2>An airport departures board</h2>
            <table>
              <tr>
                <th>Time</th>
                <th>Flight</th>
                <th>Destination</th>
                <th>Gate</th>
                <th>Remarks</th>
              </tr>

              <tr>
                <td>10:45</td>
                <td>XZ 3265	</td>
                <td>Chennai</td>
                <td>17</td>
                <td>Departed</td>
              </tr>

              <tr>
                <td>10:50</td>
                <td>SQ 0972		</td>
                <td>Amsterdam</td>
                <td>23</td>
                <td>Departed</td>
              </tr>

              <tr>
                <td>11:00</td>
                <td>SQ 2509		</td>
                <td>Mexico City	</td>
                <td>19</td>
                <td>Departed</td>
              </tr>

              <tr>
                <td>11:05</td>
                <td>RT 9122		</td>
                <td>Buenos Aires	</td>
                <td>34</td>
                <td>Cancelled</td>
              </tr>

              <tr>
                <td>11:10</td>
                <td>XZ 6005	</td>
                <td>Los Angeles	</td>
                <td>05</td>
                <td>Final call</td>
              </tr>

              <tr>
                <td>11:20</td>
                <td>QE 0078	</td>
                <td>Beijing</td>
                <td>33</td>
                <td>Final call</td>
              </tr>

              <tr>
                <td>11:25</td>
                <td>TY 2053</td>
                <td>Christchurch </td>
                <td>56</td>
                <td>Delayed</td>
              </tr>

              <tr>
                <td>11:25</td>
                <td>ER 7452	</td>
                <td>Seoul</td>
                <td>25</td>
                <td>Boarding</td>
              </tr>

              <tr>
                <td>11:30</td>
                <td>XZ 0352	</td>
                <td>Moscow</td>
                <td>12</td>
                <td>Boarding</td>
              </tr>

              <tr>
                <td>11:35</td>
                <td>XZ 0569	</td>
                <td>Kuala Lumpur	</td>
                <td>27</td>
                <td>Gate change</td>
              </tr>

            </table>
    </n-card>
  </template>
  


<script>
  export default({
   
  })
</script>



<style scoped>
  .n-card {
    max-width: 40%;
    border-radius: 1.25rem;
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
  }

  .image-style{
    border-radius: 1.25rem;
    display: block; /* Ensures the image is centered horizontally */
    margin: 0 auto; /* Centers the image horizontally */
    max-width: 60%; /* Adjust the image size as needed */
    
  }

  .para-style{
    color: black;
    /* used to keep linebreaks and spaces as typed inside data() */
    white-space: pre-line;
    text-align: center;
  }

  table{
    border-collapse: collapse;
    width: 100%;
  }
  
  </style>