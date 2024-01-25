export const nftlottery_Abi = [
  {
    inputs: [],
    name: "getLuckyHolder",
    outputs: [
      {
        internalType: "address",
        name: "luckyuser",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nftid",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "nfturl",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_testcollection",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_testTotalSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "collectionAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "luckyNumber",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "luckyUser",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "nftUrl",
        type: "string",
      },
    ],
    name: "LotteryRole",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "eventsByLotteryCount",
    outputs: [
      {
        internalType: "address",
        name: "collection_address",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "luckyNumber",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "luckyuser",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "nftUrl",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "eventsByWinnersAddress",
    outputs: [
      {
        internalType: "address",
        name: "collection_address",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "luckyNumber",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "luckyuser",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "nftUrl",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEventByLattestIndex",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "collection_address",
            type: "address",
          },
          {
            internalType: "address",
            name: "admin",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "luckyNumber",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "luckyuser",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "nftUrl",
            type: "string",
          },
        ],
        internalType: "struct NFTLotery.LotteryEvent",
        name: "eventByIndex",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "winnerAddress",
        type: "address",
      },
    ],
    name: "getEventByWinnerAddress",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "collection_address",
            type: "address",
          },
          {
            internalType: "address",
            name: "admin",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "luckyNumber",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "luckyuser",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "nftUrl",
            type: "string",
          },
        ],
        internalType: "struct NFTLotery.LotteryEvent",
        name: "eventByIndex",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lotteryEventCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "totalsupply",
        type: "uint256",
      },
    ],
    name: "randomNumberGenerator",
    outputs: [
      {
        internalType: "uint256",
        name: "randomnumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ReadERC721",
    outputs: [
      {
        internalType: "string",
        name: "nfturl",
        type: "string",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export const TDHLocker_Abi = [

  {
    constant: true,
    inputs: [
      {
        name: "varg0",
        type: "address",
      },
    ],
    name: "lockTime",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },

  {
    constant: true,
    inputs: [
      {
        name: "varg0",
        type: "address",
      },
    ],
    name: "lockedBalance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },

  {
    constant: true,
    inputs: [
      {
        name: "user",
        type: "address",
      },
    ],
    name: "rewardBalance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "unlockTokens",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
] as const;
