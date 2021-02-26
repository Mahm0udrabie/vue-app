<template>
  <div id="app">
      <chat-messages :messages="messages"/>
      <chat-form  v-on:messagesent="addMessage" :user="user"/>
  </div>
</template>

<script>

import ChatMessages from './components/ChatMessages'
import ChatForm     from './components/ChatForm'
export default {
  name: 'App',
  components: {
    ChatMessages,
    ChatForm
      } ,
        data: {
    messages: ["Hello World"]
  },
  created() {
    this.fetchMessages();
    Echo.private('chat')
    .listen('MessageSent', (e) => {
    this.messages.push({
    message: e.message.message,
    user: e.user
    });
    });
},

methods: {
    fetchMessages() {
        axios.get('http://127.0.0.1:8000/messages').then(response => {
            this.messages = response.data;
        });
    },

    addMessage(message) {
        this.messages.push(message);

        axios.post('http://127.0.0.1:8000/messages', message).then(response => {
          console.log(response.data);
        });
    }
}
}
</script>


<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
