export interface IProduct { 
  id: number;
  product: IElasticProduct;
  price: IPrice;
  priceInfo: IPriceInfo;
  description: IDescription;
  store: IStore;
  brand?: IBrand;
}

export interface ISimpleProduct {
  id: number;
  name: string;
  image: string;
  originalPrice: string;
  currentPrice: string;
  discount: number;
  description: string;
}

export interface ICategory {
  id: number;
  name: string;
  path: ICategoryPath[];
  uri: string;
  web_uri: string;
}
export interface ICategoryPath { 
  id: number;
  name: string;
  semantic_id: string;
}
export interface IExpertReview {
  count: number;
  rating: unknown | null;
  uri: string;
  web_uri: string;
}
export interface IMedia {
  product_images: IProductImage;
}

export interface IProductImage { 
  count: number;
  first: {
    140: string;
    280: string;
    800: string;
  }
  uri: string;
}

export interface IPopularity {
  in_category: number;
  total: number;
  trend: number;
}

export interface IProductPrice { 
  alternativ: unknown | null;
  count: number;
  count_alternative: number;
  count_regular: number;
  in_stock: number;
  include_shipping: number;
  regular: number;
  trend: number;
  uri: string;
  web_uri: string;
}

export interface IStatistics {
  sparklines: {
    lowest_price: {
      number_of_days: number;
      values: number[];
    };
  }
  web_uri: string;
}

export interface IUserReview {
  count: number;
  rating: unknown | null;
  uri: string;
  web_uri: string;
}

export interface IElasticProduct { 
  brand: IBrand;
  category: ICategory;
  created_at: string;
  expert_reviews: IExpertReview;
  id: number;
  media: IMedia;
  mobile_web_uri: string;
  name: string;
  popularity: IPopularity;
  price: IProductPrice;
  semantic_id: string;
  statistics: IStatistics;
  stock_status: string;
  uri: string;
  user_reviews: IUserReview;
  web_uri: string;
}

export interface IBrand {
  id: number;
  name: string;
  semantic_id: string;
  uri: string;
  web_uri: string;
}

export interface ICampaign { 
  id: number;
  uri: string;
}
export interface IDescription { 
  html: IdescriptionType;
  text: IdescriptionType;
}
export interface IdescriptionType { 
  long: string;
  short: string;
}

export interface IDisplayOffer {
  offer: string;
  previousPrice?: string;
  previousOffer?: string;
}

export interface IPrice {
  compare: number;
  days_ago_compare: number;
  diff_percentage: number;
  display: IDisplayOffer;
  id: number;
  offer: number;
  offer_incl_shipping: number;
  offer_previous_price: number;
  stock_status: string;
  type: string;
}

export interface IPriceInfo {
  description: string;
  ident: string;
  priceId: number;
  secondLowestPrice: number;
  shardIndex: number;
  sortCatId: number;
  sortCatName: string;
  storeId: number;
  url: string;
}

export interface IRiskFactors {
  m1_score_negative: number;
  second_lowest_diff: number;
  store_rejected_product_ratio: number;
  store_rejected_ratio: number;
}
export interface IStatusInfo {
  action: string;
  action_at: string;
  admin_user_id: number;
  price_id: number;
  reason: unknown | null;
}

export interface IStoreUserReviews {
  count: number;
  count_included_in_rating: number;
  rating: number;
  uri: string;
  web_uri: string;
}

export interface IStoreLocations { 
  count: number;
  uri: string;
} 

export interface IStore { 
  company_name: string;
  company_number: string;
  country_code: string;
  currency: string;
  external_uri: string;
  featured: boolean;
  id: number;
  logo: {
    88: string;
    176: string;
  }
  market: string;
  marketplace: boolean;
  primary_market: string;
  products_total: number;
  provided_by_store: {
    general_info: string;
  }
  semantic_id: string;
  store_locations: IStoreLocations;
  support_onsite: unknown | null;
  support_telephone: boolean;
  uri: string;
  user_reviews: IStoreUserReviews;
  web_uri: string;
}

export interface IElasticSource { 
  campaign: ICampaign | null;
  clicks: number | null;
  country_code: string | null;
  description: IDescription;
  external_url: string | null;
  header: unknown | null;
  id: number;
  item_image: string | null;
  item_type: unknown | null;
  offer_activated: string | null;
  price: IPrice;
  priceInfo: IPriceInfo;
  product: IElasticProduct;
  product_name_as_header: boolean;
  rank: number;
  risk: number;
  riskFactors: IRiskFactors;
  status: string;
  statusInfo: IStatusInfo;
  store: IStore;
  uri: string;
}

export interface IElasticHit {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: IElasticSource;
}

export interface IElasticHits {
  total: number;
  max_score: number;
  hits: {
   hits: IElasticHit[];
  }
}