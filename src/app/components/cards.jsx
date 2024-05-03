'use client'
import { useRef } from "react";

const trendingList = [
  {
    "title": "Case study",
    "description": "Revolutionizing Talent Hiring Practices"
  },
  {
    "title": "Blog",
    "description": "Prompt Engineering vs Prompt Tuning: A Detailed Explanation"
  },
  {
    "title": "AI News",
    "description": "META Unveils Groundbreaking Enhancements to Its AI with Llama 3 Release"
  },
  {
    "title": "Trends",
    "description": "Prompt Engineering vs Prompt Tuning: A Detailed Explanation"
  },
  // {
  //   "title": "Whitepaper",
  //   "description": "The Future of Artificial Intelligence in Healthcare"
  // },
  // {
  //   "title": "Interview",
  //   "description": "Insights from Industry Leaders on Digital Transformation"
  // },
  // {
  //   "title": "Product Launch",
  //   "description": "Introducing the Next Generation of Smart Home Devices"
  // },
  // {
  //   "title": "Analysis",
  //   "description": "Understanding the Rise of Remote Work in the Post-Pandemic Era"
  // }
];

export default function Trending() {
    const trendingRef = useRef(null);

    const scrollLeft = () => {
        if (trendingRef.current) trendingRef.current.scrollLeft -= 400;
    };
    const scrollRight = () => {
        if (trendingRef.current) trendingRef.current.scrollLeft += 400;
    };

    return (
        <section className="flex flex-col items-center pt-40 bg-black pb-20 bg-blend-lighten hover:bg-blend-darken">
            <h3 className="text-5xl font-medium text-white bg-clip-text my-24">
                {"Here's What's Trending!"}
            </h3>
            <div className="flex justify-center gap-14 w-full overflow-y-scroll no-scrollbar relative " ref={trendingRef}>
                {trendingList.map((trending, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-[300px] max-w-[calc(100% - 280px)] h-[454px] rounded-lg overflow-hidden relative"
                        style={{ backgroundImage: `url(https://source.unsplash.com/random/?${encodeURI(trending.title)})` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                        <div class="absolute inset-0 bg-gradient-to-b from-black"></div>
                        <h3 className="block text-fheaders text-xl font-semibold uppercase absolute top-14 left-4 ">{trending.title}</h3>
                        <p className="text-white text-base font-medium absolute top-24 left-4">{trending.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
