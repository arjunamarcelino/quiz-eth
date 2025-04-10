import { getContract } from "./contract";

export const getLeaderboardData = async () => {
  const contract = await getContract();
  const data = await contract.getLeaderboard();
  return data;
};
