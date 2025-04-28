'use client';

import { PauseCircle, PlayCircle } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const ResponsiveYouTube = ({ videoURL, imgSrc, className = "", playBtn = false }) => {
    const [width, setWidth] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const iframeRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false); // for SSR safety
    useEffect(() => {
        setIsMounted(true); // required for portal rendering on client
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== "undefined") {
                setWidth(window.innerWidth >= 900 ? window.innerWidth * 0.75 : window.innerWidth * 0.9);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isPopupOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isPopupOpen]);

    if (!videoURL) return null;

    const videoId = videoURL?.includes("/embed/")
        ? videoURL.split("/embed/")[1]?.split("?")[0]
        : "";

    const height = (width * 8) / 16;

    const modalContent = (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.85)",
                zIndex: 100000, // much higher than calendly
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div style={{ position: "relative", width: "90%", maxWidth: "1000px" }}>
                <button
                    onClick={() => setIsPopupOpen(false)}
                    style={{
                        position: "absolute",
                        top: -40,
                        right: 0,
                        fontSize: "24px",
                        color: "#fff",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        zIndex: 100001
                    }}
                >✖</button>
                <iframe
                    ref={iframeRef}
                    width="100%"
                    height={height}
                    src={`https://www.youtube.com/embed/${videoId}?playlist=${videoId}&rel=0&modestbranding=1&autoplay=1&controls=1&loop=1`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{ borderRadius: "12px", display: "block", margin: "auto" }}
                ></iframe>
            </div>
        </div>
    );

    return (
        <div style={{ width: "100%", textAlign: "center", height: "100%" }}>
            <div className={`w-full h-full select-none relative flex justify-center items-center ${className}`}>
                <img
                    src={imgSrc}
                    alt="Video Thumbnail"
                    className={`rounded-lg absolute ${playBtn ? "brightness-75" : ""}`}
                    style={{ cursor: "pointer", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                    onClick={() => setIsPopupOpen(true)}
                />
                {playBtn && (
                    <button onClick={() => setIsPopupOpen(true)} className="relative z-[1005]">
                        {isPopupOpen ? (
                            <PauseCircle color="#ffffff" size={100} />
                        ) : (
                            <PlayCircle color="#ffffff" size={100} />
                        )}
                    </button>
                )}

            </div>

            {isMounted && isPopupOpen && createPortal(modalContent, document.body)}
        </div>
    );
};

export default ResponsiveYouTube;
