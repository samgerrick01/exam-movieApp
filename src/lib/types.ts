export type MovieType = {
  '#TITLE': string;
  '#YEAR': number;
  '#IMDB_ID': string;
  '#RANK': number;
  '#ACTORS': string;
  '#AKA': string;
  '#IMDB_URL': string;
  '#IMDB_IV': string;
  '#IMG_POSTER': string;
  photo_width: number;
  photo_height: number;
};

export interface MovieDataType {
  '@context': string;
  '@type': string;
  url: string;
  name: string;
  image: string;
  description: string;
  review: Review;
  aggregateRating: Rating;
  contentRating: string;
  genre: string[];
  datePublished: Date;
  keywords: string;
  actor: Actor[];
  creator: Actor[];
  trailer: Trailer;
}

export interface Actor {
  '@type': string;
  url: string;
  name?: string;
}

export interface Rating {
  '@type': string;
  ratingCount?: number;
  bestRating: number;
  worstRating: number;
  ratingValue: number;
}

export interface Review {
  '@type': string;
  itemReviewed: ItemReviewed;
  author: Author;
  dateCreated: Date;
  inLanguage: string;
  name: string;
  reviewBody: string;
  reviewRating: Rating;
}

export interface Author {
  '@type': string;
  name: string;
}

export interface ItemReviewed {
  '@type': string;
  url: string;
}

export interface Trailer {
  '@type': string;
  name: string;
  embedUrl: string;
  thumbnail: Thumbnail;
  thumbnailUrl: string;
  url: string;
  description: string;
  duration: string;
  uploadDate: Date;
}

export interface Thumbnail {
  '@type': string;
  contentUrl: string;
}
