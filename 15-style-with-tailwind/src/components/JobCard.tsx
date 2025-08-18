import tw from "@/utils/tw";
import { cva, type VariantProps } from "class-variance-authority";
import Button from "./Button";

type Props = React.HTMLAttributes<HTMLDivElement> &
VariantProps<typeof cardHero> & {
  type: 'primary' | 'secondary' | 'tertiary';
  company: string;
  logoSrc: string;
  logoAlt?: string;
  rate: string;
  title: string;
}

const cardHero = cva(
  // "relative min-h-[180px] rounded-xl p-6 flex flex-col justify-between",
  "self-stretch grow px-3 pt-3 flex flex-col",
  {
    variants: {
      type: {
        primary: "bg-yellow-50",
        secondary: "bg-purple-50",
        tertiary: "bg-lime-50"
      }
    },
    defaultVariants: { type: "primary" }
  }
);

function JobCard({ type,company, logoSrc, logoAlt = company, rate, title, className, ...rest }:Props) {
  let logoSrcUrl = '';

  switch (logoSrc) {
    case "facebook":
      logoSrcUrl = `/facebook.svg`;
      break;
    case "google":
      logoSrcUrl = `/google.svg`;
      break;
    case "airbnb":
      logoSrcUrl = `/airbnb.svg`;
      break;
    default:
      logoSrcUrl = `/vite.svg`;
      break;
  }

  
  return (
    <div className={tw("w-64 h-55 p-2 bg-white rounded-lg flex flex-col justify-between items-start gap-2 overflow-hidden", className)} {...rest}>
      {/* <div className={tw(
          "self-stretch grow px-3 pt-3 flex flex-col",
          type === 'primary' && "bg-yellow-50",
          type === 'secondary' && "bg-purple-50",
          type === 'tertiary' && "bg-lime-50",
          )}
      > */}
      <div className={cardHero({type})}
      >
        <header className="w-full flex justify-between ">
          <span className="text-xs">{rate}</span>
          <button>
            <img className="size-6 cursor-pointer" src="/bookmark.svg" alt="북마크" />
          </button>
        </header>
        <div className="flex w-full grow justify-between items-center ">
          <h3 className="font-semibold leading-tight">{title}</h3>
          <button className="cursor-pointer">
            <img src="/arrow.svg" alt="다음" />
          </button>
        </div>
        <div className="flex gap-2 mb-2 w-full justify-center items-center">
          <span className="block size-1 bg-zinc-800 rounded-full"></span>
          <span className="block size-1 bg-zinc-300 rounded-full"></span>
          <span className="block size-1 bg-zinc-300 rounded-full"></span>
          <span className="block size-1 bg-zinc-300 rounded-full"></span>
        </div>
      </div>
      <footer className="w-full flex justify-between">
        <div className="flex items-center gap-2">
          <img className="size-8" src={logoSrcUrl} alt={logoAlt} />
          <h4 className="font-semibold text-sm">{company}</h4>
        </div>
        <Button className="bg-amber-800">View</Button>
      </footer>
    </div>
  )
}
export default JobCard