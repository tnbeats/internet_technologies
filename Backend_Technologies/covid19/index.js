const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get("https://public.opendatasoft.com/api/records/1.0/search/", {
            params: {
                dataset: "covid-19-germany-landkreise",
                q: "Deggendorf"
            }
        });
        console.log(response.data.records[0].fields.cases7_lk);
    } catch (error) {
        console.error(error);
    }
}

fetchData();






// axios.get("https://public.opendatasoft.com/api/records/1.0/search/", {
//     params: {
//         dataset: "covid-19-germany-landkreise",
//         q: "Deggendorf"
//     }
// }).then((response) => {
//     console.log(response.data.records[0].fields.cases7_per_100k);
// }
// ).catch((error) => {
//     console.error(error);
// });