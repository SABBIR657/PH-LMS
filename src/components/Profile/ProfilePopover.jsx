import {
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@heroui/react";
import { useContext } from "react";
import { AuthContext } from "../../hooks/AuthContextProvider";
import { Link } from "react-router-dom";

const profileLinks = [
  {
    id: 9,
    Label: "User Profile",
    url: "/user-profile",
  },
  {
    id: 10,
    Label: "My Classes",
    url: "/my-class",
  },
  {
    id: 11,
    Label: "Bookmars",
    url: "/bookmarks",
  },
  {
    id: 105,
    Label: "Help Desk",
    url: "/help-desk",
  },
  {
    id: 107,
    Label: "Student Analytics",
    url: "/",
  },
  {
    id: 105,
    Label: "Leaderboard",
    url: "/",
  },
  {
    id: 10866,
    Label: "Conceptual Session",
    url: "/session",
  },
  {
    id: 10856,
    Label: "Settings",
    url: "/setting",
  },
  {
    id: 10445,
    Label: "Announcement",
    url: "/announcement",
  },
];

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function ProfilePopover() {
  const { user, logout } = useContext(AuthContext);

  console.log("------", user);
  return (
    // <Navbar classNames={{ }}>
    <NavbarContent as="div" justify="end">
      <Dropdown placement="bottom-end" className="bg-[#511a66]">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name="Jason Hughes"
            size="md"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <div className="flex justify-center">
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </div>
          </DropdownItem>
          <DropdownItem key="profile" className="h-14 gap-2">
            <div className="">
              <p className="font-semibold text-center">{user?.name}</p>
              <p className="font-semibold">Student ID: WEB-777</p>
            </div>
          </DropdownItem>
          {profileLinks.map((item) => {
            return (
              <DropdownItem
                key={item.id}
                className="border-b-1 rounded-none border-gray-300"
              >
                <Link to={item.url}>{item.Label}</Link>
              </DropdownItem>
            );
          })}
          <DropdownItem key="logout" color="danger" onPress={logout}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
    // </Navbar>
  );
}
