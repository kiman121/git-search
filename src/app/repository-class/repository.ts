export class Repository {
  constructor(
    public name: string,
    public description: string,
    public createdAt: string,
    public forks: number,
    public stars: number
  ) {}
}
