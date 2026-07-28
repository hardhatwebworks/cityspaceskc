import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export const SITE_URL = "https://cityspaceskc.com";

interface SeoProps {
  title: string;
  description: string;
  /** Set true for pages that should not be indexed (e.g. 404). */
  noindex?: boolean;
  image?: string;
}

/**
 * Renders per-page head metadata with a self-referencing canonical URL
 * derived from the current route path (non-www preferred domain).
 */
const Seo = ({ title, description, noindex = false, image }: SeoProps) => {
  const { pathname } = useLocation();

  // Normalize: strip trailing slash except for the homepage.
  const path =
    pathname === "/" ? "/" : pathname.replace(/\/+$/, "") || "/";
  const canonical = `${SITE_URL}${path}`;
  const ogImage = image ?? `${SITE_URL}/favicon.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default Seo;
