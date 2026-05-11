
export default function Explore() {
    return (
        <section className="min-h-screen overflow-hidden bg-[#F0FDF4] pt-36 pb-24 lg:pt-44 lg:pb-32">
            {/* Radial glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(16,185,129,0.13) 0%, transparent 70%)",
                }}
            />

            {/* Dot-grid texture */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
                style={{
                    backgroundImage: "radial-gradient(circle, #10B981 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-main font-bold mb-4 sm:text-5xl lg:text-6xl tracking-tight leading-tight">Explore Grids</h1>
            </div>
        </section>
    );
}