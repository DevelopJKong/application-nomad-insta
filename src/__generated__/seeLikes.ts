/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SeeLikesInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: seeLikes
// ====================================================

export interface seeLikes_seeLikes_user {
  __typename: "User";
  id: number;
  username: string;
  avatar: string | null;
  isFollowing: boolean | null;
  isMe: boolean | null;
}

export interface seeLikes_seeLikes {
  __typename: "SeeLikesOutput";
  user: seeLikes_seeLikes_user[] | null;
}

export interface seeLikes {
  seeLikes: seeLikes_seeLikes;
}

export interface seeLikesVariables {
  seeLikesInput: SeeLikesInput;
}
