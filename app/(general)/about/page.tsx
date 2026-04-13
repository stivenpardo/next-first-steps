import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO Description",
  keywords: ["keyword1", "keyword2", "keyword3"],
};

function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}

export default AboutPage;
