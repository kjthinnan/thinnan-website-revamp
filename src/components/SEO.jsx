import { Helmet } from 'react-helmet';

/**
 * SEO component for managing all document head metadata
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.keywords - Page keywords
 * @param {string} props.image - Social sharing image URL
 * @param {string} props.url - Canonical URL
 * @param {Object} props.structuredData - Optional structured data object
 * @returns {JSX.Element} - Helmet component with SEO metadata
 */
const SEO = ({ 
  title = 'Thinnan – Social Food Network | Cook Together, Share Recipes, Make Friends',
  description = 'Join Thinnan, the social food network where you can cook together, share recipes, make friends, and discover amazing culinary experiences.',
  keywords = 'thinnan, social food network, food social media, community, food, happiness, friends, cooking together, recipes, cooking videos',
  image = '/src/assets/images/thinnan-social-share.png',
  url = 'https://thinnan.com',
  structuredData = null
}) => {
  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured data if provided */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 