function createConnection({ serverUrl, roomId }) {
  // A real implementation would actually connect to a server

  if (typeof serverUrl !== 'string') {
    throw new Error('Expected serverUrl to be a string. Received:' + serverUrl)
  }

  if (typeof roomId !== 'string') {
    throw new Error('Expected roomId to be a string. Received:' + roomId)
  }

  let intervalId;
  let messageCallback;

  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...')
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        if (messageCallback) {
          if (Math.random() > 0.5) {
            messageCallback('hey')
        } else {
          messageCallback('lol')
        }
      }
    }, 3000);
    },

    disconnect() {
      clearInterval (intervalId);
      messageCallback = null;
      console.log('🔌 Disconnecting from "' + roomId + '" room at ' + serverUrl + '...');
    },

    on(event, callback) {
      if (messageCallback) {
        throw new Error('Cannot add the handler twice.')
      }
      if (event !== 'message') {
        throw new Error('Only "message" event is supported. Received: ' + event)
      }
      messageCallback = callback;
    },
  }
}

export { createConnection }