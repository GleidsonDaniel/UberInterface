import { Platform, PixelRatio } from 'react-native';

export function getPizelSize(pixels) {
  return Platform.select({
    ios: pixels,
    android: PixelRatio.getPixelSizeForLayoutSize(pixels)
  });
}
