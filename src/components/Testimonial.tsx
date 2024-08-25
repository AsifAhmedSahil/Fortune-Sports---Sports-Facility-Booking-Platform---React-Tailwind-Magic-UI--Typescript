import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Asif",
    username: "@asif",
    body: "Fortune Sports has transformed the way I book my training sessions. The process is smooth, and the facilities are top-notch!",
    img: "https://avatar.vercel.sh/asif",
  },
  {
    name: "Arman",
    username: "@arman",
    body: "Booking sports facilities has never been easier. Fortune Sports makes everything so simple and efficient. Highly recommend!",
    img: "https://avatar.vercel.sh/arman",
  },
  {
    name: "Masud",
    username: "@masud",
    body: "The ease of use and quality of service at Fortune Sports are impressive. It’s now my go-to platform for all my sports bookings.",
    img: "https://avatar.vercel.sh/masud",
  },
  {
    name: "Anas",
    username: "@anas",
    body: "Fortune Sports makes it so easy to find and book the perfect facility. The booking process is straightforward and the facilities are fantastic!",
    img: "https://avatar.vercel.sh/anas",
  },
  {
    name: "Pratik",
    username: "@pratik",
    body: "I love how user-friendly Fortune Sports is. The quality of the facilities is top-notch.",
    img: "https://avatar.vercel.sh/pratik",
  },
  {
    name: "Altaf",
    username: "@altaf",
    body: "Fortune Sports has made managing my sports bookings so much easier.",
    img: "https://avatar.vercel.sh/altaf",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2  text-sm tracking-tighter">{body}</blockquote>
    </figure>
  );
};

export function Testimonial() {
  return (
    <div >
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden   bg-background md:shadow-xl bg-black text-white ">
      <div>
        <h1 className="text-center font-bold text-3xl md:text-5xl lg:text-6xl sm:text-6xl tracking-tighter mt-16">
          "Voices of Satisfaction"
        </h1>
        <p className="max-w-4xl mx-auto text-center text-sm lg:text-xl pt-12 mb-12">
          <span className="block lg:hidden">
            Don’t just take our word for it—hear what our clients have to say!
            At Fortune Sports, we take pride in delivering exceptional service
            and top-notch facilities.
          </span>
          <span className="hidden lg:block">
            Don’t just take our word for it—hear what our clients have to say!
            At Fortune Sports, we take pride in delivering exceptional service
            and top-notch facilities. Explore their testimonials to see how
            we’ve helped elevate their game and streamline their sports
            bookings.
          </span>
        </p>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/10 lg:from-black dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/10 lg:from-black dark:from-background"></div>
    </div>
    </div>
  );
}
