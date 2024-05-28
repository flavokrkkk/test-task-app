import { ServiceApi } from "./serviceApi";

export const authorizeUserAsync = async (
  username: string,
  password: string
) => {
  const { data } = await ServiceApi.authorizeUserAsync(username, password);
  localStorage.setItem("token", data.data.token);
  return data.data;
};
