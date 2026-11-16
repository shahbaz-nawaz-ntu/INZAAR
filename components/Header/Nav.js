"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  {
    key: "home",
    label: "Home",
    href: "/",
    match: (p) => p === "/",
  },
  {
    key: "about",
    label: "About",
    href: "/about",
    match: (p) => p === "/about" || p.startsWith("/about/"),
  },
  {
    key: "courses",
    label: "Courses",
    href: "/course-masonry",
    match: (p) => p.startsWith("/course"),
  },
  {
    key: "contact",
    label: "Contact",
    href: "/contact",
    match: (p) => p === "/contact" || p.startsWith("/contact/"),
  },
];

const Nav = () => {
  const pathname = usePathname() || "/";

  // Initial active key based on current pathname
  const getCurrentKey = (path) => {
    const found = navItems.find((item) => item.match(path));
    return found ? found.key : null;
  };

  const [optimisticKey, setOptimisticKey] = useState(() => getCurrentKey(pathname));
  const [navigatingKey, setNavigatingKey] = useState(null);

  // Sync active item when pathname finishes changing
  useEffect(() => {
    setNavigatingKey(null);
    setOptimisticKey(getCurrentKey(pathname));
  }, [pathname]);

  const handleNavClick = (item) => {
    // If clicking the already active route, no need to navigate
    if (item.match(pathname)) {
      return;
    }

    // Immediately select clicked item and start loading animation
    setOptimisticKey(item.key);
    setNavigatingKey(item.key);

    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("app:nav-start", { detail: { href: item.href } })
      );
    }
  };

  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        {navItems.map((item) => {
          const isSelected = optimisticKey === item.key;
          const isLoading = navigatingKey === item.key;

          return (
            <li
              key={item.key}
              className={`with-megamenu has-menu-child-item position-static ${
                isSelected ? "active" : ""
              }`}
            >
              <Link
                href={item.href}
                onClick={() => handleNavClick(item)}
                className={isSelected ? "active" : ""}
                style={{
                  position: "relative",
                  color: isSelected ? "#9333ea" : undefined,
                  fontWeight: isSelected ? "600" : "500",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  transition: "color 0.2s ease, font-weight 0.2s ease",
                }}
              >
                <span>{item.label}</span>

                {isLoading && (
                  <span
                    className="spinner-border spinner-border-sm"
                    style={{
                      width: "12px",
                      height: "12px",
                      borderWidth: "2px",
                      color: "#9333ea",
                    }}
                    role="status"
                    aria-hidden="true"
                  />
                )}

                {isSelected && (
                  <span
                    className="d-none d-xl-block"
                    style={{
                      position: "absolute",
                      bottom: "22px",
                      left: "17px",
                      right: "17px",
                      height: "3px",
                      background: "linear-gradient(90deg, #6366f1, #9333ea)",
                      borderRadius: "2px",
                      boxShadow: "0 2px 8px rgba(147, 51, 234, 0.4)",
                      transition: "all 0.2s ease",
                    }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
