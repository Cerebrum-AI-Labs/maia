export const fetchTokenAddress = async (address) => {
  const res = await fetch("https://tdata.techtonix.io/solana/token/analysis", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address,
    }),
  });
  const data = await res.json();
  return data;
};
