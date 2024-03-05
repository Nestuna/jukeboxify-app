import { getToken } from "./auth";

const baseUrl = "https://api.spotify.com/v1";

type requestArgs = {
  route: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  params?: Record<string, string>;
  body?: URLSearchParams;
  headers?: Record<string, string>
};
const request = async ({ method, route, params, body, headers }: requestArgs) => {
  try {
    const res = await fetch(`${baseUrl}${route}${params ?? "?" + params}`,{
      method,
      body,
      headers,
    });
    return await res.json()
  } catch (e) {
    throw new Error(e as string)
  }
};

export const getQueue = async () => {
  const res = request({ route: "/me/player/queue", headers: { 'Authorization': `Bearer ${getToken()}` }});
};
