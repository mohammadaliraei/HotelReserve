import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface DataName {
  id: number;
  title: string;
  description?: string;
}

const dataName: DataName[] = [
  {
    id: 1,
    title: "در هر پرواز میزان بار مجاز چقدر است؟",
    description:
      "میزان بار مجاز در هر پرواز بستگی به هواپیمایی و نوع بلیط شما دارد. هر هواپیمایی ممکن است قوانین متفاوتی در خصوص وزن و تعداد مجاز بارها داشته باشد. همچنین، نوع بلیط (اکونومی، بیزینس، یا فرست کلاس) نیز تأثیرگذار است",
  },
  {
    id: 2,
    title: "نرخ بلیط هواپیما برای نوزادان و کودکان زیر 12 سال چگونه است ؟",
    description:
      "نرخ بلیط هواپیما برای نوزادان (زیر 2 سال) و کودکان (بین 2 تا 12 سال) ممکن است بر اساس قوانین هر هواپیمایی متفاوت باشد. در اکثر موارد، نوزادان زیر 2 سال بدون صندلی جداگانه در آغوش والدین سفر می‌کنند و بلیط آنها معمولاً با نرخ تخفیف یا حتی رایگان صادر می‌شود",
  },
  {
    id: 3,
    title: "آیا پس از خرید اینترنتی بلیط هواپیما امکان استرداد آن وجود دارد؟",
    description:
      "قابل استرداد بلیط هواپیما بستگی به قوانین هواپیمایی و نوع بلیط خریداری شده دارد. اکثر هواپیمایی‌ها یک سیاست استرداد دارند، اما شرایط و مقررات ممکن است متفاوت باشند",
  },
  {
    id: 4,
    title: "آیا پس از خرید بلیط هواپیما امکان تغییر نام و نام خانوادگی وجود؟",
    description:
      "قابلیت تغییر نام و نام خانوادگی در بلیط هواپیما نیز به قوانین هواپیمایی و نوع بلیط خریداری شده بستگی دارد. اکثراً، هواپیمایی‌ها ممکن است اجازه تغییر نام و نام خانوادگی را با شرایط خاصی ارائه کنند اما این امکان معمولاً به توجیهات خاصی وابسته است.",
  },
  {
    id: 5,
    title:
      "هنگامی که از سایت خرید بلیط هواپیما رزرو بلیط را انجام می دهیم امکان انتخاب صندلی مورد نظرمان وجود دارد؟",
    description:
      "بسیاری از هواپیمایی‌ها به مسافران این امکان را می‌دهند که هنگام رزرو بلیط از سایت خود، صندلی مورد نظر خود را انتخاب کنند. این امکان به مسافران کمک می‌کند تا مکان مورد نظر خود را در هواپیما انتخاب کرده و از آسایش بیشتری در طول سفر برخوردار شوند",
  },
  {
    id: 6,
    title: "بلیط کدام کشور ها را در سایت بیلیتو میتوان خریداری کرد؟",
    description:
      "بیلیتو یک سامانه جستجوی بلیط هواپیما و رزرو بلیط آنلاین است که احتمالاً با همکاری با هواپیمایی‌ها و ارایه‌دهندگان مسافرتی، بلیط‌های متعددی را برای مسافران ارائه می‌دهد. میزان دسترسی به بلیط‌های هواپیما از کشور به کشور ممکن است متفاوت باشد",
  },
  {
    id: 7,
    title: "چگونه تاریخ پرواز را میتوان تغییر داد؟",
    description:
      "توانایی تغییر تاریخ پرواز برای بلیط هواپیما نیز به سیاست‌های هر هواپیمایی و نوع بلیط شما بستگی دارد. در اکثر موارد، هواپیمایی‌ها این امکان را فراهم می‌کنند اما با شرایط و محدودیت‌های خاصی که باید در نظر گرفته شوند.",
  },
];

const QuestionHomePage = () => {
  const [toggle, SetToggleBtn] = useState<boolean>(false);
  const [idBtn, SetIdBtn] = useState<number | null>(null);

  const HandelToggleBtn = (index: number) => {
    SetToggleBtn(!toggle);
    SetIdBtn(idBtn === index ? null : index);
  };

  return (
    <div className="flex flex-col w-[1180px] border-gray-300  border-[1px] rounded-md">
      {dataName.map((question) => (
        <div key={question.id}>
          <button
            onClick={() => HandelToggleBtn(question.id)}
            className="flex font-Mikhak font-bold w-full px-3 py-4 border justify-between items-center"
          >
            <FontAwesomeIcon
              icon={
                toggle && idBtn === question.id ? faChevronDown : faChevronUp
              }
              className={`${
                toggle && idBtn === question.id ? "text-Blue" : "text-black"
              }`}
            />
            <h1
              className={`${
                toggle && idBtn === question.id ? "text-Blue" : "text-black"
              }`}
            >
              {question.title}
            </h1>
          </button>
          {toggle && idBtn === question.id && (
            <div className="flex w-full">
              <div className="flex text-end px-4 w-full justify-end py-2 font-Mikhak">
                <h1 className="leading-loose ">{question.description}</h1>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionHomePage;
