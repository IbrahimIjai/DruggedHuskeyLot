import { nftlottery_Abi, TDHLocker_Abi } from "./abi";

import { Address } from "wagmi";

const nftlottery = {
  address: "0xe63100024beB0FCA50419cEDAD09054813939430" as Address,
  abi: nftlottery_Abi,
} as const;

const TDHLocker = {
  address: "0xB99E5105B5EA829348Dcd72BCF78C2153450766f" as Address,
  abi: TDHLocker_Abi,
};

export { nftlottery, TDHLocker };
