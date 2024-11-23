"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useStore } from "@/context/Store";

import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
import useClientWidth from "@/hooks/useClientWidth";
import BurgerMenu from "./BurgerMenu";
import Cart from "../cart/Cart";

import Logo from "@/assets/svgs/logo.svg";
import CartSVG from "@/assets/svgs/icon-cart.svg";

export default function Header() {
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const { cart } = useStore();

  const isMobile = useClientWidth({ operator: "<", number: 1024 });
  const isDesktop = useClientWidth({ operator: ">=", number: 1024 });

  const path = usePathname();

  //* closes navigation/cart on every route change
  useEffect(() => {
    if (isMobile) setShowMobileNavigation(false);

    setShowCart(false);
  }, [path]);

  function handleShowMobileNavigation() {
    setShowMobileNavigation(!showMobileNavigation);
  }

  const getTotalCartCount = useCallback(() => {
    if (cart) {
      const totalCount = cart.reduce(
        (memo, { quantity }) => memo + quantity,
        0,
      );
      return totalCount;
    } else return 0;
  }, [cart]);

  const [animateCart, setAnimateCart] = useState();

  const [currentCartCount, setCurrentCartCount] = useState(getTotalCartCount());

  //* to trigger cart animation when item/count is added
  useEffect(() => {
    const newCount = getTotalCartCount();

    if (newCount > currentCartCount) {
      setAnimateCart(true);
    }

    setCurrentCartCount(newCount);

    const timeOut = setTimeout(() => {
      setAnimateCart(false);
    }, 350);

    return () => clearTimeout(timeOut);
  }, [cart, currentCartCount, getTotalCartCount]);

  function handleShowCart() {
    setShowCart(!showCart);
  }

  return (
    <>
      <header
        className={`sticky top-0 z-30 mx-auto flex h-[90px] w-full justify-center bg-primaryColor`}
      >
        <div
          className={`max-w-1200px justify- flex h-full w-full items-center gap-4`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`flex flex-1 justify-center md:scale-125 lg:flex-none`}
          >
            {isMobile && (
              <BurgerMenu
                isOpen={showMobileNavigation}
                handleClick={handleShowMobileNavigation}
              />
            )}
          </motion.div>
          <div
            className={`flex flex-[3] justify-center md:justify-start lg:flex-1 lg:justify-center`}
          >
            <Link href={"/"} className={`p-1`}>
              <Logo
                aria-label="Logo, links to Homepage"
                className={`aspect-auto fill-secondaryColor md:scale-110`}
              />
            </Link>
          </div>
          <div className={`lg:flex-[2]`}>
            <DesktopNavigation isVisible={isDesktop} />
          </div>
          <div
            className={`flex flex-1 justify-center lg:flex-1 lg:-translate-x-6 lg:justify-end`}
          >
            <button
              onClick={handleShowCart}
              aria-label="toggle cart"
              className={`p-1 ${animateCart ? `wiggle` : `animate-none`}`}
            >
              <CartSVG
                className={`min-w-6 ${currentCartCount > 0 ? `fill-secondaryColor hover:fill-secondaryColor` : `fill-none hover:fill-none`} hover:stroke-accentColor md:scale-125`}
              />
            </button>
          </div>
        </div>
      </header>
      <MobileNavigation
        isVisible={showMobileNavigation && isMobile}
        closeNavigation={handleShowMobileNavigation}
      />
      {showCart && <Cart closeCart={handleShowCart} />}
    </>
  );
}
