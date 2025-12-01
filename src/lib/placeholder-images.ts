import data from './placeholder-images.json';
import { StaticImageData } from 'next/image';

// This file previously contained static imports for local images.
// Due to a build error where those images could not be found,
// this has been reverted to a simpler implementation that directly
// uses the string URLs from the JSON file.

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string | StaticImageData;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
