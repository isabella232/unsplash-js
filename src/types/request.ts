export enum OrderBy {
  LATEST = 'latest',
  POPULAR = 'popular',
  OLDEST = 'oldest',
}
export type Orientation = 'landscape' | 'portrait' | 'squarish';
export type OrientationParam = {
  orientation?: Orientation;
};

export type PaginationParams = {
  /**
   * API defaults to `10` if no value is provided
   */
  perPage?: number;
  /**
   * API defaults to `1` if no value is provided
   */
  page?: number;
  /**
   * API defaults to `"latest"` if no value is provided
   */
  orderBy?: OrderBy;
};
