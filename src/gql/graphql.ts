/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
   ID: { input: string; output: string };
   String: { input: string; output: string };
   Boolean: { input: boolean; output: boolean };
   Int: { input: number; output: number };
   Float: { input: number; output: number };
   /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
   DateTime: { input: any; output: any };
   /** The `Upload` scalar type represents a file upload. */
   Upload: { input: any; output: any };
};

export type Comment = {
   __typename?: 'Comment';
   createdAt?: Maybe<Scalars['DateTime']['output']>;
   id: Scalars['Float']['output'];
   isMine: Scalars['Boolean']['output'];
   payload: Scalars['String']['output'];
   photo?: Maybe<Photo>;
   photoId?: Maybe<Scalars['Float']['output']>;
   updatedAt?: Maybe<Scalars['DateTime']['output']>;
   user?: Maybe<User>;
   userId?: Maybe<Scalars['Float']['output']>;
};

export type CoreOutput = {
   __typename?: 'CoreOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
};

export type CreateCommentInput = {
   payload: Scalars['String']['input'];
   photoId: Scalars['Float']['input'];
};

export type CreateCommentOutput = {
   __typename?: 'CreateCommentOutput';
   error?: Maybe<Scalars['String']['output']>;
   id: Scalars['Float']['output'];
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
};

export type CreateUserInput = {
   email: Scalars['String']['input'];
   firstName: Scalars['String']['input'];
   lastName: Scalars['String']['input'];
   password: Scalars['String']['input'];
};

export type CreateUserOutput = {
   __typename?: 'CreateUserOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
};

export type DeleteCommentInput = {
   id: Scalars['Float']['input'];
};

export type DeleteCommentOutput = {
   __typename?: 'DeleteCommentOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
};

export type DeletePhotoInput = {
   id: Scalars['Float']['input'];
};

export type DeletePhotoOutput = {
   __typename?: 'DeletePhotoOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
};

export type EditCommentInput = {
   id: Scalars['Float']['input'];
   payload: Scalars['String']['input'];
};

export type EditCommentOutput = {
   __typename?: 'EditCommentOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
};

export type EditProfileInput = {
   avatarField?: InputMaybe<Scalars['Upload']['input']>;
   bio?: InputMaybe<Scalars['String']['input']>;
   email?: InputMaybe<Scalars['String']['input']>;
   firstName?: InputMaybe<Scalars['String']['input']>;
   lastName?: InputMaybe<Scalars['String']['input']>;
   password?: InputMaybe<Scalars['String']['input']>;
   username?: InputMaybe<Scalars['String']['input']>;
};

export type EditProfileOutput = {
   __typename?: 'EditProfileOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
};

export type FollowerUserInput = {
   username: Scalars['String']['input'];
};

export type FollowerUserOutput = {
   __typename?: 'FollowerUserOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
};

export type GetUserInput = {
   id: Scalars['Float']['input'];
};

export type GetUserOutput = {
   __typename?: 'GetUserOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
   totalPages?: Maybe<Scalars['Int']['output']>;
   user: User;
};

export type Hashtag = {
   __typename?: 'Hashtag';
   createdAt?: Maybe<Scalars['DateTime']['output']>;
   hashtag: Scalars['String']['output'];
   id: Scalars['Float']['output'];
   photos?: Maybe<Array<Photo>>;
   totalPhotos: Scalars['Float']['output'];
   updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HashtagPhotosArgs = {
   page: Scalars['Float']['input'];
};

export type LoginInput = {
   email: Scalars['String']['input'];
   password: Scalars['String']['input'];
};

export type LoginOutput = {
   __typename?: 'LoginOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
   token?: Maybe<Scalars['String']['output']>;
};

export type MeOutput = {
   __typename?: 'MeOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
   user?: Maybe<User>;
};

export type Message = {
   __typename?: 'Message';
   createdAt?: Maybe<Scalars['DateTime']['output']>;
   id: Scalars['Float']['output'];
   message: Array<Message>;
   payload?: Maybe<Scalars['String']['output']>;
   read?: Maybe<Scalars['Boolean']['output']>;
   room?: Maybe<Room>;
   roomId?: Maybe<Scalars['Float']['output']>;
   unreadTotal: Scalars['Float']['output'];
   updatedAt?: Maybe<Scalars['DateTime']['output']>;
   user?: Maybe<User>;
   userId?: Maybe<Scalars['Float']['output']>;
   users: Array<User>;
};

export type Mutation = {
   __typename?: 'Mutation';
   createComment: CreateCommentOutput;
   createUser: CreateUserOutput;
   deleteComment: DeleteCommentOutput;
   deletePhoto: DeletePhotoOutput;
   editComment: EditCommentOutput;
   editProfile: EditProfileOutput;
   followerUser: FollowerUserOutput;
   login: LoginOutput;
   readMessage: ReadMessageOutput;
   sendMessage: SendMessageOutput;
   toggleLike: ToggleLikeOutput;
   unFollowerUser: UnFollowerUserOutput;
   uploadPhoto: UploadPhotoOutput;
};

export type MutationCreateCommentArgs = {
   input: CreateCommentInput;
};

export type MutationCreateUserArgs = {
   input: CreateUserInput;
};

export type MutationDeleteCommentArgs = {
   input: DeleteCommentInput;
};

export type MutationDeletePhotoArgs = {
   input: DeletePhotoInput;
};

export type MutationEditCommentArgs = {
   input: EditCommentInput;
};

export type MutationEditProfileArgs = {
   input: EditProfileInput;
};

export type MutationFollowerUserArgs = {
   input: FollowerUserInput;
};

export type MutationLoginArgs = {
   input: LoginInput;
};

export type MutationReadMessageArgs = {
   input: ReadMessageInput;
};

export type MutationSendMessageArgs = {
   input: SendMessageInput;
};

export type MutationToggleLikeArgs = {
   input: ToggleLikeInput;
};

export type MutationUnFollowerUserArgs = {
   input: UnFollowerUserInput;
};

export type MutationUploadPhotoArgs = {
   input: UploadPhotoInput;
};

export type Photo = {
   __typename?: 'Photo';
   caption?: Maybe<Scalars['String']['output']>;
   commentNumber?: Maybe<Scalars['Float']['output']>;
   comments?: Maybe<Array<Comment>>;
   createdAt?: Maybe<Scalars['DateTime']['output']>;
   file: Scalars['String']['output'];
   hashtags?: Maybe<Array<Hashtag>>;
   id: Scalars['Float']['output'];
   isLiked?: Maybe<Scalars['Boolean']['output']>;
   isMine?: Maybe<Scalars['Boolean']['output']>;
   likes?: Maybe<Scalars['Float']['output']>;
   updatedAt?: Maybe<Scalars['DateTime']['output']>;
   user?: Maybe<User>;
};

export type Query = {
   __typename?: 'Query';
   getUser: GetUserOutput;
   hi: CoreOutput;
   me: MeOutput;
   searchPhotos: SearchPhotosOutput;
   searchUsers: SearchUsersOutput;
   seeFeed: SeeFeedOutput;
   seeFollowers: SeeFollowersOutput;
   seeFollowing: SeeFollowingOutput;
   seeHashtag: SeeHashtagOutput;
   seeLikes: SeeLikesOutput;
   seePhoto: SeePhotoOutput;
   seePhotoComments: SeePhotoCommentsOutput;
   seeProfile: SeeProfileOutput;
   seeRoom: SeeRoomOutput;
   seeRooms: SeeRoomsOutput;
};

export type QueryGetUserArgs = {
   input: GetUserInput;
};

export type QuerySearchPhotosArgs = {
   input: SearchPhotosInput;
};

export type QuerySearchUsersArgs = {
   input: SearchUsersInput;
};

export type QuerySeeFeedArgs = {
   input: SeeFeedInput;
};

export type QuerySeeFollowersArgs = {
   input: SeeFollowersInput;
};

export type QuerySeeFollowingArgs = {
   input: SeeFollowingInput;
};

export type QuerySeeHashtagArgs = {
   input: SeeHashtagInput;
};

export type QuerySeeLikesArgs = {
   input: SeeLikesInput;
};

export type QuerySeePhotoArgs = {
   input: SeePhotoInput;
};

export type QuerySeePhotoCommentsArgs = {
   input: SeePhotoCommentsInput;
};

export type QuerySeeProfileArgs = {
   input: SeeProfileInput;
};

export type QuerySeeRoomArgs = {
   input: SeeRoomInput;
};

export type ReadMessageInput = {
   id: Scalars['Float']['input'];
};

export type ReadMessageOutput = {
   __typename?: 'ReadMessageOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
};

export enum Role {
   Admin = 'ADMIN',
   User = 'USER',
}

export type Room = {
   __typename?: 'Room';
   createdAt?: Maybe<Scalars['DateTime']['output']>;
   id: Scalars['Float']['output'];
   messages?: Maybe<Array<Message>>;
   unreadTotal?: Maybe<Scalars['Float']['output']>;
   updatedAt?: Maybe<Scalars['DateTime']['output']>;
   users?: Maybe<Array<User>>;
};

export type RoomUpdatesInput = {
   id: Scalars['Float']['input'];
};

export type SearchPhotosInput = {
   keyword?: InputMaybe<Scalars['String']['input']>;
};

export type SearchPhotosOutput = {
   __typename?: 'SearchPhotosOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
   photos?: Maybe<Array<Photo>>;
};

export type SearchUsersInput = {
   keyword: Scalars['String']['input'];
};

export type SearchUsersOutput = {
   __typename?: 'SearchUsersOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
   totalPages?: Maybe<Scalars['Int']['output']>;
   users?: Maybe<Array<User>>;
};

export type SeeFeedInput = {
   page?: Scalars['Float']['input'];
};

export type SeeFeedOutput = {
   __typename?: 'SeeFeedOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
   photos?: Maybe<Array<Photo>>;
};

export type SeeFollowersInput = {
   page: Scalars['Float']['input'];
   username: Scalars['String']['input'];
};

export type SeeFollowersOutput = {
   __typename?: 'SeeFollowersOutput';
   error?: Maybe<Scalars['String']['output']>;
   followers?: Maybe<Array<User>>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
   totalPages?: Maybe<Scalars['Float']['output']>;
};

export type SeeFollowingInput = {
   lastId: Scalars['Float']['input'];
   username: Scalars['String']['input'];
};

export type SeeFollowingOutput = {
   __typename?: 'SeeFollowingOutput';
   error?: Maybe<Scalars['String']['output']>;
   following?: Maybe<Array<User>>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
   totalPages?: Maybe<Scalars['Float']['output']>;
};

export type SeeHashtagInput = {
   hashtag: Scalars['String']['input'];
   page?: InputMaybe<Scalars['Float']['input']>;
};

export type SeeHashtagOutput = {
   __typename?: 'SeeHashtagOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
   photos?: Maybe<Array<Photo>>;
   totalPhotos?: Maybe<Scalars['Float']['output']>;
};

export type SeeLikesInput = {
   id: Scalars['Float']['input'];
};

export type SeeLikesOutput = {
   __typename?: 'SeeLikesOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
   user?: Maybe<Array<User>>;
};

export type SeePhotoCommentsInput = {
   id: Scalars['Float']['input'];
   page?: InputMaybe<Scalars['Float']['input']>;
};

export type SeePhotoCommentsOutput = {
   __typename?: 'SeePhotoCommentsOutput';
   comments?: Maybe<Array<Comment>>;
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
};

export type SeePhotoInput = {
   id: Scalars['Float']['input'];
};

export type SeePhotoOutput = {
   __typename?: 'SeePhotoOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
   photo?: Maybe<Photo>;
};

export type SeeProfileInput = {
   username: Scalars['String']['input'];
};

export type SeeProfileOutput = {
   __typename?: 'SeeProfileOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
   totalPages?: Maybe<Scalars['Int']['output']>;
   user: User;
};

export type SeeRoomInput = {
   id: Scalars['Float']['input'];
};

export type SeeRoomOutput = {
   __typename?: 'SeeRoomOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
   room?: Maybe<Room>;
};

export type SeeRoomsOutput = {
   __typename?: 'SeeRoomsOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
   rooms?: Maybe<Array<Room>>;
};

export type SendMessageInput = {
   payload?: InputMaybe<Scalars['String']['input']>;
   roomId?: InputMaybe<Scalars['Float']['input']>;
   userId?: InputMaybe<Scalars['Float']['input']>;
};

export type SendMessageOutput = {
   __typename?: 'SendMessageOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   messages?: Maybe<Message>;
   ok: Scalars['Boolean']['output'];
};

export type Subscription = {
   __typename?: 'Subscription';
   roomUpdates: Message;
};

export type SubscriptionRoomUpdatesArgs = {
   input: RoomUpdatesInput;
};

export type ToggleLikeInput = {
   id: Scalars['Float']['input'];
};

export type ToggleLikeOutput = {
   __typename?: 'ToggleLikeOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
};

export type UnFollowerUserInput = {
   username: Scalars['String']['input'];
};

export type UnFollowerUserOutput = {
   __typename?: 'UnFollowerUserOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
};

export type UploadPhotoInput = {
   caption?: InputMaybe<Scalars['String']['input']>;
   photoFile?: InputMaybe<Scalars['Upload']['input']>;
};

export type UploadPhotoOutput = {
   __typename?: 'UploadPhotoOutput';
   error?: Maybe<Scalars['String']['output']>;
   message?: Maybe<Scalars['String']['output']>;
   ok: Scalars['Boolean']['output'];
};

export type User = {
   __typename?: 'User';
   avatar?: Maybe<Scalars['String']['output']>;
   bio?: Maybe<Scalars['String']['output']>;
   comments?: Maybe<Scalars['Float']['output']>;
   createdAt?: Maybe<Scalars['DateTime']['output']>;
   email: Scalars['String']['output'];
   firstName: Scalars['String']['output'];
   followers?: Maybe<Array<User>>;
   following?: Maybe<Array<User>>;
   id: Scalars['Float']['output'];
   isFollowing?: Maybe<Scalars['Boolean']['output']>;
   isFollowingCheck?: Maybe<Scalars['Boolean']['output']>;
   isMe?: Maybe<Scalars['Boolean']['output']>;
   lastName: Scalars['String']['output'];
   password: Scalars['String']['output'];
   photos?: Maybe<Array<Photo>>;
   role: Role;
   totalFollowers?: Maybe<Scalars['Float']['output']>;
   totalFollowing?: Maybe<Scalars['Float']['output']>;
   updatedAt?: Maybe<Scalars['DateTime']['output']>;
   username: Scalars['String']['output'];
};

export type ToggleLikeMutationVariables = Exact<{
   toggleLikeInput: ToggleLikeInput;
}>;

export type ToggleLikeMutation = {
   __typename?: 'Mutation';
   toggleLike: { __typename?: 'ToggleLikeOutput'; ok: boolean; error?: string | null; message?: string | null };
};

export type PhotoFragmentFragment = {
   __typename?: 'Photo';
   id: number;
   file: string;
   likes?: number | null;
   commentNumber?: number | null;
   isLiked?: boolean | null;
} & { ' $fragmentName'?: 'PhotoFragmentFragment' };

export type CommentFragmentFragment = {
   __typename?: 'Comment';
   id: number;
   payload: string;
   isMine: boolean;
   createdAt?: any | null;
   user?: { __typename?: 'User'; username: string; avatar?: string | null } | null;
} & { ' $fragmentName'?: 'CommentFragmentFragment' };

export type UserFragmentFragment = {
   __typename?: 'User';
   id: number;
   username: string;
   avatar?: string | null;
   isFollowing?: boolean | null;
   isMe?: boolean | null;
} & { ' $fragmentName'?: 'UserFragmentFragment' };

export type FeedPhotoFragmentFragment = ({
   __typename?: 'Photo';
   caption?: string | null;
   createdAt?: any | null;
   isMine?: boolean | null;
   user?: { __typename?: 'User'; id: number; username: string; avatar?: string | null } | null;
} & { ' $fragmentRefs'?: { PhotoFragmentFragment: PhotoFragmentFragment } }) & {
   ' $fragmentName'?: 'FeedPhotoFragmentFragment';
};

export type RoomPartsFragment = {
   __typename?: 'Room';
   id: number;
   unreadTotal?: number | null;
   users?: Array<{ __typename?: 'User'; id: number; avatar?: string | null; username: string }> | null;
} & { ' $fragmentName'?: 'RoomPartsFragment' };

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
   __typename?: 'Query';
   me: {
      __typename?: 'MeOutput';
      user?: { __typename?: 'User'; id: number; username: string; avatar?: string | null } | null;
   };
};

export type SeeFeedQueryVariables = Exact<{
   seeFeedInput: SeeFeedInput;
}>;

export type SeeFeedQuery = {
   __typename?: 'Query';
   seeFeed: {
      __typename?: 'SeeFeedOutput';
      ok: boolean;
      message?: string | null;
      error?: string | null;
      photos?: Array<
         {
            __typename?: 'Photo';
            caption?: string | null;
            createdAt?: any | null;
            isMine?: boolean | null;
            user?: { __typename?: 'User'; username: string; avatar?: string | null } | null;
            comments?: Array<
               { __typename?: 'Comment' } & { ' $fragmentRefs'?: { CommentFragmentFragment: CommentFragmentFragment } }
            > | null;
         } & { ' $fragmentRefs'?: { PhotoFragmentFragment: PhotoFragmentFragment } }
      > | null;
   };
};

export type SeeLikesQueryVariables = Exact<{
   seeLikesInput: SeeLikesInput;
}>;

export type SeeLikesQuery = {
   __typename?: 'Query';
   seeLikes: {
      __typename?: 'SeeLikesOutput';
      user?: Array<
         { __typename?: 'User' } & { ' $fragmentRefs'?: { UserFragmentFragment: UserFragmentFragment } }
      > | null;
   };
};

export type SeePhotoQueryVariables = Exact<{
   seePhotoInput: SeePhotoInput;
}>;

export type SeePhotoQuery = {
   __typename?: 'Query';
   seePhoto: {
      __typename?: 'SeePhotoOutput';
      ok: boolean;
      message?: string | null;
      error?: string | null;
      photo?:
         | ({
              __typename?: 'Photo';
              caption?: string | null;
              createdAt?: any | null;
              isMine?: boolean | null;
              user?: { __typename?: 'User'; username: string; avatar?: string | null } | null;
           } & { ' $fragmentRefs'?: { PhotoFragmentFragment: PhotoFragmentFragment } })
         | null;
   };
};

export type SendMessageMutationVariables = Exact<{
   payload: Scalars['String']['input'];
   roomId?: InputMaybe<Scalars['Float']['input']>;
   userId?: InputMaybe<Scalars['Float']['input']>;
}>;

export type SendMessageMutation = {
   __typename?: 'Mutation';
   sendMessage: { __typename?: 'SendMessageOutput'; ok: boolean; error?: string | null; message?: string | null };
};

export type SeeRoomQueryVariables = Exact<{
   id: Scalars['Float']['input'];
}>;

export type SeeRoomQuery = {
   __typename?: 'Query';
   seeRoom: {
      __typename?: 'SeeRoomOutput';
      ok: boolean;
      error?: string | null;
      message?: string | null;
      room?: {
         __typename?: 'Room';
         messages?: Array<{
            __typename?: 'Message';
            id: number;
            payload?: string | null;
            read?: boolean | null;
            user?: { __typename?: 'User'; username: string; avatar?: string | null } | null;
         }> | null;
      } | null;
   };
};

export type NewMessageFragment = {
   __typename?: 'Message';
   id: number;
   payload?: string | null;
   read?: boolean | null;
   user?: { __typename?: 'User'; username: string; avatar?: string | null } | null;
} & { ' $fragmentName'?: 'NewMessageFragment' };

export type SeeRoomsQueryVariables = Exact<{ [key: string]: never }>;

export type SeeRoomsQuery = {
   __typename?: 'Query';
   seeRooms: {
      __typename?: 'SeeRoomsOutput';
      ok: boolean;
      message?: string | null;
      error?: string | null;
      rooms?: Array<{ __typename?: 'Room' } & { ' $fragmentRefs'?: { RoomPartsFragment: RoomPartsFragment } }> | null;
   };
};

export type SearchPhotosQueryVariables = Exact<{
   input: SearchPhotosInput;
}>;

export type SearchPhotosQuery = {
   __typename?: 'Query';
   searchPhotos: {
      __typename?: 'SearchPhotosOutput';
      ok: boolean;
      error?: string | null;
      message?: string | null;
      photos?: Array<{ __typename?: 'Photo'; id: number; file: string }> | null;
   };
};

export type UploadPhotoMutationVariables = Exact<{
   file: Scalars['Upload']['input'];
   caption?: InputMaybe<Scalars['String']['input']>;
}>;

export type UploadPhotoMutation = {
   __typename?: 'Mutation';
   uploadPhoto: { __typename?: 'UploadPhotoOutput'; ok: boolean; error?: string | null; message?: string | null };
};

export type CreateUserMutationMutationVariables = Exact<{
   createUserInput: CreateUserInput;
}>;

export type CreateUserMutationMutation = {
   __typename?: 'Mutation';
   createUser: { __typename?: 'CreateUserOutput'; ok: boolean; error?: string | null };
};

export type LoginMutationMutationVariables = Exact<{
   loginInput: LoginInput;
}>;

export type LoginMutationMutation = {
   __typename?: 'Mutation';
   login: { __typename?: 'LoginOutput'; ok: boolean; error?: string | null; token?: string | null };
};

export type HealthCheckQueryVariables = Exact<{ [key: string]: never }>;

export type HealthCheckQuery = { __typename?: 'Query'; hi: { __typename?: 'CoreOutput'; ok: boolean } };

export const CommentFragmentFragmentDoc = {
   kind: 'Document',
   definitions: [
      {
         kind: 'FragmentDefinition',
         name: { kind: 'Name', value: 'CommentFragment' },
         typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Comment' } },
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               { kind: 'Field', name: { kind: 'Name', value: 'id' } },
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
                     ],
                  },
               },
               { kind: 'Field', name: { kind: 'Name', value: 'payload' } },
               { kind: 'Field', name: { kind: 'Name', value: 'isMine' } },
               { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
            ],
         },
      },
   ],
} as unknown as DocumentNode<CommentFragmentFragment, unknown>;
export const UserFragmentFragmentDoc = {
   kind: 'Document',
   definitions: [
      {
         kind: 'FragmentDefinition',
         name: { kind: 'Name', value: 'UserFragment' },
         typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               { kind: 'Field', name: { kind: 'Name', value: 'id' } },
               { kind: 'Field', name: { kind: 'Name', value: 'username' } },
               { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
               { kind: 'Field', name: { kind: 'Name', value: 'isFollowing' } },
               { kind: 'Field', name: { kind: 'Name', value: 'isMe' } },
            ],
         },
      },
   ],
} as unknown as DocumentNode<UserFragmentFragment, unknown>;
export const PhotoFragmentFragmentDoc = {
   kind: 'Document',
   definitions: [
      {
         kind: 'FragmentDefinition',
         name: { kind: 'Name', value: 'PhotoFragment' },
         typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Photo' } },
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               { kind: 'Field', name: { kind: 'Name', value: 'id' } },
               { kind: 'Field', name: { kind: 'Name', value: 'file' } },
               { kind: 'Field', name: { kind: 'Name', value: 'likes' } },
               { kind: 'Field', name: { kind: 'Name', value: 'commentNumber' } },
               { kind: 'Field', name: { kind: 'Name', value: 'isLiked' } },
            ],
         },
      },
   ],
} as unknown as DocumentNode<PhotoFragmentFragment, unknown>;
export const FeedPhotoFragmentFragmentDoc = {
   kind: 'Document',
   definitions: [
      {
         kind: 'FragmentDefinition',
         name: { kind: 'Name', value: 'FeedPhotoFragment' },
         typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Photo' } },
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               { kind: 'FragmentSpread', name: { kind: 'Name', value: 'PhotoFragment' } },
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
                     ],
                  },
               },
               { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
               { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
               { kind: 'Field', name: { kind: 'Name', value: 'isMine' } },
            ],
         },
      },
      {
         kind: 'FragmentDefinition',
         name: { kind: 'Name', value: 'PhotoFragment' },
         typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Photo' } },
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               { kind: 'Field', name: { kind: 'Name', value: 'id' } },
               { kind: 'Field', name: { kind: 'Name', value: 'file' } },
               { kind: 'Field', name: { kind: 'Name', value: 'likes' } },
               { kind: 'Field', name: { kind: 'Name', value: 'commentNumber' } },
               { kind: 'Field', name: { kind: 'Name', value: 'isLiked' } },
            ],
         },
      },
   ],
} as unknown as DocumentNode<FeedPhotoFragmentFragment, unknown>;
export const RoomPartsFragmentDoc = {
   kind: 'Document',
   definitions: [
      {
         kind: 'FragmentDefinition',
         name: { kind: 'Name', value: 'RoomParts' },
         typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Room' } },
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               { kind: 'Field', name: { kind: 'Name', value: 'id' } },
               { kind: 'Field', name: { kind: 'Name', value: 'unreadTotal' } },
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'users' },
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                     ],
                  },
               },
            ],
         },
      },
   ],
} as unknown as DocumentNode<RoomPartsFragment, unknown>;
export const NewMessageFragmentDoc = {
   kind: 'Document',
   definitions: [
      {
         kind: 'FragmentDefinition',
         name: { kind: 'Name', value: 'NewMessage' },
         typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Message' } },
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               { kind: 'Field', name: { kind: 'Name', value: 'id' } },
               { kind: 'Field', name: { kind: 'Name', value: 'payload' } },
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
                     ],
                  },
               },
               { kind: 'Field', name: { kind: 'Name', value: 'read' } },
            ],
         },
      },
   ],
} as unknown as DocumentNode<NewMessageFragment, unknown>;
export const ToggleLikeDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'mutation',
         name: { kind: 'Name', value: 'toggleLike' },
         variableDefinitions: [
            {
               kind: 'VariableDefinition',
               variable: { kind: 'Variable', name: { kind: 'Name', value: 'toggleLikeInput' } },
               type: {
                  kind: 'NonNullType',
                  type: { kind: 'NamedType', name: { kind: 'Name', value: 'ToggleLikeInput' } },
               },
            },
         ],
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'toggleLike' },
                  arguments: [
                     {
                        kind: 'Argument',
                        name: { kind: 'Name', value: 'input' },
                        value: { kind: 'Variable', name: { kind: 'Name', value: 'toggleLikeInput' } },
                     },
                  ],
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                     ],
                  },
               },
            ],
         },
      },
   ],
} as unknown as DocumentNode<ToggleLikeMutation, ToggleLikeMutationVariables>;
export const MeDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'query',
         name: { kind: 'Name', value: 'me' },
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'me' },
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        {
                           kind: 'Field',
                           name: { kind: 'Name', value: 'user' },
                           selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                 { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                 { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                                 { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
                              ],
                           },
                        },
                     ],
                  },
               },
            ],
         },
      },
   ],
} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const SeeFeedDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'query',
         name: { kind: 'Name', value: 'seeFeed' },
         variableDefinitions: [
            {
               kind: 'VariableDefinition',
               variable: { kind: 'Variable', name: { kind: 'Name', value: 'seeFeedInput' } },
               type: {
                  kind: 'NonNullType',
                  type: { kind: 'NamedType', name: { kind: 'Name', value: 'SeeFeedInput' } },
               },
            },
         ],
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'seeFeed' },
                  arguments: [
                     {
                        kind: 'Argument',
                        name: { kind: 'Name', value: 'input' },
                        value: { kind: 'Variable', name: { kind: 'Name', value: 'seeFeedInput' } },
                     },
                  ],
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                        {
                           kind: 'Field',
                           name: { kind: 'Name', value: 'photos' },
                           selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                 { kind: 'FragmentSpread', name: { kind: 'Name', value: 'PhotoFragment' } },
                                 {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                                          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
                                       ],
                                    },
                                 },
                                 { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
                                 { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                                 { kind: 'Field', name: { kind: 'Name', value: 'isMine' } },
                                 {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'comments' },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CommentFragment' } },
                                       ],
                                    },
                                 },
                              ],
                           },
                        },
                     ],
                  },
               },
            ],
         },
      },
      {
         kind: 'FragmentDefinition',
         name: { kind: 'Name', value: 'PhotoFragment' },
         typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Photo' } },
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               { kind: 'Field', name: { kind: 'Name', value: 'id' } },
               { kind: 'Field', name: { kind: 'Name', value: 'file' } },
               { kind: 'Field', name: { kind: 'Name', value: 'likes' } },
               { kind: 'Field', name: { kind: 'Name', value: 'commentNumber' } },
               { kind: 'Field', name: { kind: 'Name', value: 'isLiked' } },
            ],
         },
      },
      {
         kind: 'FragmentDefinition',
         name: { kind: 'Name', value: 'CommentFragment' },
         typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Comment' } },
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               { kind: 'Field', name: { kind: 'Name', value: 'id' } },
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
                     ],
                  },
               },
               { kind: 'Field', name: { kind: 'Name', value: 'payload' } },
               { kind: 'Field', name: { kind: 'Name', value: 'isMine' } },
               { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
            ],
         },
      },
   ],
} as unknown as DocumentNode<SeeFeedQuery, SeeFeedQueryVariables>;
export const SeeLikesDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'query',
         name: { kind: 'Name', value: 'seeLikes' },
         variableDefinitions: [
            {
               kind: 'VariableDefinition',
               variable: { kind: 'Variable', name: { kind: 'Name', value: 'seeLikesInput' } },
               type: {
                  kind: 'NonNullType',
                  type: { kind: 'NamedType', name: { kind: 'Name', value: 'SeeLikesInput' } },
               },
            },
         ],
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'seeLikes' },
                  arguments: [
                     {
                        kind: 'Argument',
                        name: { kind: 'Name', value: 'input' },
                        value: { kind: 'Variable', name: { kind: 'Name', value: 'seeLikesInput' } },
                     },
                  ],
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        {
                           kind: 'Field',
                           name: { kind: 'Name', value: 'user' },
                           selectionSet: {
                              kind: 'SelectionSet',
                              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserFragment' } }],
                           },
                        },
                     ],
                  },
               },
            ],
         },
      },
      {
         kind: 'FragmentDefinition',
         name: { kind: 'Name', value: 'UserFragment' },
         typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               { kind: 'Field', name: { kind: 'Name', value: 'id' } },
               { kind: 'Field', name: { kind: 'Name', value: 'username' } },
               { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
               { kind: 'Field', name: { kind: 'Name', value: 'isFollowing' } },
               { kind: 'Field', name: { kind: 'Name', value: 'isMe' } },
            ],
         },
      },
   ],
} as unknown as DocumentNode<SeeLikesQuery, SeeLikesQueryVariables>;
export const SeePhotoDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'query',
         name: { kind: 'Name', value: 'seePhoto' },
         variableDefinitions: [
            {
               kind: 'VariableDefinition',
               variable: { kind: 'Variable', name: { kind: 'Name', value: 'seePhotoInput' } },
               type: {
                  kind: 'NonNullType',
                  type: { kind: 'NamedType', name: { kind: 'Name', value: 'SeePhotoInput' } },
               },
            },
         ],
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'seePhoto' },
                  arguments: [
                     {
                        kind: 'Argument',
                        name: { kind: 'Name', value: 'input' },
                        value: { kind: 'Variable', name: { kind: 'Name', value: 'seePhotoInput' } },
                     },
                  ],
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                        {
                           kind: 'Field',
                           name: { kind: 'Name', value: 'photo' },
                           selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                 { kind: 'FragmentSpread', name: { kind: 'Name', value: 'PhotoFragment' } },
                                 {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                                          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
                                       ],
                                    },
                                 },
                                 { kind: 'Field', name: { kind: 'Name', value: 'caption' } },
                                 { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                                 { kind: 'Field', name: { kind: 'Name', value: 'isMine' } },
                              ],
                           },
                        },
                     ],
                  },
               },
            ],
         },
      },
      {
         kind: 'FragmentDefinition',
         name: { kind: 'Name', value: 'PhotoFragment' },
         typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Photo' } },
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               { kind: 'Field', name: { kind: 'Name', value: 'id' } },
               { kind: 'Field', name: { kind: 'Name', value: 'file' } },
               { kind: 'Field', name: { kind: 'Name', value: 'likes' } },
               { kind: 'Field', name: { kind: 'Name', value: 'commentNumber' } },
               { kind: 'Field', name: { kind: 'Name', value: 'isLiked' } },
            ],
         },
      },
   ],
} as unknown as DocumentNode<SeePhotoQuery, SeePhotoQueryVariables>;
export const SendMessageDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'mutation',
         name: { kind: 'Name', value: 'sendMessage' },
         variableDefinitions: [
            {
               kind: 'VariableDefinition',
               variable: { kind: 'Variable', name: { kind: 'Name', value: 'payload' } },
               type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
            },
            {
               kind: 'VariableDefinition',
               variable: { kind: 'Variable', name: { kind: 'Name', value: 'roomId' } },
               type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } },
            },
            {
               kind: 'VariableDefinition',
               variable: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
               type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } },
            },
         ],
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sendMessage' },
                  arguments: [
                     {
                        kind: 'Argument',
                        name: { kind: 'Name', value: 'input' },
                        value: {
                           kind: 'ObjectValue',
                           fields: [
                              {
                                 kind: 'ObjectField',
                                 name: { kind: 'Name', value: 'payload' },
                                 value: { kind: 'Variable', name: { kind: 'Name', value: 'payload' } },
                              },
                              {
                                 kind: 'ObjectField',
                                 name: { kind: 'Name', value: 'roomId' },
                                 value: { kind: 'Variable', name: { kind: 'Name', value: 'roomId' } },
                              },
                              {
                                 kind: 'ObjectField',
                                 name: { kind: 'Name', value: 'userId' },
                                 value: { kind: 'Variable', name: { kind: 'Name', value: 'userId' } },
                              },
                           ],
                        },
                     },
                  ],
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                     ],
                  },
               },
            ],
         },
      },
   ],
} as unknown as DocumentNode<SendMessageMutation, SendMessageMutationVariables>;
export const SeeRoomDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'query',
         name: { kind: 'Name', value: 'seeRoom' },
         variableDefinitions: [
            {
               kind: 'VariableDefinition',
               variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
               type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } } },
            },
         ],
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'seeRoom' },
                  arguments: [
                     {
                        kind: 'Argument',
                        name: { kind: 'Name', value: 'input' },
                        value: {
                           kind: 'ObjectValue',
                           fields: [
                              {
                                 kind: 'ObjectField',
                                 name: { kind: 'Name', value: 'id' },
                                 value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                              },
                           ],
                        },
                     },
                  ],
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                        {
                           kind: 'Field',
                           name: { kind: 'Name', value: 'room' },
                           selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                 {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'messages' },
                                    selectionSet: {
                                       kind: 'SelectionSet',
                                       selections: [
                                          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                          { kind: 'Field', name: { kind: 'Name', value: 'payload' } },
                                          {
                                             kind: 'Field',
                                             name: { kind: 'Name', value: 'user' },
                                             selectionSet: {
                                                kind: 'SelectionSet',
                                                selections: [
                                                   { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                                                   { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
                                                ],
                                             },
                                          },
                                          { kind: 'Field', name: { kind: 'Name', value: 'read' } },
                                       ],
                                    },
                                 },
                              ],
                           },
                        },
                     ],
                  },
               },
            ],
         },
      },
   ],
} as unknown as DocumentNode<SeeRoomQuery, SeeRoomQueryVariables>;
export const SeeRoomsDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'query',
         name: { kind: 'Name', value: 'seeRooms' },
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'seeRooms' },
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                        {
                           kind: 'Field',
                           name: { kind: 'Name', value: 'rooms' },
                           selectionSet: {
                              kind: 'SelectionSet',
                              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'RoomParts' } }],
                           },
                        },
                     ],
                  },
               },
            ],
         },
      },
      {
         kind: 'FragmentDefinition',
         name: { kind: 'Name', value: 'RoomParts' },
         typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Room' } },
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               { kind: 'Field', name: { kind: 'Name', value: 'id' } },
               { kind: 'Field', name: { kind: 'Name', value: 'unreadTotal' } },
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'users' },
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                     ],
                  },
               },
            ],
         },
      },
   ],
} as unknown as DocumentNode<SeeRoomsQuery, SeeRoomsQueryVariables>;
export const SearchPhotosDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'query',
         name: { kind: 'Name', value: 'searchPhotos' },
         variableDefinitions: [
            {
               kind: 'VariableDefinition',
               variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
               type: {
                  kind: 'NonNullType',
                  type: { kind: 'NamedType', name: { kind: 'Name', value: 'SearchPhotosInput' } },
               },
            },
         ],
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'searchPhotos' },
                  arguments: [
                     {
                        kind: 'Argument',
                        name: { kind: 'Name', value: 'input' },
                        value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
                     },
                  ],
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                        {
                           kind: 'Field',
                           name: { kind: 'Name', value: 'photos' },
                           selectionSet: {
                              kind: 'SelectionSet',
                              selections: [
                                 { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                 { kind: 'Field', name: { kind: 'Name', value: 'file' } },
                              ],
                           },
                        },
                     ],
                  },
               },
            ],
         },
      },
   ],
} as unknown as DocumentNode<SearchPhotosQuery, SearchPhotosQueryVariables>;
export const UploadPhotoDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'mutation',
         name: { kind: 'Name', value: 'uploadPhoto' },
         variableDefinitions: [
            {
               kind: 'VariableDefinition',
               variable: { kind: 'Variable', name: { kind: 'Name', value: 'file' } },
               type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Upload' } } },
            },
            {
               kind: 'VariableDefinition',
               variable: { kind: 'Variable', name: { kind: 'Name', value: 'caption' } },
               type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
            },
         ],
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'uploadPhoto' },
                  arguments: [
                     {
                        kind: 'Argument',
                        name: { kind: 'Name', value: 'input' },
                        value: {
                           kind: 'ObjectValue',
                           fields: [
                              {
                                 kind: 'ObjectField',
                                 name: { kind: 'Name', value: 'photoFile' },
                                 value: { kind: 'Variable', name: { kind: 'Name', value: 'file' } },
                              },
                              {
                                 kind: 'ObjectField',
                                 name: { kind: 'Name', value: 'caption' },
                                 value: { kind: 'Variable', name: { kind: 'Name', value: 'caption' } },
                              },
                           ],
                        },
                     },
                  ],
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                     ],
                  },
               },
            ],
         },
      },
   ],
} as unknown as DocumentNode<UploadPhotoMutation, UploadPhotoMutationVariables>;
export const CreateUserMutationDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'mutation',
         name: { kind: 'Name', value: 'createUserMutation' },
         variableDefinitions: [
            {
               kind: 'VariableDefinition',
               variable: { kind: 'Variable', name: { kind: 'Name', value: 'createUserInput' } },
               type: {
                  kind: 'NonNullType',
                  type: { kind: 'NamedType', name: { kind: 'Name', value: 'CreateUserInput' } },
               },
            },
         ],
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'createUser' },
                  arguments: [
                     {
                        kind: 'Argument',
                        name: { kind: 'Name', value: 'input' },
                        value: { kind: 'Variable', name: { kind: 'Name', value: 'createUserInput' } },
                     },
                  ],
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                     ],
                  },
               },
            ],
         },
      },
   ],
} as unknown as DocumentNode<CreateUserMutationMutation, CreateUserMutationMutationVariables>;
export const LoginMutationDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'mutation',
         name: { kind: 'Name', value: 'loginMutation' },
         variableDefinitions: [
            {
               kind: 'VariableDefinition',
               variable: { kind: 'Variable', name: { kind: 'Name', value: 'loginInput' } },
               type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'LoginInput' } } },
            },
         ],
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'login' },
                  arguments: [
                     {
                        kind: 'Argument',
                        name: { kind: 'Name', value: 'input' },
                        value: { kind: 'Variable', name: { kind: 'Name', value: 'loginInput' } },
                     },
                  ],
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [
                        { kind: 'Field', name: { kind: 'Name', value: 'ok' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                        { kind: 'Field', name: { kind: 'Name', value: 'token' } },
                     ],
                  },
               },
            ],
         },
      },
   ],
} as unknown as DocumentNode<LoginMutationMutation, LoginMutationMutationVariables>;
export const HealthCheckDocument = {
   kind: 'Document',
   definitions: [
      {
         kind: 'OperationDefinition',
         operation: 'query',
         name: { kind: 'Name', value: 'healthCheck' },
         selectionSet: {
            kind: 'SelectionSet',
            selections: [
               {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hi' },
                  selectionSet: {
                     kind: 'SelectionSet',
                     selections: [{ kind: 'Field', name: { kind: 'Name', value: 'ok' } }],
                  },
               },
            ],
         },
      },
   ],
} as unknown as DocumentNode<HealthCheckQuery, HealthCheckQueryVariables>;
