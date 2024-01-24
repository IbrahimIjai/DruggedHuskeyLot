import {nftlottery_Abi} from "./abi"

import {
    Address,
  } from "wagmi";


const nftlottery = {
    address: "0xe63100024beB0FCA50419cEDAD09054813939430" as Address,
    abi: nftlottery_Abi,
  } as const;




  export {nftlottery}