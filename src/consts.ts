// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "xguagua's Blog";
export const SITE_TITLE = "Frosti";
export const SITE_DESCRIPTION = "A blog template";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "xguagua";
export const USER_SITE = "https://blog.xguagua.cfd"
export const ORIGIN_AVATAR = "/profile.webp";
export const CLICKED_AVATAR = "/profilec.webp"

// Server and transition settings
export const SERVER_URL = "https://demo.saroprock.com";

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "Home", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "about", text: "About", href: "/about", svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "Articles",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems:
    [
      {
        id: "all",
        text: "All Articles",
        href: "/blog",
        svg: "post",
        target: "_self"
      }
    ]
  }, // Blog page with sub-items
  {
    id: "project",
    text: "Project",
    href: "/project",
    svg: "project",
    target: "_self",
  }, // Projects page
  {
    id: "friend",
    text: "Friend",
    href: "/friend",
    svg: "friend",
    target: "_self",
  }, // Friends page
  {
    id: "contact",
    text: "Contact",
    href: "mailto:xguagua@xguagua.cfd", // Contact email
    target: "_blank", // Open in a new tab
    svg: "contact",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://github.com/xguagua",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://space.bilibili.com/1955657291",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "bilibili",
  },
];
