export type CraftPoint = {
  label: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  year: string;
  heroImage: string;
  overview: string;
  fullWidthImage: string;
  brand: string;
  experience: string;
  responsive: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  detailImage: string;
  craft: CraftPoint[];
  obsessedOver: string;
  outcome: string;
  testimonial: Testimonial;
  gallery: string[];
  nextSlug: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "elda",
    name: "ELDA",
    tagline: "A premium shopping experience for a heritage textile brand.",
    year: "2024",
    heroImage: "/work/elda.png",
    overview:
      "ELDA, a sub-brand of Ambrins Fabrics, approached us to bring their handcrafted block-printed textiles online: a shopping experience that needed to feel as considered as the fabric itself, without slowing down a catalog of hundreds of patterns.",
    fullWidthImage: "/work/elda-shop.png",
    brand:
      "Founded in 2024 and based in Colombo, ELDA specializes in authentic block-printed, eco-friendly fabrics sourced directly from India, with Bagru, Sanganeri, Ajrakh, Indigo, and Dabu among the traditional techniques behind every piece. The name stands for Empowerment through Legacy, Design and Artistry: a brand built on craft history, not fast fashion.",
    experience:
      "Customers shop for fabric differently than they shop for anything else: by pattern, by technique, by the meter. We organized the catalog around Fabrics, Clothing, Home and Bedding, and Accessories, and let large, honest product photography do the work instead of dense description. Browsing hundreds of patterns needed to feel calm, not overwhelming.",
    responsive: {
      desktop: "/work/elda-desktop.png",
      tablet: "/work/elda-tablet.png",
      mobile: "/work/elda-mobile.png",
    },
    detailImage: "/work/elda-about.png",
    craft: [
      {
        label: "Typography",
        description:
          "An editorial serif for the wordmark and headlines, paired with a clean, restrained sans for everything a customer actually has to read: pricing, categories, checkout.",
      },
      {
        label: "Spacing",
        description:
          "Product photography given room to breathe. On a catalog this size, restraint is what keeps browsing calm instead of noisy.",
      },
      {
        label: "Motion",
        description:
          "Kept deliberately quiet. The craft on display is in the textiles, not the interface.",
      },
      {
        label: "Accessibility",
        description:
          "Clear category structure and legible type at every size, so the site works as well on a first visit as a hundredth.",
      },
    ],
    obsessedOver:
      "The hover state on each fabric swatch reveals a tighter, second crop of the weave, a small detail that helps translate texture through a screen.",
    outcome:
      "ELDA now has a shopping experience that matches the quality of what they make: easy for the team to manage, and considered enough to hold its own next to the craft in every product photo.",
    testimonial: {
      quote:
        "He really took the time to understand what I wanted. I loved how he did his own research and came up with something so visually attractive and well thought out.",
      name: "Ambrin Uwais",
      role: "Ambrins Fabrics",
    },
    gallery: ["/work/elda.png", "/work/elda-shop.png", "/work/elda-about.png"],
    nextSlug: "the-balanced-pantry",
  },
  {
    slug: "the-balanced-pantry",
    name: "The Balanced Pantry",
    tagline: "A confident launch for a single hero product.",
    year: "2025",
    heroImage: "/work/thebalancedpantry.png",
    overview:
      "The Balanced Pantry came to us with one product, freeze-dried strawberries, and a simple brief: make a single-SKU launch feel like the start of a real pantry brand, not a one-off snack sale.",
    fullWidthImage: "/work/thebalancedpantry-shop.png",
    brand:
      "Launched in 2025, The Balanced Pantry sells flash-frozen, freeze-dried fruit that's crunchy, nutrient-locked, and free of the guilt that usually comes with snacking. The catalog today is intentionally small: a retail pack, a bulk wholesale option for resellers, and more flavors already signposted as coming next.",
    experience:
      "With only one flavor live at launch, the site's job was to make a single product feel like a considered range. Tiered bundle pricing (1, 3, and 6 packs), a bulk wholesale listing for resellers, and a set of serving ideas (snack it solo, stir it into breakfast, bake it into batter) turn one SKU into several reasons to buy.",
    responsive: {
      desktop: "/work/thebalancedpantry-desktop.png",
      tablet: "/work/thebalancedpantry-tablet.png",
      mobile: "/work/thebalancedpantry-mobile.png",
    },
    detailImage: "/work/thebalancedpantry-product.png",
    craft: [
      {
        label: "Typography",
        description:
          "A bold, confident display face for the brand voice, paired with a plain-spoken sans everywhere pricing and bundles need to be read at a glance.",
      },
      {
        label: "Spacing",
        description:
          "A near-empty shop page by design. Nothing padded out to look busier than it is. Honesty about a small catalog reads as confidence, not shortage.",
      },
      {
        label: "Motion",
        description: "Reserved for product photography only. The crunch and color of the fruit do the persuading.",
      },
      {
        label: "Accessibility",
        description:
          "Bundle pricing and savings stated in plain LKR figures at every step, with no hidden calculations before checkout.",
      },
    ],
    obsessedOver:
      "The three serving-idea cards below the product, Snack It Solo, The Breakfast Upgrade, and Bake & Blend, exist so a single flavor still gives a first-time visitor several reasons to add it to cart.",
    outcome:
      "The Balanced Pantry launched with one product, tiered pricing that scales from a single pack to bulk wholesale, and a shop that already reads as a brand with a future, not a placeholder waiting for more inventory.",
    testimonial: {
      quote:
        "Such a smooth and pleasant experience. He took the time to understand what I wanted and came up with something so visually attractive and well thought out.",
      name: "Ambrin Uwais",
      role: "The Balanced Pantry",
    },
    gallery: [
      "/work/thebalancedpantry.png",
      "/work/thebalancedpantry-shop.png",
      "/work/thebalancedpantry-product.png",
    ],
    nextSlug: "elvyn",
  },
  {
    slug: "elvyn",
    name: "Elvyn",
    tagline: "Premium leather goods, styled with intent.",
    year: "2025",
    heroImage: "/work/elvynstore.png",
    overview:
      "Elvyn asked us to bring a full leather-goods range online, dozens of bags across seven categories, without the catalog ever feeling like a warehouse of SKUs rather than a considered collection.",
    fullWidthImage: "/work/elvyn-shop.png",
    brand:
      "ELVYN is a Sri Lankan-registered accessories label built around understated luxury rather than trend-chasing: classic silhouettes and versatile daily bags designed to be a considered companion, not a fast-fashion impulse buy.",
    experience:
      "The catalog spans shoulder bags, top handles, totes, clutches, cross-body bags, wallets, and hand bags, with real commerce weight behind it: colour variants, three-installment payment plans, flash sales, and pre-order and premium tags. Category filters and clear sort controls keep dozens of products from ever feeling like a scroll of sameness.",
    responsive: {
      desktop: "/work/elvyn-desktop.png",
      tablet: "/work/elvyn-tablet.png",
      mobile: "/work/elvyn-mobile.png",
    },
    detailImage: "/work/elvyn-product.png",
    craft: [
      {
        label: "Typography",
        description:
          "A confident script wordmark for the brand itself, kept away from anywhere a customer needs to read quickly; pricing, filters, and checkout stay in a clean, restrained sans.",
      },
      {
        label: "Spacing",
        description:
          "A dense catalog given consistent breathing room per product card, so seven categories and dozens of bags still browse calmly.",
      },
      {
        label: "Motion",
        description: "Kept quiet on the shop grid. The leather and hardware photography carries the attention.",
      },
      {
        label: "Accessibility",
        description:
          "Category filters, sort order, and installment pricing all stated in plain text, never hidden behind an icon alone.",
      },
    ],
    obsessedOver:
      "Colour swatches on each product page show a real second photograph of the bag in that colourway, instead of an abstract colour dot, so a shopper never has to guess what \"Misty Blue\" actually looks like.",
    outcome:
      "Elvyn now sells a full range, from slings to wallets, through a store that carries the same understated confidence as the product photography, with installment pricing and true-to-life colour variants that make browsing dozens of bags feel considered instead of overwhelming.",
    testimonial: {
      quote:
        "Ahamed did an excellent job crafting the website exactly to our expectations. He’s very responsive, detail-oriented, and fully committed to delivering on time without compromising quality.",
      name: "Sajid Ifham",
      role: "Elvyn",
    },
    gallery: ["/work/elvynstore.png", "/work/elvyn-shop.png", "/work/elvyn-product.png"],
    nextSlug: "hedone",
  },
  {
    slug: "hedone",
    name: "Hedone",
    tagline: "Natural skincare, presented with quiet confidence.",
    year: "2025",
    heroImage: "/work/hedoneskincare.png",
    overview:
      "Hedone makes 100% natural, vegan skincare backed by lab testing and formal certification. The brief was to carry that scientific credibility online without the site ever feeling clinical or cold.",
    fullWidthImage: "/work/hedone-collection.png",
    brand:
      "Rooted in Sri Lanka and founded by Uthpala Pathirana, Hedone formulates eight products across face, body, and therapy, every one of them 100% natural and vegan, sourced from five countries, and lab-tested at Sri Lanka's Industrial Technology Institute against Ecocert, COSMOS, and IFRA standards.",
    experience:
      "A single scrolling site carries the whole story in order: philosophy, the collection, then the journey behind it. The Our Journey section walks through five real stages, from the founder's original conviction through research, sourcing, perfecting, and testing, so the science reads as care rather than a claims list.",
    responsive: {
      desktop: "/work/hedone-desktop.png",
      tablet: "/work/hedone-tablet.png",
      mobile: "/work/hedone-mobile.png",
    },
    detailImage: "/work/hedone-detail.png",
    craft: [
      {
        label: "Typography",
        description:
          "A warm serif carries emotional headlines, with a single italicised word like \"honesty\" used as the one accent per line, against a clean sans for every research and certification detail.",
      },
      {
        label: "Spacing",
        description:
          "Generous separation between philosophy, collection, and journey, so a science-heavy brand still reads as calm rather than dense.",
      },
      {
        label: "Motion",
        description: "A quiet reveal on scroll through the journey timeline, nothing that competes with the ingredient photography.",
      },
      {
        label: "Accessibility",
        description:
          "Certifications (Ecocert, COSMOS, IFRA, ITI) are named in plain language next to their badges, not left for a visitor to decode from logos alone.",
      },
    ],
    obsessedOver:
      "Each headline holds exactly one italicised word, \"honesty\" among others, a single restrained accent that carries the brand's warmth without ever tipping into decoration.",
    outcome:
      "Hedone now has one considered site that carries eight products across face, body, and therapy, and lets real certifications and the founder's own words build trust, instead of a wall of logos doing it for her.",
    testimonial: {
      quote:
        "My jaw was literally dropped, he had done the website up to international level. Worth every penny, and you won’t regret it.",
      name: "Uthpala Pathirana",
      role: "Hedone Skincare",
    },
    gallery: ["/work/hedoneskincare.png", "/work/hedone-collection.png", "/work/hedone-detail.png"],
    nextSlug: "elda",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
