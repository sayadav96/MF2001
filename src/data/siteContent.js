// src/data/siteContent.js

// Navbar
export const navbarContent = {
  logo: "/images/fallback.png", // or /images/logo.png
  links: [
    { label: "Home", href: "/" },
    { label: "Our Team", href: "/team" },
    { label: "Programs", href: "/programs" },
  ],
};

// Hero / Header
export const heroContent = {
  title: "MF2001 Foundation",
  subtitle: "Working together for education & community welfare",
  ctaText: "Get Involved",
  image: "/images/fallback.png",
};

// About section
export const aboutContent = {
  heading: "About Our NGO",
  intro:
    "We are a non-profit organization focused on education, health, and community development.",
  details:
    "Since 2020 we have been helping children and families with scholarships, skill training, and healthcare support.",
  imageOverlay: "/images/fallback.png",
};

// “Special menu” → for NGO we’ll treat it as “Focus areas / Programs”
export const programsContent = {
  title: "Our Key Programs",
  items: [
    {
      title: "Education Support",
      description: "Scholarships, tuition, and school supplies for children.",
    },
    {
      title: "Health Camps",
      description: "Free medical checkups and health awareness drives.",
    },
    {
      title: "Women Empowerment",
      description: "Skill training and support groups for women.",
    },
  ],
};

// Footer
export const footerContent = {
  text: "© 2025 MF2001 Foundation. All rights reserved.",
};
