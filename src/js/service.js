export default class Exchange {
  static async getExchange() {
    try{
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
    }
    catch{}
  }
}