
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import {
    useContractWrite,
    usePrepareContractWrite,
    useWaitForTransaction,
  } from "wagmi";
//   import { AUCTION, MARKETPLACE, OFFERS } from "../constants";
//   import { AuctionABI, OffersABI, marketplaceABI } from "../constants/ABIs";
  import { useEffect } from "react";
  
  export default function useWriteTransaction(
    fName,
    args,
    contract,
    close,
    value,
    refetch
  ) {
    let ABI;
    switch (contract) {
      case MARKETPLACE:
        ABI = marketplaceABI;
        break;
      case AUCTION:
        ABI = AuctionABI;
        break;
      case OFFERS:
        ABI = OffersABI;
    }
    const { config, error: configError } = usePrepareContractWrite({
      functionName: fName,
      args: args,
      abi: ABI,
      address: contract,
      onError: (err) => console.log(err),
      value: value ? value : undefined,
      // onError(error) {
      //     if (setNotify) {
      //       setNotify({
      //         type: ACTIONS.ERROR,
      //         msg: error.message,
      //         open: true,
      //       });
      //     }
      //   },
    });
    const { write, isLoading, data, isError, error } = useContractWrite(config);
  
    const { isLoading: wait, isSuccess } = useWaitForTransaction({
      hash: data?.hash,
    });
  
    useEffect(() => {
      if (close && isSuccess) {
        close("NONE");
        refetch && refetch();
      }
    }, [wait, isSuccess]);
  
    return { write, isLoading, data, isError, error, wait, isSuccess };
  }
  