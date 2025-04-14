const SERVER_ORIGIN = 'https://openai-token-manager.vercel.app';

export default async function fetchDemoToken(appId: string | number) {
  const response = await fetch(`${SERVER_ORIGIN}/api/token?app_id=${appId}`);
  const json = (await response.json()) as { token: string };

  return json.token;
}
