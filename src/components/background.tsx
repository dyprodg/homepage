"use client";
import React from "react";
import { BackgroundBeams } from "./background-beams";

export function Background() {
return (
    <div className="h-screen w-full absolute rounded-md bg-gradient-to-br from-black to-neutral-900 flex flex-col items-center justify-center antialiased">
        <BackgroundBeams />
    </div>
);
}