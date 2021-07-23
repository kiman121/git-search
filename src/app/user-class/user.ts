export class User {
  constructor(
    public username: string,
    public avatarUrl: string,
    public bio: string,
    public location: string,
    public publicRepos: number,
    public followers: number,
    public following: number,
    public createdAt: string
  ) {}
}
