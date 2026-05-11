"use client";

export default function NewsletterForm() {
    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full sm:w-auto gap-2"
        >
            <input
                type="email"
                placeholder="you@example.com"
                className="font-body flex-1 sm:w-56 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#10B981]/60 focus:ring-1 focus:ring-[#10B981]/40 transition-all"
            />
            <button
                type="submit"
                className="rounded-xl bg-[#F59E0B] px-5 py-2.5 text-sm font-bold text-white hover:bg-amber-500 active:scale-[0.97] transition-all whitespace-nowrap"
            >
                Subscribe
            </button>
        </form>
    );
}
