export default interface ProductDetails {
  readonly name: string;
  readonly image?: ImageDetails;
  readonly description?: string;
  readonly price?: number;
}

interface ImageDetails {
  readonly source: string;
  readonly alt: string;
}
