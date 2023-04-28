import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://isaacbuilds.com",
  author: "Isaac Way",
  desc: "Isaac Way's blog about building",
  title: "Isaac Builds",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: false,
  width: 64,
  height: 64,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/iway1",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:wayisaac0@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/isaac_ts_way",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
];
