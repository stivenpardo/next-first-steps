import { NavBar } from "@/components";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavBar />
      {children}
    </section>
  );
}
