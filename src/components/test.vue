<!-- side navigation -->
<template>  
    <div class="side-navigation">  
       
          <!-- arrow in the left middle -->
          <n-layout has-sider>
            <n-layout-sider
              bordered
              collapse-mode="width"
              :collapsed-width="64"
              :width="240"
              :collapsed="collapsed"
              show-trigger
              @collapse="collapsed = true"
              @expand="collapsed = false"
            >
            
            <img src="../assets/images/Verbasure-logo.png" alt="Verbasure logo" class="top-logo" /> 
    
              <n-menu
                :collapsed="collapsed"
                :collapsed-width="64"
                :collapsed-icon-size="22"
                :options="menuOptions"
                :render-label="renderMenuLabel"
                :render-icon="renderMenuIcon"
                :expand-icon="expandIcon"
              />
            </n-layout-sider>
    
            <n-layout>
              <span></span>
            </n-layout>
          </n-layout>
    </div>
      </template>
      
      <script>
      import { h, ref, defineComponent } from "vue";
      import { NIcon } from "naive-ui";
      import { BookmarkOutline, CaretDownOutline } from "@vicons/ionicons5";
      
      const menuOptions = [
        {
          label: "Dashboard",
          key: "Dashboard",
          href: "https://en.wikipedia.org/wiki/Hear_the_Wind_Sing"
        },
        {
          label: "Lessons",
          key: "Lessons",
        },
        {
          label: "Leaderboard",
          key: "Leaderboard",
        },
        {
          label: "Settings",
          key: "Settings",
          
        },
        {
          label: "Log out",
          key: "Log out",
          
        }
      ];
      
      export default defineComponent({
        setup() {
          return {
            menuOptions,
            collapsed: ref(true),
            renderMenuLabel(option) {
              if ("href" in option) {
                return h("a", { href: option.href, target: "_blank" }, [
                  option.label
                ]);
              }
              return option.label;
            },
            renderMenuIcon(option) {
              if (option.key === "sheep-man")
                return true;
              if (option.key === "food")
                return null;
              return h(NIcon, null, { default: () => h(BookmarkOutline) });
            },
            expandIcon() {
              return h(NIcon, null, { default: () => h(CaretDownOutline) });
            }
          };
        }
      });
      </script>
    
    <style scoped>
      .top-logo{
        width: 100%; /* Adjust the width as needed */
        height: auto; /* To maintain the aspect ratio */
        margin-bottom: 10px; /* Add margin to separate the image from the navigation content */
    
      }
    </style>