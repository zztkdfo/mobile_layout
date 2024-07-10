// Navigation.js
import {
  BsHouse,
  BsRocketTakeoff,
  BsStar,
  BsPersonCircle,
} from "react-icons/bs";

const navItems = [
  {
    label: "홈",
    icon: BsHouse,
    link: "/",
  },
  {
    label: "여행",
    icon: BsRocketTakeoff,
    link: "/plan",
  },
  {
    label: "추천",
    icon: BsStar,
    link: "/recommend",
  },
  {
    label: "마이페이지",
    icon: BsPersonCircle,
    link: "/my",
  },
];

export default function Nav() {
  return (
    <nav className="sticky bottom-0 left-0 right-0 z-10 w-full">
      <ul className="border-gray-500 grid h-[64px] grid-cols-4 border border-solid bg-white pt-[6px]">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="text-gray flex flex-col items-center justify-center gap-[6px] text-[11px] font-[400]"
          >
            <item.icon className="text-2xl" />
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
