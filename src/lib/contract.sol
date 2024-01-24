
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTLotery is Ownable {
    //mapping of number =>  struct of lottery details{ collection, caller, lucky number, lucky id, time}/

    //lottery count
    struct LotteryEvent {
        address collection_address;
        address admin;
        uint256 luckyNumber;
        address luckyuser;
        uint256 time;
        string nftUrl;
    }

    mapping(uint256 => LotteryEvent) public eventsByLotteryCount;
    mapping(address => LotteryEvent) public eventsByWinnersAddress;
    uint256 public lotteryEventCount;

    function getLuckyHolder(
        address nft_colllection_address,
        uint256 totalsupply
    )
        public
        returns (
            address luckyuser,
            uint256 nftid,
            string memory nfturl
        )
    {
        nftid = randomNumberGenerator(totalsupply);
        luckyuser = IERC721(nft_colllection_address).ownerOf(nftid);
        nfturl = IERC721Metadata(nft_colllection_address).tokenURI(nftid);

        eventsByLotteryCount[lotteryEventCount] = LotteryEvent({
            collection_address: nft_colllection_address,
            admin: msg.sender,
            luckyNumber: nftid,
            luckyuser: luckyuser,
            time: block.timestamp,
            nftUrl: nfturl
        });

        lotteryEventCount++;

        emit LotteryRole (nft_colllection_address, msg.sender, nftid, luckyuser, block.timestamp, nfturl);
    }

    function randomNumberGenerator(uint256 totalsupply)
        internal
        view
        returns (uint256 randomnumber)
    {
        randomnumber =
            uint256(
                keccak256(
                    abi.encodePacked(
                        blockhash(block.number - 1),
                        msg.sender,
                        block.difficulty,
                        block.timestamp
                    )
                )
            ) %
            totalsupply;
    }

    function getEventByIndex(uint256 lotteryIndex)
        public
        view
        returns (LotteryEvent memory eventByIndex)
    {
        eventByIndex = eventsByLotteryCount[lotteryIndex];
    }

    function getEventByWinnerAddress(address winnerAddress)
        public
        view
        returns (LotteryEvent memory eventByIndex)
    {
        eventByIndex = eventsByWinnersAddress[winnerAddress];
    }

    event LotteryRole(
        address indexed collectionAddress,
        address indexed admin,
        uint256 luckyNumber,
        address indexed luckyUser,
        uint256 time, 
        string nftUrl
    );
}


