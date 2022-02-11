export default class Exchange {
  static async getExchange() {
    try{
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if (!response.ok) {
        if (response.status === 404) {
          throw Error('Invalid entry, not found');
        } else if (response.status === 403) {
          throw Error('Invalid API Key');
        }
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