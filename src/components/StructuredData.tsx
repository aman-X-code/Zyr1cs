export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zyr1cs",
    "url": "https://zyr1cs.com",
    "logo": "https://res.cloudinary.com/dave3np5n/image/upload/v1762159871/white_in5rof.png",
    "description": "Leading digital agency specializing in web development, mobile applications, AI automation, and cloud services",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9039242458",
      "email": "aamankhanna1112@gmail.com",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://github.com/aman-X-code",
      "https://www.linkedin.com/in/aman-khanna-82715b200/",
      "https://www.instagram.com/aman.kkhanna/"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Zyr1cs",
    "image": "https://res.cloudinary.com/dave3np5n/image/upload/v1762159871/white_in5rof.png",
    "@id": "https://zyr1cs.com",
    "url": "https://zyr1cs.com",
    "telephone": "+91-9039242458",
    "priceRange": "$$-$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Delhi"
      },
      {
        "@type": "City",
        "name": "Mumbai"
      },
      {
        "@type": "City",
        "name": "Bangalore"
      },
      {
        "@type": "City",
        "name": "Hyderabad"
      },
      {
        "@type": "City",
        "name": "Pune"
      },
      {
        "@type": "City",
        "name": "Chennai"
      },
      {
        "@type": "City",
        "name": "Kolkata"
      },
      {
        "@type": "City",
        "name": "New York"
      },
      {
        "@type": "City",
        "name": "San Francisco"
      },
      {
        "@type": "City",
        "name": "Los Angeles"
      },
      {
        "@type": "City",
        "name": "Chicago"
      },
      {
        "@type": "City",
        "name": "Austin"
      },
      {
        "@type": "City",
        "name": "Seattle"
      },
      {
        "@type": "City",
        "name": "Boston"
      },
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.7041,
      "longitude": 77.1025
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Services",
    "provider": {
      "@type": "Organization",
      "name": "Zyr1cs"
    },
    "areaServed": [
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
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom web development using React, Next.js, and modern frameworks"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native iOS and Android apps using React Native and Flutter"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Automation",
            "description": "AI-powered automation solutions using GPT, Claude, and custom models"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Services",
            "description": "Cloud infrastructure on AWS, Azure, and GCP with DevOps"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zyr1cs",
    "url": "https://zyr1cs.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://zyr1cs.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
