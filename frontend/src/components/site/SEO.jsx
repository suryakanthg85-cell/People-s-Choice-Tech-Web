import { Helmet } from "react-helmet-async";

// Core Company Information (Edit these details to match your exact data)
const COMPANY = {
  name: "People's Choice Tech",
  legalName: "Jivyagiri Enterprises Pvt. Ltd.",
  url: "https://peopleschoice.tech",
  logo: "https://peopleschoice.tech/logo.png",
  image: "https://peopleschoice.tech/images/og-image-1200x630.png",
  email: "hello@peopleschoice.tech",
  phone: "+91-8275439584", 
  description:
    "People's Choice Tech helps startups and enterprises build AI solutions, SaaS products, websites, mobile apps, ERP, CRM, cloud platforms, DevOps, and dedicated development teams worldwide.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "304, Hazel One",
    addressLocality: "Hinjewadi Phase 1, Pune",
    addressRegion: "MH",
    postalCode: "411057", 
    addressCountry: "IN",
  },
  geo: {
    latitude: "18.5204",
    longitude: "73.8567",
  },
  founders: [
    {
      "@type": "Person",
      name: "Gopal Giri"
    },
    {
      "@type": "Person",
      name: "Divya Bharti"
    }
  ],
    
  socials: [
    "https://www.linkedin.com/company/people-s-choice-tech/",
    "https://www.facebook.com/profile.php?id=61584707083007",
    "https://www.instagram.com/trackthebreach/",
    "https://x.com/people_s_choice",
    "https://www.youtube.com/channel/UC8Obrexiq8OxyR6VcVtpoyA",
  ],
};

const DEFAULT_KEYWORDS = `
AI Development Company,
Free website,
Free Mobile App Development,
Track The Breach,
Trackthebreach,
Dot Net,
.net,
Dot Net Development,
Free Maintenance,
Free Website Development,
Budget Friendly Software,
Best Software Company in Pune,
Track The Breach Development,
SaaS Development,
WordPress Development,
Dotnet Development,
.NET Development,
Free App Development,
Software Development Company,
Custom Software Development,
Website Development,
Web Development,
Mobile App Development,
React Development,
Next.js Development,
Node.js Development,
Python Development,
Cloud Consulting,
AWS,
Azure,
Google Cloud,
DevOps,
ERP Development,
CRM Development,
IT Consulting,
IT Outsourcing,
Dedicated Developers,
Staff Augmentation,
Enterprise Software,
Healthcare Software,
FinTech Software,
Retail Software,
Ecommerce Development,
Product Development,
Generative AI,
LLM Development,
AI Chatbots,
AI Agents,
Automation,
Digital Transformation,
India,
Pune,
Mumbai,
Bangalore,
USA,
UK
`;

export default function SEO({
  title,
  description = COMPANY.description,
  keywords = DEFAULT_KEYWORDS,
  image = COMPANY.image,
  url = COMPANY.url,
  type = "website",
  author = COMPANY.name,
  breadcrumbs = null, // Array: [{ name: "Home", url: "/" }, { name: "Services", url: "/services" }]
  faqs = null, // Array: [{ question: "...", answer: "..." }]
  serviceInfo = null, // Object: { name: "AI Development", description: "...", serviceType: "Software Development" }
  articleInfo = null, // Object: { datePublished: "...", dateModified: "...", authorName: "..." }
}) {
  // Format Title Dynamically
  const formattedTitle = title
    ? `${title} | Software, Website, App & AI Product Development Company`
    : `${COMPANY.name} | Software, Website, App & AI Product Development Company`;

  // Base Schemas that apply to every page
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: COMPANY.name,
      url: COMPANY.url,
      potentialAction: {
        "@type": "SearchAction",
        target: `${COMPANY.url}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: COMPANY.name,
      legalName: COMPANY.legalName,
      url: COMPANY.url,
      logo: COMPANY.logo,
      founders: COMPANY.founders,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: COMPANY.phone,
        email: COMPANY.email,
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: COMPANY.socials,
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareCompany", // Alternatively LocalBusiness or SoftwareCompany extension
      additionalType: "http://www.productontology.org/id/Software_company",
      name: COMPANY.name,
      image: COMPANY.logo,
      url: COMPANY.url,
      telephone: COMPANY.phone,
      address: COMPANY.address,
      geo: {
        "@type": "GeoCoordinates",
        latitude: COMPANY.geo.latitude,
        longitude: COMPANY.geo.longitude,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
  ];

  // Dynamically Inject Breadcrumbs Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: `${COMPANY.url}${crumb.url}`,
      })),
    });
  }

  // Dynamically Inject FAQ Schema
  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  // Dynamically Inject Service Schema
  if (serviceInfo) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: serviceInfo.serviceType || "IT Service",
      name: serviceInfo.name,
      description: serviceInfo.description || description,
      provider: {
        "@type": "Organization",
        name: COMPANY.name,
      },
      areaServed: [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "Country",
          "name": "United States"
        },
        {
          "@type": "Country",
          "name": "United Kingdom"
        },
        {
          "@type": "Country",
          "name": "Canada"
        },
        {
          "@type": "Country",
          "name": "Australia"
        }
      ]
    });
  }

  // Dynamically Inject Article/Blog Schema
  if (articleInfo) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      image: image,
      author: {
        "@type": "Person",
        name: articleInfo.authorName || author,
      },
      publisher: {
        "@type": "Organization",
        name: COMPANY.name,
        logo: {
          "@type": "ImageObject",
          url: COMPANY.logo,
        },
      },
      datePublished: articleInfo.datePublished,
      dateModified: articleInfo.dateModified || articleInfo.datePublished,
    });
  }

  return (
    <Helmet>
      {/* 1. Basic HTML Meta Tags */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <meta name="theme-color" content="#0f172a" />
      <meta
        name="google-site-verification"
        content="USJPmqXjykySDxiC__7NKXTbAk_dw84VCKtf2ZcYjqc"
      />

      {/* 2. Crawling & Indexing */}
      <meta name="robots" content="index,follow,max-image-preview:large" />
      <meta name="googlebot" content="index,follow" />
      
      {/* 3. Authorship */}
      <meta name="author" content={author} />
      <meta name="publisher" content={COMPANY.name} />

      {/* 4. Open Graph / Facebook */}
      <meta property="og:site_name" content={COMPANY.name} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* 5. Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@peopleschoicetech" />
      <meta name="twitter:creator" content="@peopleschoicetech" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* 6. Geo Targeting (Pune, India) */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Pune" />
      <meta name="ICBM" content={`${COMPANY.geo.latitude}, ${COMPANY.geo.longitude}`} />

      {/* 7. Performance & Assets */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <link rel="preload" as="image" href="/logo.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />

      <meta httpEquiv="content-language" content="en" />

      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="application-name" content="People's Choice Tech" />
      <meta name="apple-mobile-web-app-title" content="People's Choice Tech" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* 8. JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemas)}
      </script>
    </Helmet>
  );
}
