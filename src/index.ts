const messages = ['Hello World', 'Hola Mundo', 'Bonjour le monde', 'Hallo Welt', 'Ciao mondo'];

const randomMessage = () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  console.log(messages[randomIndex]);
};

export { randomMessage };
