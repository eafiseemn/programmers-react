import tw from "@/utils/tw";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Button( { children, className }:Props ) {
  return (
    <button className={
      tw("bg-black text-white text-sm px-3 py-1.5 rounded-2xl cursor-pointer", className)
      }>
      {children}
    </button>
  )
}
export default Button