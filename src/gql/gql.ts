/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n   mutation toggleLike($toggleLikeInput: ToggleLikeInput!) {\n      toggleLike(input: $toggleLikeInput) {\n         ok\n         error\n         message\n      }\n   }\n": types.ToggleLikeDocument,
    "\n   fragment PhotoFragment on Photo {\n      id\n      file\n      likes\n      commentNumber\n      isLiked\n   }\n": types.PhotoFragmentFragmentDoc,
    "\n   fragment CommentFragment on Comment {\n      id\n      user {\n         username\n         avatar\n      }\n      payload\n      isMine\n      createdAt\n   }\n": types.CommentFragmentFragmentDoc,
    "\n   fragment UserFragment on User {\n      id\n      username\n      avatar\n      isFollowing\n      isMe\n   }\n": types.UserFragmentFragmentDoc,
    "\n   query me {\n      me {\n         user {\n            id\n            username\n            avatar\n         }\n      }\n   }\n": types.MeDocument,
    "\n   query seeFeed($seeFeedInput: SeeFeedInput!) {\n      seeFeed(input: $seeFeedInput) {\n         ok\n         message\n         error\n         photos {\n            ...PhotoFragment\n            user {\n               username\n               avatar\n            }\n            caption\n            createdAt\n            isMine\n            comments {\n               ...CommentFragment\n            }\n         }\n      }\n   }\n   \n   \n": types.SeeFeedDocument,
    "\n   query seeLikes($seeLikesInput: SeeLikesInput!) {\n      seeLikes(input: $seeLikesInput) {\n         user {\n            ...UserFragment\n         }\n      }\n   }\n   \n": types.SeeLikesDocument,
    "\n   query seePhoto($seePhotoInput: SeePhotoInput!) {\n      seePhoto(input: $seePhotoInput) {\n         ok\n         message\n         error\n         photo {\n            ...PhotoFragment\n            user {\n               username\n               avatar\n            }\n            caption\n            createdAt\n            isMine\n         }\n      }\n   }\n   \n": types.SeePhotoDocument,
    "\n   query searchPhotos($input: SearchPhotosInput!) {\n      searchPhotos(input: $input) {\n         ok\n         error\n         message\n         photos {\n            id\n            file\n         }\n      }\n   }\n": types.SearchPhotosDocument,
    "\n   mutation createUserMutation($createUserInput: CreateUserInput!) {\n      createUser(input: $createUserInput) {\n         ok\n         error\n      }\n   }\n": types.CreateUserMutationDocument,
    "\n   mutation loginMutation($loginInput: LoginInput!) {\n      login(input: $loginInput) {\n         ok\n         error\n         token\n      }\n   }\n": types.LoginMutationDocument,
    "\n      query healthCheck {\n         hi {\n            ok\n         }\n      }\n   ": types.HealthCheckDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   mutation toggleLike($toggleLikeInput: ToggleLikeInput!) {\n      toggleLike(input: $toggleLikeInput) {\n         ok\n         error\n         message\n      }\n   }\n"): (typeof documents)["\n   mutation toggleLike($toggleLikeInput: ToggleLikeInput!) {\n      toggleLike(input: $toggleLikeInput) {\n         ok\n         error\n         message\n      }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   fragment PhotoFragment on Photo {\n      id\n      file\n      likes\n      commentNumber\n      isLiked\n   }\n"): (typeof documents)["\n   fragment PhotoFragment on Photo {\n      id\n      file\n      likes\n      commentNumber\n      isLiked\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   fragment CommentFragment on Comment {\n      id\n      user {\n         username\n         avatar\n      }\n      payload\n      isMine\n      createdAt\n   }\n"): (typeof documents)["\n   fragment CommentFragment on Comment {\n      id\n      user {\n         username\n         avatar\n      }\n      payload\n      isMine\n      createdAt\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   fragment UserFragment on User {\n      id\n      username\n      avatar\n      isFollowing\n      isMe\n   }\n"): (typeof documents)["\n   fragment UserFragment on User {\n      id\n      username\n      avatar\n      isFollowing\n      isMe\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   query me {\n      me {\n         user {\n            id\n            username\n            avatar\n         }\n      }\n   }\n"): (typeof documents)["\n   query me {\n      me {\n         user {\n            id\n            username\n            avatar\n         }\n      }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   query seeFeed($seeFeedInput: SeeFeedInput!) {\n      seeFeed(input: $seeFeedInput) {\n         ok\n         message\n         error\n         photos {\n            ...PhotoFragment\n            user {\n               username\n               avatar\n            }\n            caption\n            createdAt\n            isMine\n            comments {\n               ...CommentFragment\n            }\n         }\n      }\n   }\n   \n   \n"): (typeof documents)["\n   query seeFeed($seeFeedInput: SeeFeedInput!) {\n      seeFeed(input: $seeFeedInput) {\n         ok\n         message\n         error\n         photos {\n            ...PhotoFragment\n            user {\n               username\n               avatar\n            }\n            caption\n            createdAt\n            isMine\n            comments {\n               ...CommentFragment\n            }\n         }\n      }\n   }\n   \n   \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   query seeLikes($seeLikesInput: SeeLikesInput!) {\n      seeLikes(input: $seeLikesInput) {\n         user {\n            ...UserFragment\n         }\n      }\n   }\n   \n"): (typeof documents)["\n   query seeLikes($seeLikesInput: SeeLikesInput!) {\n      seeLikes(input: $seeLikesInput) {\n         user {\n            ...UserFragment\n         }\n      }\n   }\n   \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   query seePhoto($seePhotoInput: SeePhotoInput!) {\n      seePhoto(input: $seePhotoInput) {\n         ok\n         message\n         error\n         photo {\n            ...PhotoFragment\n            user {\n               username\n               avatar\n            }\n            caption\n            createdAt\n            isMine\n         }\n      }\n   }\n   \n"): (typeof documents)["\n   query seePhoto($seePhotoInput: SeePhotoInput!) {\n      seePhoto(input: $seePhotoInput) {\n         ok\n         message\n         error\n         photo {\n            ...PhotoFragment\n            user {\n               username\n               avatar\n            }\n            caption\n            createdAt\n            isMine\n         }\n      }\n   }\n   \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   query searchPhotos($input: SearchPhotosInput!) {\n      searchPhotos(input: $input) {\n         ok\n         error\n         message\n         photos {\n            id\n            file\n         }\n      }\n   }\n"): (typeof documents)["\n   query searchPhotos($input: SearchPhotosInput!) {\n      searchPhotos(input: $input) {\n         ok\n         error\n         message\n         photos {\n            id\n            file\n         }\n      }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   mutation createUserMutation($createUserInput: CreateUserInput!) {\n      createUser(input: $createUserInput) {\n         ok\n         error\n      }\n   }\n"): (typeof documents)["\n   mutation createUserMutation($createUserInput: CreateUserInput!) {\n      createUser(input: $createUserInput) {\n         ok\n         error\n      }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   mutation loginMutation($loginInput: LoginInput!) {\n      login(input: $loginInput) {\n         ok\n         error\n         token\n      }\n   }\n"): (typeof documents)["\n   mutation loginMutation($loginInput: LoginInput!) {\n      login(input: $loginInput) {\n         ok\n         error\n         token\n      }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query healthCheck {\n         hi {\n            ok\n         }\n      }\n   "): (typeof documents)["\n      query healthCheck {\n         hi {\n            ok\n         }\n      }\n   "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;