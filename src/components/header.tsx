"use client";

import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useBalance } from "wagmi";
import { formatEther } from "viem";
export default function Header() {
  const { isConnected, address } = useAccount();
  const { data, isLoading, isError, isSuccess } = useBalance({
    address,
  });
  return (
    <div className="fixed inset-x-0 top-0 w-full h-16 px-6 py-3 border-b shadow-lg backdrop-blur-lg">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold ">DOGE</p>
        <div className="flex items-center gap-2">
          {isConnected && isSuccess && data && (
            <div>
              {formatEther(data.value)}{" "}
              <span className="font-semibold">WDOGE</span>
            </div>
          )}
          <ConnectButton showBalance={false} />
        </div>
      </div>
    </div>
  );
}
