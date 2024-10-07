import Link from "next/link";
import { Icon } from "./Icon";

const socialIcons = [
  {
    iconName: "instagram-icon",
    width: 20,
    height: 20,
  },
  {
    iconName: "youtube-icon",
    width: 18,
    height: 18,
  },
  {
    iconName: "twitter-icon",
    width: 16,
    height: 16,
  },
  {
    iconName: "telegram-icon",
    width: 18,
    height: 18,
  },
];

const SocialIcons = () => {
  return (
    <div className="flex gap-2 items-center">
      {socialIcons.map((icon, index) => (
        <Link
          key={index}
          href="/"
          className="w-7 h-7 bg-white-400 rounded-md flex items-center justify-center"
        >
          <Icon
            name={icon.iconName}
            width={icon.width}
            height={icon.height}
            color="#4489F7"
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
