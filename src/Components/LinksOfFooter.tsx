import React from "react";

const LinksOfFooter = () => {
  const dataLinks = {
    LinkOne: "لینک های مفید",
    LinkTwo: [
      { nameLink: "درباره ما" },
      { nameLink: "تماس با ما" },
      { nameLink: "استرداد بلیط" },
      { nameLink: "راهنمایی خرید بلیط" },
      { nameLink: "قوانین و مقررات" },
    ],
  };

  return (
    <div className="flex w-full text-right">
      <div className="flex flex-col w-full py-4">
        <h1 className="font-bold pb-2">{dataLinks.LinkOne}</h1>
        <ul className="leading-8">
          {dataLinks.LinkTwo.map((link) => (
            <li>{link.nameLink}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LinksOfFooter;
