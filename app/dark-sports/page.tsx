import BelowSection from "@/pages/sports-home/dark/belowSection";
import AboveSection from "@/pages/sports-home/dark/aboveSection";
import HomeButton from "@/components/Card/HomeButton";

export default function DarkSports() {
  return (
    <div className="overflow-hidden p-16 bg-neutral-800">
      <AboveSection/>
      <BelowSection/>
      <HomeButton/>
    </div>
  );
}
