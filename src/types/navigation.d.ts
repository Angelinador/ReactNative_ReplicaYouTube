/* 
  RootStackParamList
  Es un mapa de tipos que define todas las pantallas registradas en tu Stack Navigator y qué parámetros recibe cada una.
*/

import { Video } from "./video.interface";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Test: undefined
  Home: undefined
  SelectedVideo: Video;   // screen que recibira un objeto Video
};