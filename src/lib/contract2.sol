// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IERC721 {
    function ownerOf(uint256 tokenId) external view returns (address owner);
}

interface IERC721Metadata is IERC721 {
    function tokenURI(uint256 tokenId) external view returns (string memory);
}

contract Ownable {
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }
}

contract NFTLotery is Ownable {
    struct LotteryEvent {
        address collection_address;
        address admin;
        uint256 luckyNumber;
        address luckyuser;
        uint256 time;
        string nftUrl;
    }

    address testcollection;
    uint256 testTotalSupply;
    uint256 public lotteryEventCount;

    mapping(uint256 => LotteryEvent) public eventsByLotteryCount;
    mapping(address => LotteryEvent) public eventsByWinnersAddress;

    constructor(address _testcollection, uint256 _testTotalSupply) {
        testcollection = _testcollection;
        testTotalSupply = _testTotalSupply;
    }

    function ReadERC721() public view returns (string memory nfturl, address user) {
        user = IERC721(testcollection).ownerOf(1);
        nfturl = IERC721Metadata(testcollection).tokenURI(1);
    }

    function getLuckyHolder()
        public
        returns (
            address luckyuser,
            uint256 nftid,
            string memory nfturl
        )
    {
        nftid = randomNumberGenerator(testTotalSupply);
        luckyuser = IERC721(testcollection).ownerOf(nftid);
        nfturl = IERC721Metadata(testcollection).tokenURI(nftid);

        eventsByLotteryCount[lotteryEventCount] = LotteryEvent({
            collection_address: testcollection,
            admin: msg.sender,
            luckyNumber: nftid,
            luckyuser: luckyuser,
            time: block.timestamp,
            nftUrl: nfturl
        });

        lotteryEventCount++;

        emit LotteryRole(
            testcollection,
            msg.sender,
            nftid,
            luckyuser,
            block.timestamp,
            nfturl
        );
    }

    function randomNumberGenerator(uint256 totalsupply)
        public
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
            ) % totalsupply;
    }

    function getEventByLattestIndex()
        public
        view
        returns (LotteryEvent memory eventByIndex)
    {
        eventByIndex = eventsByLotteryCount[lotteryEventCount - 1];
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