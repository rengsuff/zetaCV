/** @type {import('next').NextConfig} */
const nextConfig = {
  // The CV is a single prerendered page with no server features, so we emit a
  // plain static site into ./out — deployable to Netlify, GitHub Pages, etc.
  output: "export",
};

export default nextConfig;
