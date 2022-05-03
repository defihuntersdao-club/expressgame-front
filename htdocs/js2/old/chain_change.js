async function change_chain(c) {
	var v = 0;
	switch (c) {
		case "bsc":
			v = "0x38";
			break;
		case "eth":
			v = "0x1";
			break;
		case "matic":
			v = "0x89";
			break;
	}

	await ethereum.request({
		method: 'wallet_switchEthereumChain',
		params: [{ chainId: v }],
	});
}