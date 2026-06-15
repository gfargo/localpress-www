import { Hero } from "@/components/Hero";
import { Showcase } from "@/components/Showcase";
import { Features } from "@/components/Features";
import { Commands } from "@/components/Commands";
import { Audit } from "@/components/Audit";
import { Comparison } from "@/components/Comparison";
import { Mcp } from "@/components/Mcp";
import { TimeMachine } from "@/components/TimeMachine";
import { VisionAI } from "@/components/VisionAI";
import { Install } from "@/components/Install";
import { getLatestVersion } from "@/lib/github";

export default async function HomePage() {
  const version = await getLatestVersion();

  return (
    <>
      <Hero version={version} />
      <Features />
      <Showcase />
      <Commands />
      <Audit />
      <VisionAI />
      <TimeMachine />
      <Mcp />
      <Comparison />
      <Install />
    </>
  );
}
