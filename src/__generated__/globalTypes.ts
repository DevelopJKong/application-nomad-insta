/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CreateUserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface SearchPhotosInput {
  keyword?: string | null;
}

export interface SeeFeedInput {
  page: number;
}

export interface SeeLikesInput {
  id: number;
}

export interface SeePhotoInput {
  id: number;
}

export interface ToggleLikeInput {
  id: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
