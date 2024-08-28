// const presaleAddress = "0xFa98A50538A7364f744A1E135Ecb9D10294D1c71";
// const presaleABI = [
//     {
//         "inputs": [
//             { "internalType": "address", "name": "_token", "type": "address" },
//             { "internalType": "uint256", "name": "_softCap", "type": "uint256" },
//             { "internalType": "uint256", "name": "_hardCap", "type": "uint256" },
//             { "internalType": "uint256", "name": "_duration", "type": "uint256" },
//             { "internalType": "uint256", "name": "_tokenPrice", "type": "uint256" }
//         ],
//         "stateMutability": "nonpayable",
//         "type": "constructor"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             { "indexed": true, "internalType": "address", "name": "contributor", "type": "address" },
//             { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
//         ],
//         "name": "Contribute",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             { "indexed": true, "internalType": "address", "name": "contributor", "type": "address" },
//             { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
//         ],
//         "name": "Refund",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             { "indexed": false, "internalType": "uint256", "name": "totalContributions", "type": "uint256" }
//         ],
//         "name": "SaleEnded",
//         "type": "event"
//     },
//     {
//         "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }],
//         "name": "contribute",
//         "outputs": [],
//         "stateMutability": "payable",
//         "type": "function"
//     },
//     {
//         "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
//         "name": "contributions",
//         "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "duration",
//         "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "endPresale",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "endTime",
//         "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "hardCap",
//         "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "owner",
//         "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "softCap",
//         "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "token",
//         "outputs": [{ "internalType": "contract AslamAliToken", "name": "", "type": "address" }],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "tokenPrice",
//         "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
//         "stateMutability": "view",
//         "type": "function"
//     }
// ];

// let web3;
// let presaleContract;

// window.onload = async () => {
//     if (window.ethereum) {
//         web3 = new Web3(window.ethereum);
//         await window.ethereum.enable();
//         presaleContract = new web3.eth.Contract(presaleABI, presaleAddress);
//         updatePresaleDetails();
//     } else {
//         alert("Please install MetaMask!");
//     }
// };

// const contribute = async () => {
//     const amount = document.getElementById("amount").value;
//     const accounts = await web3.eth.getAccounts();
    
//     try {
//         const tokenPrice = await presaleContract.methods.tokenPrice().call();
//         const weiAmount = amount * tokenPrice;
        
//         await presaleContract.methods.contribute(amount).send({ from: accounts[0], value: weiAmount });
//         alert("Contribution successful!");
//     } catch (error) {
//         console.error(error);
//         alert("Contribution failed!");
//     }
// };

// const getContribution = async () => {
//     const accounts = await web3.eth.getAccounts();
//     try {
//         const contribution = await presaleContract.methods.contributions(accounts[0]).call();
//         document.getElementById("contribution").innerText = `Your contribution: ${web3.utils.fromWei(contribution, 'ether')} ETH`;
//     } catch (error) {
//         console.error(error);
//         alert("Failed to fetch contribution!");
//     }
// };

// const updatePresaleDetails = async () => {
//     try {
//         const softCap = await presaleContract.methods.softCap().call();
//         const hardCap = await presaleContract.methods.hardCap().call();
//         const tokenPrice = await presaleContract.methods.tokenPrice().call();
//         const endTime = await presaleContract.methods.endTime().call();

//         document.getElementById("softCap").innerText = web3.utils.fromWei(softCap, 'ether');
//         document.getElementById("hardCap").innerText = web3.utils.fromWei(hardCap, 'ether');
//         document.getElementById("tokenPrice").innerText = tokenPrice;

//         updateTimeRemaining(endTime);
//     } catch (error) {
//         console.error(error);
//         alert("Failed to fetch presale details!");
//     }
// };

// const updateTimeRemaining = (endTime) => {
//     const interval = setInterval(() => {
//         const now = Math.floor(Date.now() / 1000);
//         const timeRemaining = endTime - now;

//         if (timeRemaining <= 0) {
//             clearInterval(interval);
//             document.getElementById("timeRemaining").innerText = "Presale has ended.";
//         } else {
//             const days = Math.floor(timeRemaining / (60 * 60 * 24));
//             const hours = Math.floor((timeRemaining % (60 * 60 * 24)) / (60 * 60));
//             const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
//             const seconds = Math.floor(timeRemaining % 60);

//             document.getElementById("timeRemaining").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
//         }
//     }, 1000);
// };



let web3;
let contract;
let tokenContract;
let accounts;

const presaleAddress = "0xFa98A50538A7364f744A1E135Ecb9D10294D1c71";
const tokenAddress = "0x251B25108C8D375feFEb6553f5fE3e1ba5B1E2D5";
const presaleAbi = [
    {
        "inputs": [
            { "internalType": "address", "name": "_token", "type": "address" },
            { "internalType": "uint256", "name": "_softCap", "type": "uint256" },
            { "internalType": "uint256", "name": "_hardCap", "type": "uint256" },
            { "internalType": "uint256", "name": "_duration", "type": "uint256" },
            { "internalType": "uint256", "name": "_tokenPrice", "type": "uint256" }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": true, "internalType": "address", "name": "contributor", "type": "address" },
            { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
        ],
        "name": "Contribute",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": true, "internalType": "address", "name": "contributor", "type": "address" },
            { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
        ],
        "name": "Refund",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": false, "internalType": "uint256", "name": "totalContributions", "type": "uint256" }
        ],
        "name": "SaleEnded",
        "type": "event"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }],
        "name": "contribute",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
        "name": "contributions",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "duration",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "endPresale",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "endTime",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "hardCap",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "softCap",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "token",
        "outputs": [{ "internalType": "contract AslamAliToken", "name": "", "type": "address" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenPrice",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    }
];
const tokenAbi = [{"inputs":[{"internalType":"uint256","name":"_initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

async function connectWallet() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            accounts = await web3.eth.getAccounts();
            contract = new web3.eth.Contract(presaleAbi, presaleAddress);
            tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);
            document.getElementById('errorMessage').innerText = "Wallet connected";
            document.getElementById('walletAddress').innerText = "Connected Wallet Address: " + accounts[0];
            updatePresaleDetails();
        } catch (error) {
            console.error(error);
            document.getElementById('errorMessage').innerText = "Failed to connect wallet";
        }
    } else {
        document.getElementById('errorMessage').innerText = "MetaMask not detected";
    }
}

async function buyTokensETH() {
    const amountETH = document.getElementById('amountETH').value;
    if (amountETH <= 0) {
        document.getElementById('errorMessage').innerText = "Please enter a valid amount";
        return;
    }

    try {
        await contract.methods.contribute(web3.utils.toWei(amountETH, 'ether')).send({
            from: accounts[0],
            value: web3.utils.toWei(amountETH, 'ether')
        });
        document.getElementById('errorMessage').innerText = "Tokens bought successfully with ETH";
    } catch (error) {
        console.error(error);
        document.getElementById('errorMessage').innerText = "Failed to buy tokens with ETH";
    }
}

async function buyTokensUSDT() {
    const amountUSDT = document.getElementById('amountUSDT').value;
    if (amountUSDT <= 0) {
        document.getElementById('errorMessage').innerText = "Please enter a valid amount";
        return;
    }

    try {
        const usdtAmount = web3.utils.toWei(amountUSDT, 'mwei'); // Assuming USDT has 6 decimals
        await tokenContract.methods.approve(presaleAddress, usdtAmount).send({ from: accounts[0] });
        await contract.methods.contribute(usdtAmount).send({ from: accounts[0] });
        document.getElementById('errorMessage').innerText = "Tokens bought successfully with USDT";
    } catch (error) {
        console.error(error);
        document.getElementById('errorMessage').innerText = "Failed to buy tokens with USDT";
    }
}

function updatePresaleDetails() {
    contract.methods.softCap().call().then(result => {
        document.getElementById('softCap').innerText = web3.utils.fromWei(result, 'ether') + " ETH";
    });

    contract.methods.hardCap().call().then(result => {
        document.getElementById('hardCap').innerText = web3.utils.fromWei(result, 'ether') + " ETH";
    });

    contract.methods.endTime().call().then(result => {
        const endTime = result;
        const interval = setInterval(() => {
            const now = Math.floor(Date.now() / 1000);
            const timeRemaining = endTime - now;
            if (timeRemaining <= 0) {
                clearInterval(interval);
                document.getElementById('timeRemaining').innerText = "Presale ended";
            } else {
                const days = Math.floor(timeRemaining / 86400);
                const hours = Math.floor((timeRemaining % 86400) / 3600);
                const minutes = Math.floor((timeRemaining % 3600) / 60);
                const seconds = timeRemaining % 60;
                document.getElementById('timeRemaining').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        }, 1000);
    });
}

window.onload = () => {
    connectWallet();
};
