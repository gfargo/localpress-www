import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Commands } from "@/components/Commands";
import { Audit } from "@/components/Audit";
import { Comparison } from "@/components/Comparison";
import { Skill } from "@/components/Skill";
import { Install } from "@/components/Install";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Commands />
      <Audit />
      <Comparison />
      <Skill />
      <Install />
    </>
  );
}
