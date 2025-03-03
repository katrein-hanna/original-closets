/* eslint-disable react/prop-types */
// import React from "react";

export default function SEO({
  title = "Default Title",
  description = "Default description",
  keywords = "closets",
  image = "/default-image.jpg",
  url = "https://example.com",
  structuredData,
  favicon,
}) {
  return (
    <>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph Meta Tags (for Facebook, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Original Closets" />

      {/* Twitter Card Meta Tags (for Twitter preview) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@mytwitter" />
      <meta name="twitter:creator" content="@mytwitter" />

      {/* Canonical URL (Prevents duplicate content issues) */}
      {url && <link rel="canonical" href={url} />}

      {/* Favicon */}
      {favicon && <link rel="icon" href={favicon} />}

      {/* JSON-LD Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </>
  );
}
