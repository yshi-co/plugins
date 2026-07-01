import { PointsTransaction } from '../types';

/**
 * Awards points to a Yshi user.
 * See: https://docs.yshi.co/points
 */
export async function awardPoints(tx: PointsTransaction): Promise<void> {
  // POST /points/award
  void tx;
}

export async function deductPoints(tx: PointsTransaction): Promise<void> {
  // POST /points/deduct
  void tx;
}

export async function getBalance(userId: string): Promise<number> {
  // GET /points/balance/:userId
  void userId;
  return 0;
}
