/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SearchPhotosInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: searchPhotos
// ====================================================

export interface searchPhotos_searchPhotos_photos {
  __typename: "Photo";
  id: number;
  file: string;
}

export interface searchPhotos_searchPhotos {
  __typename: "SearchPhotosOutput";
  ok: boolean;
  error: string | null;
  message: string | null;
  photos: searchPhotos_searchPhotos_photos[] | null;
}

export interface searchPhotos {
  searchPhotos: searchPhotos_searchPhotos;
}

export interface searchPhotosVariables {
  input: SearchPhotosInput;
}
