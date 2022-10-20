import { Review } from './review.model';

export class Place {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public image: string,
    public placeReviews: Review[],
    public placeTypes: [],
    public placeGalleries: []
  ) {}
}
