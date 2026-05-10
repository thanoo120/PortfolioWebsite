/**
 * Medium — set MEDIUM_USERNAME to your @handle (no @ prefix).
 * Latest posts load from Medium’s RSS via a public JSON API; if that fails,
 * MEDIUM_ARTICLES_FALLBACK is shown instead.
 */
export const MEDIUM_USERNAME = 'thanoo120';

/** Shown when the feed cannot be loaded. Add manual entries here if you prefer not to use RSS. */
export const MEDIUM_ARTICLES_FALLBACK = [];

export const mediumProfileUrl = () =>
  MEDIUM_USERNAME
    ? `https://medium.com/@${MEDIUM_USERNAME}`
    : 'https://medium.com';
