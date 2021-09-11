# NFT study

## ERC20 vs ERC721

"lumped together" as a nuber in a ledger => assets have its ownership individually and atomically tracked
## How to store

every NFT stores as a unit256 ID in a ERC-721 compatible smart contract, the pair (contract address, uint256 tokenID) is globally unique in the chain.

## How to transfer ownership

transferFrom

- The owner of an NFT

- An approved address of an NFT

- An authorized operator of the current owner of an NFT