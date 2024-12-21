import axios from "axios";
import { getCurrencyQuery } from "./GraphqlQueries";
const graphqlEndpoint = 'https://datastory-cloud-v2.stellate.sh/';
const ApiService = {
  getCurrency: async (country) => {
    const passingVariables = {
      countryName: country,
    };
    try {
      const response = await axios.post(
        graphqlEndpoint,
        {
          query: getCurrencyQuery,
          variables: passingVariables,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default ApiService;
