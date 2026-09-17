import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, type = "website" }) {
  const defaultTitle = "Surajit | Front-End Developer";
  const defaultDescription = "Creative Front-End Developer specializing in building immersive and interactive web experiences.";

  const seoTitle = title ? `${title} | Surajit` : defaultTitle;
  const seoDescription = description || defaultDescription;

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
    </Helmet>
  );
}
