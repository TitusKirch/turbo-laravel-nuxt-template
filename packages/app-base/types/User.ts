type UserData = {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
};
type UserResponse = ApiResourceResponse<UserData>;

type User = Omit<UserData, 'created_at' | 'updated_at'> & {
  createdAt: Date;
  updatedAt: Date;
};

type UserMeExtraData = {
  email_verified_at: string | null;
};
type UserMeData = UserData & UserMeExtraData;
type UserMeResponse = ApiResourceResponse<UserMeData>;

type UserMe = User &
  Omit<UserMeExtraData, 'email_verified_at'> & {
    emailVerifiedAt: Date | null;
  };
