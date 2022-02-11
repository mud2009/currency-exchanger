export default class Exchange {
  static async getExchange() {
    try{
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if (!response.ok) {
        throw Error('Invalid API key entry');
      }
      return response.json();
    }
    catch(error){
      console.log(error);
      return error.message;
    }
  }
}
// ${process.env.API_KEY}
// response.status