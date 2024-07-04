"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Button } from "./moving-border";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "true", { expires: 30 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
<div className="fixed bottom-0 left-0 right-0 bg-black p-4 flex justify-between items-center z-50 text-xs">
    <div>
        {`Diese Website verwendet nur technisch notwendige Cookies, um die
        Funktionalität der Website sicherzustellen. Es werden keine Cookies gespeichert,
        die für die Funktionalität der Website nicht erforderlich sind.`}
    </div>
    <div className="space-x-4">
        <Button
            className="text-xl hover:scale-105 transition ease-in-out duration-100"
            onClick={handleAccept}
        >
            Akzeptieren
        </Button>
    </div>
</div>

  );
};

export default CookieBanner;