type UserInfoTypes = {
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
};

export const USER_INFO = ({
  public_repos,
  followers,
  following,
  public_gists,
}: UserInfoTypes) => [
  {
    id: 1,
    icon: <i className="far fa-list-alt"></i>,
    label: "repos",
    value: public_repos,
    color: "red",
  },
  {
    id: 2,
    icon: <i className="fas fa-users"></i>,
    label: "followers",
    value: followers,
    color: "green",
  },
  {
    id: 3,
    icon: <i className="fas fa-user-plus"></i>,
    label: "following",
    value: following,
    color: "blue",
  },
  {
    id: 4,
    icon: <i className="far fa-caret-square-up"></i>,
    label: "gists",
    value: public_gists,
    color: "yellow",
  },
];
