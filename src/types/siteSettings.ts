export type SiteSettings = {
  siteName: string;
  defaultMetaTitle: string;
  defaultMetaDescription: string;
  defaultOgImage?: any;
  logo?: any;
  organization?: {
    legalName?: string;
    phone?: string;
    email?: string;
    priceRange?: string;
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  sameAs?: string[];
  shippingRate?: number;
};
