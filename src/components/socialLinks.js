// Single source of truth for social/contact links, consumed by both Navbar
// and Footer so their link lists can't drift out of sync with each other.
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaStackOverflow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profile from "../config/profile.json";

const socialLinks = [
  {
    key: "github",
    href: profile.socials.github.url,
    label: "GitHub Profile",
    Icon: AiFillGithub,
  },
  {
    key: "linkedin",
    href: profile.socials.linkedin.url,
    label: "LinkedIn Profile",
    Icon: FaLinkedinIn,
  },
  {
    key: "stackoverflow",
    href: profile.socials.stackoverflow.url,
    label: "Stack Overflow Profile",
    Icon: FaStackOverflow,
  },
  {
    key: "instagram",
    href: profile.socials.instagram.url,
    label: "Instagram Profile",
    Icon: AiFillInstagram,
  },
  {
    key: "email",
    href: `mailto:${profile.contact.email}`,
    label: "Email Contact",
    Icon: MdEmail,
  },
];

export default socialLinks;
