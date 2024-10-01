// pages/data.js

const DataPage = () => {
  return <div>Data is available, but this page doesn't display anything.</div>;
};

export const bannerData = {
  title: "Exquisite Custom Jewelry",
  description: "Handcrafted perfection, tailored for you",
  image: "/images/stock-banner1.jpg", // Update the path to your image
};

export const specialtiesData = [
  {
    name: "Rings",
    image: "/images/ring-dra.png", // Replace with actual path to your image
    description: "Discover our exquisite collection of custom rings.",
  },
  {
    name: "Pendants",
    image: "/images/pendant3-dra.png", // Replace with actual path to your image
    description: "Discover our exquisite collection of custom pendants.",
  },
  {
    name: "Earrings",
    image: "/images/earrings3-dra.png", // Replace with actual path to your image
    description: "Discover our exquisite collection of custom earrings.",
  },
];

export const customDesignData = {
  title: "Custom Design Process",
  description:
    "Experience the art of bespoke jewelry creation. Our master artisans bring your vision to life, crafting unique pieces that tell your story.",
  image: "/images/custom-pexels.png", // Update the path to your image
};

export default DataPage; // Ensure to export the default component
