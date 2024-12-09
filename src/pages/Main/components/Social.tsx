import React from "react";

const socialMedia = [
  {
    name: "Twitter",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png",
    url: "https://x.com/yuz_mynerva0x13",
  },
  {
    name: "Bluesky",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Bluesky_Logo.svg",
    url: "https://bsky.app/profile/mynerva0x13.bsky.social",
  },
  {
    name: "TikTok",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
    url: "https://www.tiktok.com/@mynerva_0x13",
  },
  {
    name: "Pixiv",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Pixiv_Icon.svg/1200px-Pixiv_Icon.svg.png",
    url: "https://www.pixiv.net/en/users/52423214",
  },
  {
    name: "Tumblr",
    img: "https://cdn-icons-png.flaticon.com/512/185/185962.png",
    url: "https://www.tumblr.com/blog/ykyuz",
  },
  {
    name: "VGen",
    img: "https://help.vgen.co/hc/article_attachments/13004233730967",
    url: "https://vgen.co/yuz_mynerva0x13",
  },
  {
    name: "GitHub",
    img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    url: "https://github.com/mynerva0x13",
  },
  {
    name: "YouTube",
    img: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    url: "https://www.youtube.com/@yuzukikouta408",
  },
];

const SocialMediaList = () => {
  return (
    <>
      <div className="bg-white/70 rounded-lg shadow-lg ">
        {/* Header Section */}
        <header className="flex items-center justify-center p-6 space-x-8">
          <img
            src="/image/index.gif"
            alt="Left Decorative"
            className="w-20 h-20 object-cover sm:w-24 sm:h-24 rounded-full"
          />
          <h1 className="text-cyan-950 text-3xl font-semibold text-center">
            Social Media Links
          </h1>
          <img
            src="/image/ensemble-stars-anime.gif"
            alt="Right Decorative"
            className="w-20 h-20 object-cover sm:w-24 sm:h-24 rounded-full"
          />
        </header>

        {/* Social Media List */}
      <div className="flex flex-wrap justify-center gap-6 p-6">
          {socialMedia.map((media) => (
            <a
              key={media.name}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-110"
            >
              <img
                src={media.img}
                alt={media.name}
                className="w-14 h-14 object-contain mb-2 transition-transform duration-200 hover:scale-110"
              />
              <span className="text-sm text-gray-800 font-medium">{media.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Decorative Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <img src="/image/kanata-shinkai-ensemble-stars.gif" className="w-96 rounded-lg shadow-lg" />
        <img src="/image/zero-zerodod3.gif" className="rounded-lg shadow-lg w-96" />
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <img src="/image/grimoire-weiss-dies-from-cringe.gif" className="w-full rounded-lg shadow-lg" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <img src="/image/vxgballibsh51.jpg" className="w-96 rounded-lg shadow-lg" />
        <img src="/image/GWjpYWXaoAAQe_c.jpg" className="rounded-lg shadow-lg w-96" />
      </div>
    </>
  );
};

export default SocialMediaList;
