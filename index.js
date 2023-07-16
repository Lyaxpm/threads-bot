const { ThreadsAPI } = require('threads-api');
const axios = require('axios');

async function randomQuote() {
    try {
      const response = await axios.get('https://arsuarnet.com/angka.php');
      const angkanya = response.angka;
      return angkanya;
    } catch (error) {
      throw new Error('Failed to retrieve random quote.');
    }
}

const main = async () => {
    try {
        const threadsAPI = new ThreadsAPI({
            username: 'numbers.bot',
            password: 'lalicok123'
        });

        const q = await angkanya();
        const p = await threadsAPI.publish({
          text: q,
        });

        console.log(p);

    } catch (error) {
        console.log("failed");
    }
}
  
setInterval( async () => {
        await main()
    }, process.env.DELAY * 1000);
