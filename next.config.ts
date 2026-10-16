import type { NextConfig } from "next";
import reference from "./public/_launchfolio/portfolio-routes.json";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: reference.pages.map(({route,file})=>({source:route,destination:`/_launchfolio/pages/${file}`})),
      afterFiles: [],
      fallback: [],
    };
  },
  async redirects() {
    return [
      {source:'/work',destination:'/projects',permanent:false},
      ...reference.pages.filter(p=>p.route.startsWith('/projects/')).map(p=>({source:p.route.replace('/projects/','/work/'),destination:p.route,permanent:false})),
      {source:'/insights',destination:'/blog',permanent:false},
      ...reference.pages.filter(p=>p.route.startsWith('/blog/')).map(p=>({source:p.route.replace('/blog/','/insights/'),destination:p.route,permanent:false})),
      {source:'/systems',destination:'/#services',permanent:false},
      {source:'/process',destination:'/#pricing',permanent:false},
      {source:'/faq',destination:'/#faq',permanent:false},
      {source:'/faqs',destination:'/#faq',permanent:false},
      {source:'/about',destination:'/',permanent:false},
      {source:'/contact',destination:'/?contact=1',permanent:false},
    ];
  },
  // Keep production QA output separate from an active development server.
  distDir: process.env.NEXT_OUTPUT_DIR || ".next",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**", // This allows any path under the hostname
      },
    ],
  },
  ...(process.env.BUILD_STANDALONE === "true" ? { output: "standalone" } : {}),
  transpilePackages: ["motion"],
  webpack: (config, { dev }) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === "true") {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
