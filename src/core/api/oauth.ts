import { OAuthConfig } from '../types';

/**
 * Generates a Yshi OIDC authorization URL for passwordless login.
 * See: https://docs.yshi.co/oauth
 */
export function getAuthorizationUrl(config: OAuthConfig): string {
  const params = new URLSearchParams({
    client_id: config.clientId,
    redirect_uri: config.redirectUri,
    scope: config.scopes.join(' '),
    response_type: 'code',
  });
  return `https://auth.yshi.co/oauth/authorize?${params.toString()}`;
}

export async function exchangeCodeForToken(
  code: string,
  config: OAuthConfig
): Promise<{ accessToken: string; refreshToken: string }> {
  // POST https://auth.yshi.co/oauth/token
  void code, config;
  return { accessToken: '', refreshToken: '' };
}
