import React from "react";

const AppContext = React.createContext({
  sideNav: false,
  UpdatesideNav: () => {},
  enableWeb3: () => {},
  closeWeb3: () => {},
  oracle_contract:false,
  irm_contract:false,
  isWeb3Enabled: false,
  main_contract:false,
  market_info_contract:false,
  notification:() => {},
  user_account: false,
  displayAccount: false,
  signer: false,
  walletProvider:false,
  TradeFactorycontractAddress:false,
  MainControllercontractAddress:false,
  PresaleSmartContractAddress:false,
  RpcUrl: false,
  comingsoon:false,
  setPageLoading:false
});

export default AppContext;
