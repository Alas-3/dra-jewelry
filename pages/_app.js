import "@/styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const Localbusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "DRA Jewelry",
    alternateName: ["DRA Jewelry Shop"],
    logo: [
      "https://dra-jewelry.vercel.app/favicon.ico",
    ],
    image: "https://dra-jewelry.vercel.app/favicon.ico",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Meycauayan, Bulacan",
      addressLocality: "Meycauayan",
      addressRegion: "Bulacan",
      postalCode: "3020",
      addressCountry: "PH",
    },
    url: "https://dra-jewelry.vercel.app",
    description:
      "Crafting exquisite, custom-made jewelry for those who appreciate the finest things in life. Our passion for perfection shines through in every piece we create.",
    priceRange: "$$",
    telephone: "Reach me thru email araniegopao12@gmail.com",
    sameAs: [
      "https://www.facebook.com/DraJewelryShop29",
    ],
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DRA Jewelry",
    alternateName: ["DRA Jewelry Shop"],
    url: "https://dra-jewelry.vercel.app",
    sameAs: [
      "https://www.facebook.com/DraJewelryShop29",
    ],
    logo: [
      "https://dra-jewelry.vercel.app/favicon.ico",
    ],
    description:
      "Crafting exquisite, custom-made jewelry for those who appreciate the finest things in life. Our passion for perfection shines through in every piece we create.",
    email: "araniegopao12@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Meycauayan, Bulacan",
      addressLocality: "Meycauayan",
      addressRegion: "Bulacan",
      postalCode: "3020",
      addressCountry: "PH",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DRA Jewelry",
    alternateName: [
      "DRA Jewelry Shop",
    ],
    description:
      "Crafting exquisite, custom-made jewelry for those who appreciate the finest things in life. Our passion for perfection shines through in every piece we create.",
    url: "https://dra-jewelry.vercel.app/",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://dra-jewelry.vercel.app/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    sameAs: [
      "https://www.facebook.com/DraJewelryShop29",
    ],
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://dra-jewelry.vercel.app/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gallery",
        item: "https://dra-jewelry.vercel.app/gallery",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About",
        item: "https://dra-jewelry.vercel.app/aboutus",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://dra-jewelry.vercel.app/contact",
      },
    ],
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://dra-jewelry.vercel.app/",
    url: "https://dra-jewelry.vercel.app/",
    name: "DRA Jewelry Shop",
    description:
      "Crafting exquisite, custom-made jewelry for those who appreciate the finest things in life. Our passion for perfection shines through in every piece we create.",
    inLanguage: "en",
    mainEntityOfPage: "https://dra-jewelry.vercel.app/",
    image: {
      "@type": "ImageObject",
      url: "https://dra-jewelry.vercel.app/favicon.ico",
      height: 800,
      width: 1200,
    },
    sameAs: [
      "https://www.facebook.com/DraJewelryShop29",
    ],
  };

  return (
    <>
      <Head>
        {/* JSON-LD Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(Localbusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
        />
      </Head>
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;