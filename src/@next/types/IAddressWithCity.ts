export interface IAddressWithCity {
  id?: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  streetAddress1?: string;
  streetAddress2?: string;
  city?: {
    value?: string;
    label?: string;
  };
  postalCode?: string;
  countryArea?: string;
  phone?: string;
  country?: {
    code?: string;
    country?: string;
  };
}
