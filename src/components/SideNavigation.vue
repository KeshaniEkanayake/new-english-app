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
    import { BookmarkOutline, DesktopOutline, GridSharp, PodiumSharp, SettingsSharp, LogOut } from "@vicons/ionicons5";
    
    const menuOptions = [
      {
        label: "Dashboard",
        key: "Dashboard",
        href: "https://en.wikipedia.org/wiki/Hear_the_Wind_Sing",
        icon: GridSharp,
      },
      {
        label: "Lessons",
        key: "Lessons",
        icon: DesktopOutline
      },
      {
        label: "Leaderboard",
        key: "Leaderboard",
        icon: PodiumSharp
      },
      {
        label: "Settings",
        key: "Settings",
        icon: SettingsSharp,
        
      },
      {
        label: "Log out",
        key: "Log out",
        icon: LogOut,
        
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
            if(option.icon){
              return h(NIcon, null, { default: () => h(option.icon) });

            }
             // If no icon is specified, you can return a default icon (e.g., BookmarkOutline)
        return h(NIcon, null, { default: () => h(BookmarkOutline) });
          },
           
        };
      
      },
    });
    </script>
  
  <style scoped>
    .top-logo{
      width: 100%; /* Adjust the width as needed */
      height: auto; /* To maintain the aspect ratio */
      margin-bottom: 10px; /* Add margin to separate the image from the navigation content */
  
    }

  
  </style>