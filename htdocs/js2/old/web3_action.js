function network_switch_polygon() {
    log("SELECT: network_switch_polygon");
    log("SELECT Chain: " + chainId);
    //    console.log(glob["api_wallet_info"]);
}
async function approve_addao() {

    //    console.log("ID: "+id);
    //    console.log(glob["api_wallet_info"]);
    var contractAddr = glob["api_wallet_info"]["addr_contract"];
    var tkn = glob["api_wallet_info"]["addr_addao"];

    const provider2 = new ethers.providers.Web3Provider(provider);
    const signer2 = provider2.getSigner()
    console.log("Contract: " + tkn);

    var wal = selectedAccount;
    if (!wal) return false;

    const cApprove = new ethers.Contract(tkn, glob["abi"], signer2);
    r = await cApprove.approve(contractAddr, "10000000000000000000000000000000000000000000000000");

}
async function claim_ddao(round) {

    //    console.log("ID: "+id);
    //    console.log(glob["api_wallet_info"]);
    var contractAddr = glob["api_wallet_info"]["addr_contract"];
    //   tkn = glob["api_wallet_info"]["addr_addao"];

    const provider2 = new ethers.providers.Web3Provider(provider);
    const signer2 = provider2.getSigner()
    console.log("Contract: " + contractAddr);
    console.log("Round: " + round);

    var wal = selectedAccount;
    if (!wal) return false;

    const cClaim = new ethers.Contract(contractAddr, glob["abi"], signer2);
    r = await cClaim.claim(round);
    console.log("R:" + r);

}
async function claim_ddao_team() {
    var contractAddr = glob["api_wallet_info"]["contract_ddao_team"];
    log("FUNC: " + claim_ddao_team);
    const provider2 = new ethers.providers.Web3Provider(provider);
    const signer2 = provider2.getSigner()
    console.log("Contract: " + contractAddr);
    var wal = selectedAccount;
    if (!wal) return false;

    const cClaim = new ethers.Contract(contractAddr, glob["abi_ddao_team"], signer2);
    r = await cClaim.Claim(wal);
    console.log("R:" + r);
}
