<template>
    <div id="Components">
        <NavBar />
        <SideBar />
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar';
  import SideBar from '@/components/SideBar';
  export default {
    name: 'Components',
    components: {
        NavBar,
        SideBar,
    },
  };
  </script>
  
  <style scoped>
  </style>
  