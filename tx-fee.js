// tx-fee.js
// Simple gas fee calculator (mock version)

function calculateFee(gasUsed, gasPrice) {
  const fee = (gasUsed * gasPrice) / 1e9; // gwei → eth
  console.log(`Tx Fee: ${fee.toFixed(6)} ETH`);
}

calculateFee(21000, 30); // 30 gwei
calculateFee(50000, 40);
