// take Currency
const getCurrencyQuery = `
  query GetCurrency($countryName: String!) {
    item(where: {class_id: {_eq: "Country"}, nameEn: {_eq: $countryName}}) {
      nameEn
      currency: statements(where: {property_id: {_eq: "currency"}}) {
        object {
          nameEn
        }
      }
    }
  }
`;

export { getCurrencyQuery };
