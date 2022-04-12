
endpoint = '?base='


const api_url = 'http://api.exchangeratesapi.io/v1/latest?access_key=c2eb1c8aef1eb52ee9715976f256w436b'+ endpoint

async function getDataByBase(baseCurrency) { 
    var api_baseUrl = api_url + baseCurrency;
    const response = await fetch(api_baseUrl);
    const data = await response.json();
    const { base, rates } = data;
    


    console.log(base);
    console.log(rates.CAD);
    console.log(data.date);
    return rates;
}

// http://api.exchangeratesapi.io/v1/latest

 //   ? access_key = YOUR_ACCESS_KEY
 //   & base = GBP
 //   & symbols = USD,AUD,CAD,PLN,MXN
 //