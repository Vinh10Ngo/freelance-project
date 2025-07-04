export interface JwtPayload {
  sub: string; // hoặc _id
  email: string;
  role: string;
}
