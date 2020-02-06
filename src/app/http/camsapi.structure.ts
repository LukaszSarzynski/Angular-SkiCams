export interface CameraApi {
  name: string;
  url: string;
}

export interface ResortApi {
  name: string;
  prov: string;
  cams: Record<number, CameraApi>;
}

export interface DataApi {
  [key: number]: ResortApi;
}
