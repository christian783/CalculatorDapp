# CalculatorDapp

A futuristic blockchain-powered calculator built with **Truffle**, **Ganache**, and **Angular 19**. Perform basic arithmetic (add, subtract, multiply, divide) on the Ethereum blockchain with a sleek, neon-styled frontend. Deployed locally via Ganache and styled with Bootstrap, this Dapp combines smart contract simplicity with a 🔥 user interface.

## Features
- **Smart Contract**: A Solidity `Calculator` contract with four operations.
- **Local Blockchain**: Runs on Ganache for easy testing.
- **Frontend**: Angular 19 standalone component with Bootstrap, neon effects, and animations.
- **Blockchain Integration**: Uses `ethers.js` to connect to the contract.
- **Cool UI**: Glowing inputs, animated results, and a dark futuristic theme.

## Prerequisites
- **Node.js**: v20.18.2 or later
- **npm**: Comes with Node.js
- **Truffle**: `npm install -g truffle`
- **Ganache**: GUI (download from [trufflesuite.com/ganache](https://trufflesuite.com/ganache)) or CLI (`npm install -g ganache`)
- **Angular CLI**: `npm install -g @angular/cli`

## Project Structure
```
CalculatorDapp/
├── contracts/              # Solidity smart contracts
│   └── Calculator.sol
├── migrations/             # Truffle deployment scripts
│   └── 2_deploy_calculator.js
├── truffle-config.js       # Truffle configuration
├── calculator-frontend/    # Angular frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── app.component.ts
│   │   │   ├── app.component.html
│   │   │   ├── app.component.scss
│   │   │   └── calculator-abi.json  # Contract ABI
│   │   ├── main.ts
│   │   └── styles.scss
│   ├── angular.json
│   └── package.json
└── README.md
```

## Setup Instructions

### 1. Backend Setup (Truffle + Ganache)

1. **Clone the Repository** (if applicable):
   ```bash
   git clone <your-repo-url>
   cd CalculatorDapp
   ```
2. **Install Truffle Dependencies**:
   ```bash
   npm install
   ```
3. **Start Ganache**:
   - **GUI**: Open Ganache, click "Quickstart" (default port: 7545).
   - **CLI**: Run `ganache` (default port: 8545—update `truffle-config.js` if needed).
4. **Deploy the Contract**:
   ```bash
   truffle migrate --reset
   ```
   Copy the deployed contract address (e.g., `0x123...`) from the output.
5. **Export ABI**:
   - Find the ABI in `build/contracts/Calculator.json` under "abi".
   - Copy it to `calculator-frontend/src/app/calculator-abi.json`.

### 2. Frontend Setup (Angular 19)

1. **Navigate to Frontend**:
   ```bash
   cd calculator-frontend
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Update Contract Address**:
   - Open `src/app/app.component.ts`.
   - Replace `0xYourDeployedContractAddressHere` with the address from Step 1.4:
     ```typescript
     private readonly CONTRACT_ADDRESS = '0xYourActualAddressHere';
     ```
4. **Verify Ganache Port**:
   Ensure `PROVIDER_URL` matches your Ganache port:
   ```typescript
   private readonly PROVIDER_URL = 'http://127.0.0.1:7545'; // or 8545
   ```

### 3. Running the Dapp

1. **Start Ganache**:
   Ensure it’s running with the same network ID (default: 1337).
2. **Launch the Frontend**:
   ```bash
   ng serve
   ```
3. **Open** `http://localhost:4200` in your browser.
4. **Use the Calculator**:
   - Enter two numbers.
   - Click **Add, Subtract, Multiply, or Divide**.
   - Watch the result pop in with a neon glow! 😎

## Usage Example

- **Input**: 5 and 3  
- **Click**: Add  
- **Output**: `Result: 8` (fetched from the blockchain)  
- Errors (e.g., division by zero) will display in a stylish red alert.

## Troubleshooting

- **ENS Error**: If you see `network does not support ENS`:
  - Verify `CONTRACT_ADDRESS` is a valid 42-character hex string (e.g., `0x123...`).
  - Ensure Ganache is running on the specified port.
- **Animation Error**: If `@resultPop` fails:
  - Check `main.ts` has `provideAnimations()`.
- **No Result**: Console log `getContract()` to debug provider/contract issues.

## Technologies Used

- **Backend**: Solidity, Truffle, Ganache  
- **Frontend**: Angular 19 (standalone), Bootstrap 5, `ethers.js`  
- **Styling**: SCSS with neon effects and animations  

## Contributing

Feel free to fork, tweak, and PR! Add more operations, enhance the UI, or make it even cooler. 😎

## License

MIT License—do what you want with it!

---

**Built with 💻 and a touch of blockchain magic by [Your Name]. Enjoy calculating in style!**

