// import { useTranslations } from "next-intl";

// import Button from "@/components/Button";
import Banner from "@/sections/Banner";
import Сlients from "@/sections/Clients";
import InfoAction from "@/sections/InfoAction";
import ManageCommunity from "@/sections/ManageCommunity";
import Metrix from "@/sections/Metrix";

export default function HomePage() {
  // const t = useTranslations("HomePage");

  return (
    <div>
      <Banner />
      <Сlients />
      <ManageCommunity />
      <InfoAction fragment="Info1Fragment" sectionName="info_1" />
      <Metrix />
      <InfoAction fragment="Info2Fragment" sectionName="info_2" />
    </div>
  );
}
