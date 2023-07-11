/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SeePhotoInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: seePhoto
// ====================================================

export interface seePhoto_seePhoto_photo_user {
  __typename: "User";
  username: string;
  avatar: string | null;
}

export interface seePhoto_seePhoto_photo {
  __typename: "Photo";
  id: number;
  file: string;
  likes: number | null;
  commentNumber: number | null;
  isLiked: boolean | null;
  user: seePhoto_seePhoto_photo_user | null;
  caption: string | null;
  createdAt: any | null;
  isMine: boolean | null;
}

export interface seePhoto_seePhoto {
  __typename: "SeePhotoOutput";
  ok: boolean;
  message: string | null;
  error: string | null;
  photo: seePhoto_seePhoto_photo | null;
}

export interface seePhoto {
  seePhoto: seePhoto_seePhoto;
}

export interface seePhotoVariables {
  seePhotoInput: SeePhotoInput;
}
