const initSolaceClient = require('./solaceClient');
const solace = require("solclientjs");

const listenToTopic = (topic) => {
  const session = initSolaceClient();
  setTimeout(() => {
    try {
      session.subscribe(
        solace.SolclientFactory.createTopic(topic),
        true,
        topic,
        10000
      );
      console.log("Subscribed to test topic");

      session.on(solace.SessionEventCode.MESSAGE, (message) => {
        console.log(
          `Received message: "${message.getBinaryAttachment()}", details:\n${message.dump()}`
        );
      });
    } catch (error) {
      console.error("Failed to subscribe to topic: ", error.toString());
    }
  }, 5000);
}

module.exports = listenToTopic;
