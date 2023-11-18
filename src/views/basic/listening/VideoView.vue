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
                    
                    
                        <div class="videoCardContainer">
                            <VideoCard :videoSrc="videoLink"/>            
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
  import VideoCard from "@/components/basic/listening/VideoCard.vue"

  import "../../../assets/css/main.css"
  
  export default {
          components:{
              SideNavigation,
              CommentShape,
              AvatarMain,
              VideoCard
          },
  
          data() {
            return {
              dynamicText: "Wingardium Leviosa!",
              videoLink: "https://www.youtube.com/embed/Qgr4dcsY-60",
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

   .videoCardContainer{
     width: 90vw;
     height: 80vh;
     margin-left: 4%;
   }
 
      /* Media query for smaller screens */
  @media screen and (max-width: 768px) {
    .text-container {
      font-size: 0.8em; /* Adjust font size for smaller screens */
    }
  }
  </style>