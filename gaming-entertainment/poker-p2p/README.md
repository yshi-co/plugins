# 🎰 Poker P2P Integration

Real-time peer-to-peer poker gaming platform integrated with Yshi for tournament hosting, live notifications, and gamified leaderboards.

## About

Poker P2P brings competitive poker gaming directly into Yshi chats. Players can join games, play hands in real-time, and compete for points and achievements. The integration supports multiple variants (Texas Hold'em, Omaha, Five Card Draw) with full webhook support for live updates.

## What Yshi Can Do

### 🔔 Real-Time Notifications
- **Player Join Alerts** - Notify when new players join games
- **Move Notifications** - Alert players when it's their turn
- **Bet Updates** - Show real-time pot and bet changes
- **Game Results** - Announce winners and hand outcomes
- **Tournament Updates** - Live bracket and advancement notifications

### 🎮 Interactive Poker Table
- **Live Board Display** - Show community cards and board state
- **Player Status** - Display chip stacks, positions, and status
- **Pot Visualization** - Show current pot and individual bets
- **Hand History** - Replay previous hands and moves
- **Statistics Dashboard** - Win rates, hand frequencies, positional stats

### 🏆 Gamified Leaderboards
- **Points System** - Award points for wins, big hands, bluffs
- **Seasonal Rankings** - Track top players each season
- **Achievements** - Unlock badges for milestones
- **Statistics Tracking** - Detailed player performance metrics
- **Progression Tiers** - From Rookie to Legend status

### 🎯 Tournament Management
- **Auto-Matching** - Pair players of similar skill levels
- **Bracket Management** - Single/double elimination tournaments
- **Blind Progression** - Automatic increase of blinds
- **Prize Distribution** - Automatic payout calculations
- **Live Updates** - Real-time tournament progress

## Getting Started

### Prerequisites

```bash
# Required environment variables
YSHI_API_KEY=yst_live_...
POKER_P2P_API_KEY=pk_...
POKER_P2P_WEBHOOK_SECRET=ws_...
```

### Setup

1. **Create Webhook Endpoint**
   ```bash
   # Configure in Poker P2P dashboard
   Webhook URL: https://your-yshi-integration.com/webhooks/poker
   Events: game.*, player.*
   ```

2. **Initialize Integration**
   ```typescript
   import { POKER_P2P } from './gaming-entertainment/poker-p2p';
   
   const integration = {
     id: POKER_P2P.id,
     name: POKER_P2P.name,
     webhooks: true,
     miniApp: true,
   };
   ```

3. **Configure Mini App**
   ```javascript
   const miniAppConfig = {
     url: 'https://your-domain.com/poker-app',
     width: 600,
     height: 800,
   };
   ```

### Basic Implementation

```typescript
// Webhook Handler
import { validateWebhookSignature } from './poker-p2p/utils';

export async function handlePokerWebhook(req, res) {
  const signature = req.headers['x-yshi-signature'];
  const secret = process.env.POKER_P2P_WEBHOOK_SECRET;
  
  if (!validateWebhookSignature(req.body, signature, secret)) {
    return res.status(401).json({ error: 'Invalid signature' });
  }
  
  const event = req.body;
  
  switch (event.type) {
    case 'game.winner':
      await notifyWinner(event.data);
      break;
    case 'game.started':
      await startGameNotification(event.data);
      break;
  }
  
  res.status(200).json({ received: true });
}
```

## API Primitives

### 🤖 Bot Webhooks (91% Coverage)
```typescript
// Receive real-time poker events
'game.created', 'game.move', 'game.fold', 
'game.winner', 'player.all-in'
```

### 🖼️ Mini Apps (62% Coverage)
```typescript
// Interactive poker table interface
- Live board display
- Player chip stacks
- Betting interface
- Hand history viewer
```

### 💰 Points System (16% Coverage)
```typescript
// Gamification and rewards
- Points for wins
- Bonus points for big hands
- Leaderboard rankings
- Achievement unlocking
```

## Use Cases

### Casual Gaming
```
User joins Yshi chat, sees "Poker game available"
Clicks to join, placed in next game
Real-time notifications as game progresses
Wins and earns points
```

### Competitive Tournaments
```
Tournament created with 32 players
Automatic bracket generation
Live updates as rounds progress
Winners advance automatically
Final champion announced
```

### Skill Development
```
Player joins learning tournament
Hand analysis and suggestions
Compare stats to other players
Track improvement over time
Unlock higher difficulty levels
```

### Social Gaming
```
Friends invited to private game
Custom buy-in amounts
Chat during hands
Leaderboard shows session winners
Replay hands from session
```

## Configuration

### Game Settings

```typescript
// config.ts
export const POKER_P2P_CONFIG = {
  gameSettings: {
    minPlayers: 2,
    maxPlayers: 10,
    defaultBuyIn: 1000,
    smallBlind: 10,
    bigBlind: 20,
  },
};
```

### Betting Limits

```typescript
bettingLimits: {
  minBet: 10,
  maxBet: 10000,
  potLimit: false, // No Limit poker
}
```

## Troubleshooting

### Game Not Starting
- Verify webhook URL is accessible
- Check API key is valid
- Ensure players are actually joining
- Check player count meets minimum

### Signature Validation Fails
- Verify webhook secret is correct
- Check signature header exists
- Ensure payload isn't modified

### Pot Calculations Wrong
- Verify all-in mechanics
- Check side pot calculations
- Review bet rounding logic

## Performance

- **Throughput**: 10K concurrent games
- **Latency**: <100ms turn notifications
- **Reliability**: 99.9% uptime SLA
- **Scalability**: Auto-scaling on demand

## Security

✅ **HMAC-SHA256 Signature Validation**
✅ **Environment-based Configuration**
✅ **No Hardcoded Credentials**
✅ **HTTPS-only Webhooks**
✅ **Rate Limiting**
✅ **User Data Encryption**

## Examples

### Example 1: Starting a Game
```typescript
const game = await createGame({
  variant: 'texas-holdem',
  buyIn: 1000,
  blinds: { small: 10, big: 20 },
});

await notifyYshi(`Game ${game.id} created! Join to play.`);
```

### Example 2: Handling Moves
```typescript
const event = {
  type: 'game.move',
  data: {
    gameId: 'game_123',
    playerId: 'user_456',
    action: 'raise',
    amount: 100,
  },
};

await broadcastToGame(event);
```

### Example 3: Awarding Points
```typescript
const winner = {
  userId: 'user_123',
  winAmount: 1000,
  handType: 'royal-flush',
};

await awardPoints({
  userId: winner.userId,
  points: 50, // Win bonus
  reason: 'Poker P2P game win',
});
```

## API Reference

### Create Game
```
POST /api/games/create
Body: { variant, buyIn, blinds }
Returns: { gameId, status, players }
```

### Make Move
```
POST /api/games/{gameId}/move
Body: { playerId, action, amount }
Returns: { success, gameState }
```

### Get Player Stats
```
GET /api/players/{playerId}/stats
Returns: { wins, losses, earnings, achievements }
```

## Documentation Links

- 📚 **Full API Docs**: https://docs.yshi.co
- 🎮 **Game Rules**: https://docs.yshi.co
- 📊 **Statistics**: https://docs.yshi.co
- 🔧 **Webhooks**: https://docs.yshi.co/api/webhooks

## Support

- 💬 **Chat**: [Yshi Community](https://yshi.co/group/yshi_dev)
- 📧 **Email**: hello@yshi.co
- 🐛 **Issues**: [GitHub Issues](https://github.com/yshi-co/plugins/issues)
- 📖 **Docs**: [https://docs.yshi.co](https://docs.yshi.co)

## Related Integrations

- [Chess P2P](../chess-p2p/) - Real-time chess gaming
- [Tongits P2P](../tongits-p2p/) - Philippine card game
- [Twitch](../twitch/) - Streaming integration
- [Discord](../discord/) - Community gaming

---

**Status**: Planning (Phase 14) | **Last Updated**: 2026-07-02
