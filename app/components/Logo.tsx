export default function Logo({ className = "" }: { className?: string }) {
  return <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#191919] text-sm font-bold text-white dark:bg-white dark:text-[#191919] ${className}`} aria-label="Rania Madmoune">RM</span>;
}
