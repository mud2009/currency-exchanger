export default class Exchange {
  static async getExchange() {
    try{
      const response = await fetch(`https://v6.exchangerate-api.com/v6/0fd51678aa18dc6ef7944444/latest/USD`);
      if (!response.ok) {
        console.log(response);
        console.log(response.readyState);
        throw Error(response.statusText);
      }
      return response.json();
    }
    catch(error){
      console.log(error.message);
      return error;
    }
  }
}
// ${process.env.API_KEY}