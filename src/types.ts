export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
};

export type SocialObjects = {
  name: SocialMedia;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export type SocialIcons = {
  [social in SocialMedia]: string;
};

export type SocialMedia = "Github" | "Facebook" | "Instagram" | "LinkedIn" | "Mail" | "Twitter" | "WhatsApp" | "TikTok";
