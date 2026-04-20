// components/ContactModalButton.js
"use client";
import React from "react";
import ConnectPopup from "./ConnectPopup";

export default function ContactModalButton({ children, className = "", ...props }) {
    return (
        <ConnectPopup>
            <button
                type="button"
                className={`rounded-md bg-[#8a8d4a] px-4 py-2 text-white font-semibold hover:bg-[#75783d] transition ${className}`}
                {...props}
            >
                {children}
            </button>
        </ConnectPopup>
    );
}
