export const Abi = {

    ERC20ABI:[
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "burnFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "counter",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "subtractedValue",
            "type": "uint256"
          }
        ],
        "name": "decreaseAllowance",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "addedValue",
            "type": "uint256"
          }
        ],
        "name": "increaseAllowance",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "mintAny",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    Main_contract_abi:[
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "DOMAIN_SEPARATOR",
        "outputs": [
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          }
        ],
        "name": "accrueInterest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "assets",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "shares",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "onBehalf",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          }
        ],
        "name": "borrow",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          }
        ],
        "name": "createMarket",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "irm",
            "type": "address"
          }
        ],
        "name": "enableIrm",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "lltv",
            "type": "uint256"
          }
        ],
        "name": "enableLltv",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32[]",
            "name": "slots",
            "type": "bytes32[]"
          }
        ],
        "name": "extSloads",
        "outputs": [
          {
            "internalType": "bytes32[]",
            "name": "res",
            "type": "bytes32[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "feeRecipient",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "assets",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "flashLoan",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "Id",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "idToMarketParams",
        "outputs": [
          {
            "internalType": "address",
            "name": "loanToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "collateralToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "oracle",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "irm",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "lltv",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "isAuthorized",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "isIrmEnabled",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "isLltvEnabled",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "address",
            "name": "borrower",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "seizedAssets",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "repaidShares",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "liquidate",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "Id",
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "market",
        "outputs": [
          {
            "internalType": "uint128",
            "name": "totalSupplyAssets",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "totalSupplyShares",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "totalBorrowAssets",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "totalBorrowShares",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "lastUpdate",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "fee",
            "type": "uint128"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "nonce",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "Id",
            "name": "",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "position",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "supplyShares",
            "type": "uint256"
          },
          {
            "internalType": "uint128",
            "name": "borrowShares",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "collateral",
            "type": "uint128"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "assets",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "shares",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "onBehalf",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "repay",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "authorized",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "newIsAuthorized",
            "type": "bool"
          }
        ],
        "name": "setAuthorization",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "authorizer",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "authorized",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "isAuthorized",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "nonce",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
              }
            ],
            "internalType": "struct Authorization",
            "name": "authorization",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8",
                "name": "v",
                "type": "uint8"
              },
              {
                "internalType": "bytes32",
                "name": "r",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
              }
            ],
            "internalType": "struct Signature",
            "name": "signature",
            "type": "tuple"
          }
        ],
        "name": "setAuthorizationWithSig",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "newFee",
            "type": "uint256"
          }
        ],
        "name": "setFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newFeeRecipient",
            "type": "address"
          }
        ],
        "name": "setFeeRecipient",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "setOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "assets",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "shares",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "onBehalf",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "supply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "assets",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "onBehalf",
            "type": "address"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "supplyCollateral",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "assets",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "shares",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "onBehalf",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          }
        ],
        "name": "withdraw",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "assets",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "onBehalf",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          }
        ],
        "name": "withdrawCollateral",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],

    Market_details_abi:[
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "morphoAddress",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "borrow",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "assetsBorrowed",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sharesBorrowed",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint128",
                "name": "totalSupplyAssets",
                "type": "uint128"
              },
              {
                "internalType": "uint128",
                "name": "totalSupplyShares",
                "type": "uint128"
              },
              {
                "internalType": "uint128",
                "name": "totalBorrowAssets",
                "type": "uint128"
              },
              {
                "internalType": "uint128",
                "name": "totalBorrowShares",
                "type": "uint128"
              },
              {
                "internalType": "uint128",
                "name": "lastUpdate",
                "type": "uint128"
              },
              {
                "internalType": "uint128",
                "name": "fee",
                "type": "uint128"
              }
            ],
            "internalType": "struct Market",
            "name": "market",
            "type": "tuple"
          }
        ],
        "name": "borrowAPY",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "borrowRate",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "borrowAssetsUser",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "totalBorrowAssets",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "Id",
            "name": "marketId",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "collateralAssetsUser",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "totalCollateralAssets",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          }
        ],
        "name": "marketTotalBorrow",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "totalBorrowAssets",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          }
        ],
        "name": "marketTotalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "totalSupplyAssets",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "morpho",
        "outputs": [
          {
            "internalType": "contract IMorpho",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "repay50Percent",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "assetsRepaid",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sharesRepaid",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "repayAll",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "assetsRepaid",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sharesRepaid",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "repayAmount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "assetsRepaid",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sharesRepaid",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "supply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "assetsSupplied",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sharesSupplied",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint128",
                "name": "totalSupplyAssets",
                "type": "uint128"
              },
              {
                "internalType": "uint128",
                "name": "totalSupplyShares",
                "type": "uint128"
              },
              {
                "internalType": "uint128",
                "name": "totalBorrowAssets",
                "type": "uint128"
              },
              {
                "internalType": "uint128",
                "name": "totalBorrowShares",
                "type": "uint128"
              },
              {
                "internalType": "uint128",
                "name": "lastUpdate",
                "type": "uint128"
              },
              {
                "internalType": "uint128",
                "name": "fee",
                "type": "uint128"
              }
            ],
            "internalType": "struct Market",
            "name": "market",
            "type": "tuple"
          }
        ],
        "name": "supplyAPY",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "supplyRate",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "supplyAssetsUser",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "totalSupplyAssets",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "supplyCollateral",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "Id",
            "name": "id",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "userHealthFactor",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "healthFactor",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "withdraw50Percent",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "assetsWithdrawn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sharesWithdrawn",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "withdrawAll",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "assetsWithdrawn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sharesWithdrawn",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "withdrawAmount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "assetsWithdrawn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sharesWithdrawn",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "loanToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "collateralToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "oracle",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "irm",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "lltv",
                "type": "uint256"
              }
            ],
            "internalType": "struct MarketParams",
            "name": "marketParams",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          }
        ],
        "name": "withdrawCollateral",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],

    Pricing_oracle_abi:[{
      "inputs": [
       {
        "internalType": "bytes32",
        "name": "_FEEIDBASE",
        "type": "bytes32"
       },
       {
        "internalType": "bytes32",
        "name": "_FEEIDQUOTE",
        "type": "bytes32"
       },
       {
        "internalType": "contract IPyth",
        "name": "_PYTH",
        "type": "address"
       },
       {
        "internalType": "contract IERC4626",
        "name": "_VAULT",
        "type": "address"
       },
       {
        "internalType": "uint256",
        "name": "_VAULT_CONVERSION_SAMPLE",
        "type": "uint256"
       },
       {
        "internalType": "uint256",
        "name": "_baseTokenDecimals",
        "type": "uint256"
       },
       {
        "internalType": "uint256",
        "name": "_quoteTokenDecimals",
        "type": "uint256"
       }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
     },
     {
      "inputs": [],
      "name": "baseTokenDecimals",
      "outputs": [
       {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
       }
      ],
      "stateMutability": "view",
      "type": "function"
     },
     {
      "inputs": [],
      "name": "FEEID_BASE",
      "outputs": [
       {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
       }
      ],
      "stateMutability": "view",
      "type": "function"
     },
     {
      "inputs": [],
      "name": "FEEID_QUOTE",
      "outputs": [
       {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
       }
      ],
      "stateMutability": "view",
      "type": "function"
     },
     {
      "inputs": [],
      "name": "price",
      "outputs": [
       {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
       }
      ],
      "stateMutability": "view",
      "type": "function"
     },
     {
      "inputs": [],
      "name": "PYTH",
      "outputs": [
       {
        "internalType": "contract IPyth",
        "name": "",
        "type": "address"
       }
      ],
      "stateMutability": "view",
      "type": "function"
     },
     {
      "inputs": [],
      "name": "quoteTokenDecimals",
      "outputs": [
       {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
       }
      ],
      "stateMutability": "view",
      "type": "function"
     },
     {
      "inputs": [],
      "name": "SCALE_FACTOR",
      "outputs": [
       {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
       }
      ],
      "stateMutability": "view",
      "type": "function"
     },
     {
      "inputs": [],
      "name": "VAULT",
      "outputs": [
       {
        "internalType": "contract IERC4626",
        "name": "",
        "type": "address"
       }
      ],
      "stateMutability": "view",
      "type": "function"
     },
     {
      "inputs": [],
      "name": "VAULT_CONVERSION_SAMPLE",
      "outputs": [
       {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
       }
      ],
      "stateMutability": "view",
      "type": "function"
     }
    ]
}