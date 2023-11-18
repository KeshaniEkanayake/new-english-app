<template>
    <div class="background">
          <SideNavigation/> 
              
          <div class="container">
              <!-- first row (comment shape with text)-->
              <div class="row"> 
                  <CommentShape class="text-container">
                      <!-- Add dynamic text content here with a line break -->
                      <div v-html="dynamicText"></div>
                  </CommentShape>
              </div>
  
  
              <!-- second row (buttons and the avatar)-->
              <div class="row">
                  <!--second row of the page is divided into 2 columns-->
                  <div class="nested-grid">

                            <div class="inner-row">
                                <ImageCard class="image-card" v-for="item in items.slice(0, 3)" :key="item.id" :image-src="item.imageSrc" @click="redirectToPage(item.id)">
                                    <!-- Card content -->
                                    <img :src="item.imageSrc" alt="Card Image" class="card-image" />
                                    <h3 class="carddescription">{{ item.title }}</h3>
                                </ImageCard>
                            </div>

                      <AvatarMain :imageSource="avatarImageSource"/>
                      
                  </div>
              </div>    
          </div>
              
    </div>
  </template>
  
  <script>
  import SideNavigation from "@/components/SideNavigation.vue"
  import CommentShape from "@/components/CommentShape.vue"
  import AvatarMain from "@/components/AvatarMain.vue"
  import ImageCard from "@/components/ImageCard.vue"

  import "../../../assets/css/main.css"
  
  export default {
          components:{
              SideNavigation,
              CommentShape,
              AvatarMain,
              ImageCard,
          },
  
          data() {
            return {
              dynamicText: "What's your favorite show to watch?",

              items: [
                { id: 1, title: 'Harry Potter',  imageSrc: require("@/assets/images/listening-module/harrypotter.jpg") },
                { id: 2, title: 'Card 2',  imageSrc: require("@/assets/images/Badge.png") },
                { id: 3, title: 'Card 3',  imageSrc: require("@/assets/images/Badge.png") },
             ] ,
            
              avatarImageSource: require("@/assets/images/avatars/avatarTwo.png"), // Set the image source dynamically
          };
          },

  };

  </script>
  
  <style scoped>
      /* text inside the comment shape */
      /* Use em units for font size to make it relative */
      .text-container{
          font-size: 1em;
          /* locate the comment shape 10% away from the left margin */
          left: 10%;
      }

.nested-grid {
  margin-top: 15%;
}
.inner-row {
  width: 50vw;
  margin-left: 13%;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-around;
  /* margin-bottom: 50px; */
}
.image-card{
    width: 25%;
    height: 90%;
    background-color: #0C4F80;
}
.card-image {
    height: 100%;
    width: 100%;
    /* object-fit: cover; */
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    justify-content: center;
}

.carddescription{
text-align: center;
color: white;
font-size: 1.5em;
/* align-items: center;
justify-content: center; */
margin: 0;
margin-top: 10px;
/* padding: 5px; */
/* margin-bottom: 10px; */
}
  
  
  
  
  
      /* Media query for smaller screens */
  @media screen and (max-width: 768px) {
    .text-container {
      font-size: 0.8em; /* Adjust font size for smaller screens */
    }
  }
  </style>