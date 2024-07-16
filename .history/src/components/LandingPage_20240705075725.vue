<template>
    <div>
      <h1 class="text-lg font-extralight text-center">Landing Page</h1>
      <ChatWidget />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { ChatWidget } from 'vue3-beautiful-chat';
  
  export default {
    components: {
      ChatWidget,
    },
    setup() {
      const messages = ref([
        {
          type: 'text',
          author: `me`,
          data: { text: `Why don't they have salsa on the table?` }
        },
        {
          type: 'text',
          author: `them`,
          data: { text: `What do you need salsa for?` }
        }
      ]);
  
      const onMessageSend = (message) => {
        messages.value.push(message);
      };
  
      return {
        messages,
        onMessageSend
      };
    }
  };
  </script>
  
  <style>
  /* Add any styles you need for your component */
  </style>
  