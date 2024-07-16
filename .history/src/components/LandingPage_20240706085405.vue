<template>
    <div>
      <beautiful-chat
        :participants="participants"
        :titleImageUrl="titleImageUrl"
        :onMessageWasSent="onMessageWasSent"
        :messageList="messageList"
    
        @onType="handleOnType"
        @edit="editMessage" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'app',
    data() {
      return {
        participants: [
          {
            id: 'user1',
            name: 'Matteo',
            imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
          },
          {
            id: 'user2',
            name: 'Support',
            imageUrl: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4'
          }
        ], // Participants data
        ... // Other data and methods
      }
    }
  }
  </script>
  