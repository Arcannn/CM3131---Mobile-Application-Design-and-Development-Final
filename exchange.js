/* API to import the data for the currency converter. */
endpoint = 'latest'
access_key = 'd1424d47a559bfd42757b7c772fb79be'


const api_url = 'http://api.exchangeratesapi.io/v1/' + endpoint + '?access_key=' + access_key


async function getDataByBase(baseCurrency) {
    var api_baseUrl = api_url;
    const response = await fetch(api_baseUrl);
    const data = await response.json();
    const { base, rates } = data;

    return rates;
}