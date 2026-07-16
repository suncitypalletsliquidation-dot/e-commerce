import { CallIcon, EmailIcon, MapIcon } from "@/assets/icons";
import FooterSocials from "./FooterSocials";

const aboutData = [
  {
    id: 1,
    icon: MapIcon,
    text: "328 Thomas Pl, Everman, TX 76140, USA",
  },
  {
    id: 2,
    icon: CallIcon,
    text: "WhatsApp 817 330 9020",
  },
  {
    id: 3,
    icon: EmailIcon,
    text: "info@suncitypalletsliquidation.com",
  },
];

export default function FooterAbout() {
  return (
    <div className="max-w-[330px] w-full">
      <h2 className="mb-7.5 text-custom-1 font-medium text-dark">
        Help & Support
      </h2>

      <ul className="flex flex-col gap-3">
        {aboutData.map((item) => (
          <li key={item.id} className="flex gap-4.5">
            <span className="w-6 h-6 shrink-0 text-blue">
              <item.icon className="w-6 h-6 text-blue" />
            </span>
            {item.text}
          </li>
        ))}
      </ul>

      <FooterSocials />
    </div>
  );
}
