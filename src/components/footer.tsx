import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex items-center justify-center w-full text-[10px] text-foreground/50">
      <p>
        Built by Sleek labs😊
        <Link href="https://twitter.com/IbrahimIjai" className="underline ">
          {""}Contact
        </Link>
      </p>
    </div>
  );
}

export default Footer;
