// contract address on eth sepolia:

var mock_Weth = '0x167287ae959fb06c6e6b50844fe8a970bed2689a' 
var mock_dai = '0x46D34c7cF05463158D4aFcFcaDeB2F5D287Cccca'
var natrium_main_contract = '0x44F2680cb371F5D6C54029550c4d22c78FE28719' 
var IRM = '0x9eD4EDF314EEC2684E5F08e1E256a21fD387D1E9' 
var oracles = '0xF6AaDF014E01f438B8559c1A743D6b2c4f2d456E'

// to create markets call the create Market function createMarket (CreateMarkets)

const CreateMarkets = {

loanToken: '0x167287ae959fb06c6e6b50844fe8a970bed2689a',
collateralToken: '0x46D34c7cF05463158D4aFcFcaDeB2F5D287Cccca', 
oracle: '0xF6AaDF014E01f438B8559c1A743D6b2c4f2d456E', 
irm: '0x9eD4EDF314EEC268AE5f08e1E256a21fD387D1E9', 
Iltv: BigInt(900000000000000000),

}
// assets: x 10^18
// shares: 0
// onBehalf: your addy
// receiver: your addy
// data:0x

const marketParams = {
    loanToken: '0x167287 Ae9 5 9f6 0 6 c6e6b50844fe8a9706ED2689a', 
    collateralToken: 'OxC734D5F31C61a16716017E0BCF7698 Fe01BC2717', 
    oracle: 'Ox9e4f472 F81CFaF258cFF4701Fce 45 D531DFa6646', 
    irm: 'Ox9eDYEDF314EEC 268 AE5FO8e1E256a21FD387D1E9', 
    Iltv: BigInt(900000000000000000)
}

to supply assets call the supply function: supply marketParams, assets, shares, on Behalf, data)

to withdraw assets call the withdraw function withdraw marketParams, assets, shares, on Behalf, receiver)

to supply Collateral call the supplyCollateral (marketParams, assets, on Behalf, data)

to withdraw collateral call the withdraw CollateralkmarketParams, assets, on Behalf, receiver)

to borrow assets call the borrowmarketParams, assets, shares, on Behalf, receiver)

to repay assets call the repay Assets.repay/marketParams, assets, shares, on Behalf,data)