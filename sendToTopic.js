const initSolaceClient = require('./solaceClient');
const solace = require("solclientjs");

const sendMessageToTopic = (topic, messageContent) => {
  const session = initSolaceClient();
  setTimeout(() => { 
    setInterval(() => { // send message every 5 seconds
      try {
        const message = solace.SolclientFactory.createMessage();
        message.setDestination(solace.SolclientFactory.createTopic(topic));
        message.setBinaryAttachment(Buffer.from(messageContent)); // Send message content as a binary attachment
        message.setDeliveryMode(solace.MessageDeliveryModeType.DIRECT); // Use appropriate delivery mode

        session.send(message);
        console.log(`Message sent to topic "${topic}": ${messageContent}`);
      } catch (error) {
        console.error("Failed to send message: ", error.toString());
      }
    }, 5000);
  }, 5000)
}

module.exports = sendMessageToTopic;
