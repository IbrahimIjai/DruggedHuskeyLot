"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, ChangeEvent, useEffect } from "react";

import { format } from "date-fns";

import {
  Address,
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

import { nftlottery } from "@/lib/config";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
// import { abi } from "../lib/abi";
interface trxarguments {
  collection_address: string;
  total_supply: number;
}

// const contractConfig = {
//   address: "0x1555E9c81601F45739163EA69f6079F7EC170047" as Address,
//   abi: abi,
// } as const;
export default function Home() {
  const [winningImgUrl, setWinningImgUrl] = useState<string>("");
  const [imgLoading, setImgLoading] = useState(false);
  const { config: contractWriteConfig } = usePrepareContractWrite({
    ...nftlottery,
    functionName: "getLuckyHolder",
  });

  const {
    data: lotteryData,
    write: getLuckyHolder,
    isLoading: isLotteryLoading,
    isSuccess: isLotteryFinished,
    error: lotteryError,
  } = useContractWrite(contractWriteConfig);

  const { data: latestLottery, refetch: refectLatestInfo } = useContractRead({
    ...nftlottery,
    functionName: "getEventByLattestIndex",
    watch: true,
  });

  const {
    data: txData,
    isSuccess: txSuccess,
    error: txError,
  } = useWaitForTransaction({
    hash: lotteryData?.hash,
  });

  const fetchNFTImage = async (winningNftUrl: string) => {
    setImgLoading(true);
    let newUrl = winningNftUrl.replace("ipfs://", "https://ipfs.io/ipfs/");
    let metadata = await axios.get(newUrl).catch(function (error) {
      console.log(error.toJSON());
    });

    console.log(metadata?.data);
    let nftdata = metadata?.data;
    console.log(nftdata.image.replace("ipfs://", "https://ipfs.io/ipfs/"));
    setWinningImgUrl(nftdata.image.replace("ipfs://", "https://ipfs.io/ipfs/"));
    setImgLoading(false);
  };

  useEffect(() => {
    latestLottery && fetchNFTImage(latestLottery.nftUrl);
    txSuccess &&
      txData &&
      console.log(
        "this is recent transaction data",
        txData,
        "this is lotteryData",
        lotteryData,
      );
    refectLatestInfo();
  }, [txData, txSuccess, lotteryData, latestLottery]);

  return (
    <main className="flex flex-col items-center min-h-screen p-5">
      <h1 className="mx-auto my-4 font-semibold text-center">
        {" "}
        Drugged Huskies
      </h1>

      <div>
        <Button className="px-3 py-6" onClick={getLuckyHolder}>
          {isLotteryLoading
            ? "Rolling Dice"
            : isLotteryFinished
            ? "Winner Below"
            : "Roll the dice"}
        </Button>
      </div>

      <div>
        <h1 className="mx-auto my-4 font-semibold text-center">
          {" "}
          Last Lottery winner details
        </h1>
        {latestLottery && (
          <div>
            <p>
              <span className="text-xl font-bold"> Collection Address:</span>
              {latestLottery.collection_address}
            </p>
            <p>
              <span className="text-xl font-bold">Admin: </span>
              {latestLottery.admin}
            </p>
            <p>
              {" "}
              <span className="text-xl font-bold">Lucky Number:</span>{" "}
              {Number(latestLottery.luckyNumber)}
            </p>
            <p>
              {" "}
              <span className="text-xl font-bold">Lucky User: </span>
              {latestLottery.luckyuser}
            </p>
            <p>
              {" "}
              <span className="text-xl font-bold">Time:</span>
              {format(
                new Date(Number(latestLottery.time) * 1000),
                "do MMM, yyyy",
              )}
            </p>
            <p>NFT URL: {latestLottery.nftUrl}</p>
            <div>
              {imgLoading ? (
                <Skeleton className="h-[400px] w-[300px]" />
              ) : (
                <div className="relative w-[300px] h-[400px] overflow-hidden rounded-xl border">
                  <Image
                    src={winningImgUrl}
                    alt="NFT Image"
                    fill
                    className="objectFit-cover"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
