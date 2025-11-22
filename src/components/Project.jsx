import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from '../data/portfolio.jsx';
import ProjectCard from "./small components/ProjectCard";


export default function Projects() {
    const trackRef = useRef(null);            // the moving container
    const loopTween = useRef(null);           // gsap tween reference
    const resumeTimeout = useRef(null);       // resume timeout ref
    const [activeIndex, setActiveIndex] = useState(0);

    // speed in px per second for the loop
    const SPEED_PX_PER_SEC = 120;
    // time in ms to resume auto-scroll after manual nav
    const RESUME_DELAY = 3000;

    // compute element sizes: single card width + gap and contentWidth (one full set width)
    const computeMetrics = () => {
        const track = trackRef.current;
        if (!track || !track.children || track.children.length === 0) return null;

        const firstCard = track.children[0];
        const cardRect = firstCard.getBoundingClientRect();
        // get gap from computed style (gap might return "32px" or "2rem")
        const gapRaw = window.getComputedStyle(track).gap || "0px";
        // parse gap — if rem or px, convert px; for simplicity assume px or rem in px computed value
        const gap = parseFloat(gapRaw) || 0;

        const singleWidth = Math.round(cardRect.width + gap);
        // contentWidth is width of one logical set (not the duplicated one)
        // Note: our track holds only one set of items — we animate relative by contentWidth
        const contentWidth = singleWidth * projects.length;

        return { singleWidth, contentWidth, cardWidth: cardRect.width, gap };
    };

    // Start the continuous loop: animate x by -contentWidth repeatedly (relative '-=')
    const startLoop = () => {
        stopLoop();

        const track = trackRef.current;
        if (!track) return;

        const metrics = computeMetrics();
        if (!metrics) return;
        const { contentWidth } = metrics;
        if (contentWidth === 0) return;

        // duration based on px/sec
        const duration = Math.max(6, contentWidth / SPEED_PX_PER_SEC);

        // Animate relative by -contentWidth each cycle; repeat:-1 produces continuous loop
        loopTween.current = gsap.to(track, {
            x: `-=${contentWidth}`,
            duration,
            ease: "linear",
            repeat: -1,
            // important: use modifiers to keep x within reasonable numeric range to avoid very large numbers
            modifiers: {
                x: (x) => {
                    // gsap passes x as like "-1234px" — keep only numeric then wrap within [-contentWidth, 0)
                    const num = parseFloat(x || 0);
                    // wrap within [-contentWidth, 0)
                    const wrapped = ((num % -contentWidth) + -contentWidth) % -contentWidth;
                    // return with unit
                    return `${wrapped}px`;
                },
            },
        });
    };

    // stop and kill existing loop tween
    const stopLoop = () => {
        if (loopTween.current) {
            loopTween.current.kill();
            loopTween.current = null;
        }
        if (resumeTimeout.current) {
            clearTimeout(resumeTimeout.current);
            resumeTimeout.current = null;
        }
    };

    // snap carousel to the closest duplicate of requested index (so the jump is minimal)
    const goToIndex = (index, resumeDelay = RESUME_DELAY) => {
        const track = trackRef.current;
        if (!track) return;

        const metrics = computeMetrics();
        if (!metrics) return;
        const { singleWidth, contentWidth } = metrics;

        // current numeric x
        const currentX = gsap.getProperty(track, "x") || 0;

        // candidate positions for this logical index:
        // pos = -index * singleWidth (first copy)
        // other candidates are shifted by ±contentWidth (because of repetition)
        const pos = -index * singleWidth;
        const candidates = [pos, pos - contentWidth, pos + contentWidth];

        // choose candidate closest to currentX to avoid long jumps
        let target = candidates[0];
        let minDist = Math.abs(currentX - candidates[0]);
        for (let c of candidates) {
            const d = Math.abs(currentX - c);
            if (d < minDist) {
                minDist = d;
                target = c;
            }
        }

        // animate to target
        gsap.to(track, {
            x: target,
            duration: 0.6,
            ease: "power2.inOut",
            onComplete: () => {
                // update active index
                setActiveIndex(index % projects.length);
                // schedule resume
                resumeTimeout.current = setTimeout(() => {
                    startLoop();
                }, resumeDelay);
            },
        });
    };

    // handlers for buttons
    const handleNext = () => {
        stopLoop();
        const next = (activeIndex + 1) % projects.length;
        goToIndex(next);
    };

    const handlePrev = () => {
        stopLoop();
        const prev = (activeIndex - 1 + projects.length) % projects.length;
        goToIndex(prev);
    };

    // pause on hover / touch
    const handleMouseEnter = () => stopLoop();
    const handleMouseLeave = () => {
        // small delay to avoid immediate restart when user just moved mouse
        resumeTimeout.current = setTimeout(() => startLoop(), 800);
    };

    // init loop on mount; recalc on resize
    useEffect(() => {
        const init = () => {
            // reset transform to a small wrapped value to keep numbers small
            const track = trackRef.current;
            if (!track) return;
            gsap.set(track, { x: 0 });
            // small timeout to ensure DOM sizes are ready
            setTimeout(() => {
                startLoop();
            }, 50);
        };

        init();

        const onResize = () => {
            // stop, reset transform to keep visuals consistent, restart
            stopLoop();
            // small debounce
            setTimeout(() => {
                const track = trackRef.current;
                if (track) gsap.set(track, { x: 0 });
                startLoop();
            }, 120);
        };

        window.addEventListener("resize", onResize);
        return () => {
            stopLoop();
            window.removeEventListener("resize", onResize);
        };
    }, []);

    // Render
    return (
        <section className="mainCard relative mt-4 w-full  text-white px-0">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-6  px-2">
                    <p className="relative inline-block text-[24px] after:content-[''] after:block after:w-[30%] after:border-b-2 after:border-yellow-400 after:mt-1">
                        <b>Projects</b>
                    </p>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handlePrev}
                            className="bg-zinc-800 hover:bg-zinc-700 p-2 rounded-full"
                            aria-label="Previous project"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-zinc-800 hover:bg-zinc-700 p-2 rounded-full"
                            aria-label="Next project"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="relative overflow-hidden"
                >
                    {/* Track: all cards in a single row. We animate this container's `x` */}
                    <div
                        ref={trackRef}
                        className="flex gap-8"
                        style={{ willChange: "transform" }}
                    >
                        {/* Render all project cards (one set). The loop tween uses relative -contentWidth to repeat */}
                        {projects.map((p) => (
                            <div key={p.id} className="flex-shrink-0 hover:scale-105 transition-transform duration-300">
                                <ProjectCard project={p} />
                            </div>
                        ))}

                        {/* Duplicate set visually — NOT necessary for DOM (we rely on relative animation), 
                but duplicating visually can help avoid visible gaps on some layouts.
                If you see seams remove duplication or tune CSS. */}
                        {projects.map((p) => (
                            <div key={`${p.id}`} className="flex-shrink-0 hover:scale-105 transition-transform duration-300">
                                <ProjectCard project={p} />
                            </div>
                        ))}
                    </div>

                </div>

                {/* Indicator */}
                <div className="flex gap-2 justify-center mt-6">
                    {projects.map((_, i) => (
                        <div
                            key={i}
                            className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 bg-white" : "w-2 bg-gray-600"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
