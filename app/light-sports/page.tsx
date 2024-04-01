import BelowSection from "@/pages/sports-home/light/belowSection";
import AboveSection from "@/pages/sports-home/light/aboveSection";
import HomeButton from "@/components/Card/HomeButton";

export default function LightSports() {
  return (
    <div className="overflow-hidden p-16 bg-slate-100">
      <AboveSection/>
      <BelowSection/>
      <HomeButton/>
    </div>
  );
}
