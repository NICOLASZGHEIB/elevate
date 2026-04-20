"use client";
import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import ConnectPopup from "../components/ConnectPopup";
/* ---------- helpers ---------- */

// deterministic olive-ish color from title
function colorFromTitle(title) {
  const palette = ["#8B8F67", "#7A8551", "#68765A", "#737F68", "#8C8E71"];
  let h = 0;
  for (let i = 0; i < title.length; i++) h = (h * 31 + title.charCodeAt(i)) >>> 0;
  return palette[h % palette.length];
}

// wrap title for bottom label (desktop tile)
function wrapTitle(title, maxChars = 16, maxLines = 2) {
  const words = title.split(/\s+/);
  const lines = [];
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length <= maxChars) {
      line = (line + " " + w).trim();
    } else {
      if (line) lines.push(line);
      line = w;
      if (lines.length === maxLines - 1) break;
    }
  }
  if (lines.length < maxLines && line) lines.push(line);
  return lines;
}

/* ---------- Generated Thumbnail (DESKTOP square tile) ---------- */
function GeneratedThumbnail({ title, size = 92, color }) {
  const bg = useMemo(() => color || colorFromTitle(title), [title, color]);
  const lines = useMemo(() => wrapTitle(title), [title]);
  const lineHeight = 13;

  return (
    <svg
      role="img"
      aria-label={`${title} thumbnail`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className="shrink-0"
      style={{
        borderRadius: 16,
        boxShadow: "inset 0 0 0 2px rgba(0,0,0,0.04)",
        display: "block",
      }}
    >
      <rect x="0" y="0" width="120" height="120" rx="14" ry="14" fill={bg} />
      <circle cx="60" cy="44" r="34" fill="rgba(255,255,255,0.18)" />

      {/* icon paths */}
      <g transform="translate(70,38)">
        <g transform="translate(-18,-18) scale(1.5)">
          <path
            d="M3.21265 0.617432C2.83184 0.617432 2.46331 0.69124 2.10819 0.840028C1.74748 0.991158 1.42809 1.20907 1.14779 1.49141C-0.747326 3.40574 0.479976 6.76811 3.10879 6.86417L8.10846 7.04694C8.29719 7.05397 8.4848 7.07974 8.66907 7.12426C8.85333 7.16878 9.0309 7.23087 9.20511 7.31054C9.37709 7.3902 9.54236 7.48744 9.69759 7.59991C9.85282 7.71238 9.99688 7.83891 10.1298 7.98067C10.2615 8.12243 10.381 8.2759 10.4849 8.44109C10.5899 8.60628 10.6781 8.77967 10.7518 8.9636C10.8244 9.14637 10.8802 9.33499 10.9193 9.52947C10.9584 9.72394 10.9796 9.91959 10.983 10.1176L11.0857 16.4604C11.0902 16.7638 11.1371 17.0614 11.2242 17.3508C11.3124 17.6402 11.4375 17.9108 11.5994 18.1627C11.7625 18.4146 11.9556 18.636 12.1801 18.8281C12.4046 19.0202 12.6503 19.1749 12.9183 19.2921C13.1852 19.4092 13.4633 19.483 13.7514 19.5158C13.8552 19.5275 13.9591 19.5334 14.063 19.5334C14.2461 19.5334 14.4281 19.5158 14.6102 19.4795C14.8949 19.4244 15.1663 19.326 15.4231 19.1878C15.6811 19.0495 15.9145 18.875 16.1233 18.6641L16.2261 18.561C16.503 18.281 16.7219 17.9576 16.8805 17.5886C17.038 17.2207 17.1251 16.8353 17.1407 16.4311L17.6209 3.94465C17.6287 3.73612 17.6175 3.52758 17.5852 3.32021C17.5528 3.11285 17.5025 2.91134 17.431 2.71569C17.3607 2.52004 17.2725 2.33259 17.1653 2.15569C17.0592 1.97878 16.9375 1.81359 16.799 1.66246C16.6605 1.51133 16.5097 1.37426 16.3456 1.25476C16.1814 1.13526 16.0072 1.03451 15.8241 0.951326C15.6398 0.868146 15.4511 0.806053 15.2556 0.762705C15.0591 0.719358 14.8625 0.697098 14.6626 0.695927L3.23052 0.622118H3.21042"
            fill="white"
          />
        </g>
      </g>

      <g transform="translate(56,50)">
        <g transform="translate(-18,-18) scale(1.5)">
          <path
            d="M3.21265 0.617432C2.83184 0.617432 2.46331 0.69124 2.10819 0.840028C1.74748 0.991158 1.42809 1.20907 1.14779 1.49141C-0.747326 3.40574 0.479976 6.76811 3.10879 6.86417L8.10846 7.04694C8.29719 7.05397 8.4848 7.07974 8.66907 7.12426C8.85333 7.16878 9.0309 7.23087 9.20511 7.31054C9.37709 7.3902 9.54236 7.48744 9.69759 7.59991C9.85282 7.71238 9.99688 7.83891 10.1298 7.98067C10.2615 8.12243 10.381 8.2759 10.4849 8.44109C10.5899 8.60628 10.6781 8.77967 10.7518 8.9636C10.8244 9.14637 10.8802 9.33499 10.9193 9.52947C10.9584 9.72394 10.9796 9.91959 10.983 10.1176L11.0857 16.4604C11.0902 16.7638 11.1371 17.0614 11.2242 17.3508C11.3124 17.6402 11.4375 17.9108 11.5994 18.1627C11.7625 18.4146 11.9556 18.636 12.1801 18.8281C12.4046 19.0202 12.6503 19.1749 12.9183 19.2921C13.1852 19.4092 13.4633 19.483 13.7514 19.5158C13.8552 19.5275 13.9591 19.5334 14.063 19.5334C14.2461 19.5334 14.4281 19.5158 14.6102 19.4795C14.8949 19.4244 15.1663 19.326 15.4231 19.1878C15.6811 19.0495 15.9145 18.875 16.1233 18.6641L16.2261 18.561C16.503 18.281 16.7219 17.9576 16.8805 17.5886C17.038 17.2207 17.1251 16.8353 17.1407 16.4311L17.6209 3.94465C17.6287 3.73612 17.6175 3.52758 17.5852 3.32021C17.5528 3.11285 17.5025 2.91134 17.431 2.71569C17.3607 2.52004 17.2725 2.33259 17.1653 2.15569C17.0592 1.97878 16.9375 1.81359 16.799 1.66246C16.6605 1.51133 16.5097 1.37426 16.3456 1.25476C16.1814 1.13526 16.0072 1.03451 15.8241 0.951326C15.6398 0.868146 15.4511 0.806053 15.2556 0.762705C15.0591 0.719358 14.8625 0.697098 14.6626 0.695927L3.23052 0.622118H3.21042"
            fill="white"
          />
        </g>
      </g>

      <g transform="translate(60,0)">
        {lines.map((ln, i) => (
          <text
            key={i}
            x="0"
            y={120 - 12 - (lines.length - 1 - i) * 13}
            textAnchor="middle"
            fontSize="12"
            fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
            fill="white"
            fontWeight="600"
          >
            {ln}
          </text>
        ))}
      </g>
    </svg>
  );
}

/* ---------- Program Card ---------- */
export default function ProgramCard({ title, subtitle, description, image, color = "#2C4244", id }) {
  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Check if this card's ID matches the hash in the URL
    if (id && typeof window !== 'undefined') {
      const hash = window.location.hash.substring(1);
      if (hash === id) {
        setExpanded(true);
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 600);
      }
    }
  }, [id]);

  return (
    <div id={id} className="border-t border-slate-200 pt-6 mt-6 transition-all scroll-mt-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center text-base md:text-lg font-semibold text-slate-800"
        >
          <svg
            width="18"
            height="11"
            viewBox="0 0 18 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`mr-2 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          >
            <path d="M1 1L9 9L17 1" stroke="#2D4245" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {title}
        </button>

        <button
          onClick={() => setLiked(!liked)}
          aria-label="Toggle favorite"
          className="transition-transform active:scale-90"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 10.5754C0 4.73475 4.73475 0 10.5754 0C16.416 0 21.1507 4.73475 21.1507 10.5754C21.1507 16.416 16.416 21.1507 10.5754 21.1507C4.73475 21.1507 0 16.416 0 10.5754Z"
              fill={liked ? "#E63946" : "#89939E"}
            />
            <g clipPath="url(#clip0_1445_234)">
              <path
                d="M12.7068 6.77469C13.0134 6.77477 13.3176 6.83576 13.6003 6.95438C13.8831 7.07299 14.1393 7.24742 14.3542 7.46609C14.7924 7.91226 15.0378 8.51264 15.0378 9.13797C15.0378 9.68526 14.8502 10.2136 14.5095 10.636L14.3542 10.8098L10.575 14.635L6.79663 10.8098H6.79761C6.35933 10.3637 6.11308 9.76338 6.11304 9.13797C6.11304 8.51251 6.3593 7.91229 6.79761 7.46609L6.79663 7.46512C7.01159 7.2466 7.26881 7.07383 7.55151 6.95535C7.83421 6.83691 8.13759 6.77567 8.44409 6.77567C8.75062 6.77568 9.05396 6.83689 9.33667 6.95535C9.61941 7.07384 9.8756 7.24753 10.0906 7.46609H10.0916L10.4578 7.83621L10.5759 7.95438L10.6931 7.83621L11.0593 7.46609H11.0603C11.275 7.24716 11.5315 7.07299 11.8142 6.95438C12.0969 6.83581 12.4003 6.77447 12.7068 6.77469Z"
                fill="white"
                stroke="white"
                strokeWidth="0.3"
              />
            </g>
            <defs>
              <clipPath id="clip0_1445_234">
                <rect width="10.5754" height="10.5754" fill="white" transform="translate(5.2876 5.28763)" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      {/* Collapsible Body */}
      {expanded && (
        <div className="mt-4 flex flex-col gap-4 transition-all duration-300 ease-in-out">
          {/* --- MOBILE IMAGE --- */}
          <div className="block sm:hidden">
            {image ? (
              <div className="relative w-full h-[200px] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 640px"
                />
              </div>
            ) : (
              <div
                className="rounded-2xl px-5 py-4 flex items-center justify-between text-white"
                style={{ backgroundColor: color }}
              >
                <span className="text-[15px] font-medium leading-snug">{subtitle}</span>
                <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <g transform="translate(9,1) scale(0.9)">
                    <path
                      d="M3.21265 0.617432C2.83184 0.617432 2.46331 0.69124 2.10819 0.840028C1.74748 0.991158 1.42809 1.20907 1.14779 1.49141C-0.747326 3.40574 0.479976 6.76811 3.10879 6.86417L8.10846 7.04694C8.29719 7.05397 8.4848 7.07974 8.66907 7.12426C8.85333 7.16878 9.0309 7.23087 9.20511 7.31054C9.37709 7.3902 9.54236 7.48744 9.69759 7.59991C9.85282 7.71238 9.99688 7.83891 10.1298 7.98067C10.2615 8.12243 10.381 8.2759 10.4849 8.44109C10.5899 8.60628 10.6781 8.77967 10.7518 8.9636C10.8244 9.14637 10.8802 9.33499 10.9193 9.52947C10.9584 9.72394 10.9796 9.91959 10.983 10.1176L11.0857 16.4604C11.0902 16.7638 11.1371 17.0614 11.2242 17.3508C11.3124 17.6402 11.4375 17.9108 11.5994 18.1627C11.7625 18.4146 11.9556 18.636 12.1801 18.8281C12.4046 19.0202 12.6503 19.1749 12.9183 19.2921C13.1852 19.4092 13.4633 19.483 13.7514 19.5158C13.8552 19.5275 13.9591 19.5334 14.063 19.5334C14.2461 19.5334 14.4281 19.5158 14.6102 19.4795C14.8949 19.4244 15.1663 19.326 15.4231 19.1878C15.6811 19.0495 15.9145 18.875 16.1233 18.6641L16.2261 18.561C16.503 18.281 16.7219 17.9576 16.8805 17.5886C17.038 17.2207 17.1251 16.8353 17.1407 16.4311L17.6209 3.94465C17.6287 3.73612 17.6175 3.52758 17.5852 3.32021C17.5528 3.11285 17.5025 2.91134 17.431 2.71569C17.3607 2.52004 17.2725 2.33259 17.1653 2.15569C17.0592 1.97878 16.9375 1.81359 16.799 1.66246C16.6605 1.51133 16.5097 1.37426 16.3456 1.25476C16.1814 1.13526 16.0072 1.03451 15.8241 0.951326C15.6398 0.868146 15.4511 0.806053 15.2556 0.762705C15.0591 0.719358 14.8625 0.697098 14.6626 0.695927L3.23052 0.622118H3.21042"
                      fill="white"
                    />
                  </g>
                  <g transform="translate(1,9) scale(0.9)">
                    <path
                      d="M3.21265 0.617432C2.83184 0.617432 2.46331 0.69124 2.10819 0.840028C1.74748 0.991158 1.42809 1.20907 1.14779 1.49141C-0.747326 3.40574 0.479976 6.76811 3.10879 6.86417L8.10846 7.04694C8.29719 7.05397 8.4848 7.07974 8.66907 7.12426C8.85333 7.16878 9.0309 7.23087 9.20511 7.31054C9.37709 7.3902 9.54236 7.48744 9.69759 7.59991C9.85282 7.71238 9.99688 7.83891 10.1298 7.98067C10.2615 8.12243 10.381 8.2759 10.4849 8.44109C10.5899 8.60628 10.6781 8.77967 10.7518 8.9636C10.8244 9.14637 10.8802 9.33499 10.9193 9.52947C10.9584 9.72394 10.9796 9.91959 10.983 10.1176L11.0857 16.4604C11.0902 16.7638 11.1371 17.0614 11.2242 17.3508C11.3124 17.6402 11.4375 17.9108 11.5994 18.1627C11.7625 18.4146 11.9556 18.636 12.1801 18.8281C12.4046 19.0202 12.6503 19.1749 12.9183 19.2921C13.1852 19.4092 13.4633 19.483 13.7514 19.5158C13.8552 19.5275 13.9591 19.5334 14.063 19.5334C14.2461 19.5334 14.4281 19.5158 14.6102 19.4795C14.8949 19.4244 15.1663 19.326 15.4231 19.1878C15.6811 19.0495 15.9145 18.875 16.1233 18.6641L16.2261 18.561C16.503 18.281 16.7219 17.9576 16.8805 17.5886C17.038 17.2207 17.1251 16.8353 17.1407 16.4311L17.6209 3.94465C17.6287 3.73612 17.6175 3.52758 17.5852 3.32021C17.5528 3.11285 17.5025 2.91134 17.431 2.71569C17.3607 2.52004 17.2725 2.33259 17.1653 2.15569C17.0592 1.97878 16.9375 1.81359 16.799 1.66246C16.6605 1.51133 16.5097 1.37426 16.3456 1.25476C16.1814 1.13526 16.0072 1.03451 15.8241 0.951326C15.6398 0.868146 15.4511 0.806053 15.2556 0.762705C15.0591 0.719358 14.8625 0.697098 14.6626 0.695927L3.23052 0.622118H3.21042"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
            )}
          </div>

          {/* --- DESKTOP LAYOUT --- */}
          <div className="hidden sm:flex items-start gap-4">
            <div className="hidden sm:block shrink-0">
              {image ? (
                <div className="relative w-[92px] h-[92px] rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="92px"
                  />
                </div>
              ) : (
                <GeneratedThumbnail title={title} color={color} />
              )}
            </div>
            <div className="flex-1 text-left">
              <p className="text-[14px] leading-6 text-slate-600">{description}</p>
            </div>
          </div>

          {/* --- Mobile description (below banner) --- */}
          <div className="sm:hidden text-left">
            <p className="text-[14px] leading-6 text-slate-600">{description}</p>
          </div>

          {/* CTA Button */}
          <div>
            <ConnectPopup>
              <button
                type="button"
                className="w-full rounded-full border border-[#8B8F67] px-4 py-2 text-sm font-medium text-[#4D4D4D] hover:bg-[#F5F5F0] transition"
              >
                Connect with us for more details
              </button>
            </ConnectPopup>
          </div>
        </div>
      )}
    </div>
  );
}
