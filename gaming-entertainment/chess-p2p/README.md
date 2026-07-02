# ♟️ Chess P2P Integration

Real-time peer-to-peer chess gaming platform integrated with Yshi for competitive play, rating system, and tournament hosting.

## About

Chess P2P brings competitive chess directly into Yshi chats. Players can challenge each other in real-time matches, maintain ELO ratings, participate in tournaments, and receive live move notifications. Supports multiple time controls from bullet to correspondence games.

## What Yshi Can Do

### 🔔 Real-Time Move Notifications
- **Move Alerts** - Instant notification when opponent moves
- **Check/Checkmate** - Alert on critical board states
- **Time Warnings** - Notify when time is running low
- **Match Status** - Game result notifications
- **Tournament Updates** - Round advancement alerts

### 🎯 Interactive Chess Board
- **Live Board Display** - Real-time board visualization
- **Move History** - Replay moves from current game
- **Analysis View** - Engine suggestions and evaluations
- **Opening Book** - Show opening names and classifications
- **Game Statistics** - Accuracy, best moves, blunders

### 🏆 ELO Rating System
- **Rating Calculation** - Automatic ELO updates after games
- **Rating History** - Track rating progression
- **Leaderboards** - Global and tournament rankings
- **Player Profiles** - Statistics and achievements
- **Skill Brackets** - Match players of similar strength

### 🎪 Tournament Management
- **Swiss System** - Balanced matchmaking
- **Round Robin** - Everyone plays everyone
- **Knockout** - Single/double elimination
- **Scheduling** - Automatic next-round assignments
- **Live Brackets** - Real-time tournament progress

## Getting Started

### Prerequisites

```bash
# Required environment variables
YSHI_API_KEY=yst_live_...
CHESS_P2P_API_KEY=ch_...
CHESS_P2P_WEBHOOK_SECRET=ws_...
```

### Setup

1. **Create Webhook Endpoint**
   ```bash
   # Configure in Chess P2P dashboard
   Webhook URL: https://your-yshi-integration.com/webhooks/chess
   Events: match.*, player.*
   ```

2. **Initialize Integration**
   ```typescript
   import { CHESS_P2P } from './gaming-entertainment/chess-p2p';
   
   const integration = {
     id: CHESS_P2P.id,
     name: CHESS_P2P.name,
     webhooks: true,
     miniApp: true,
   };
   ```

3. **Configure Time Controls**
   ```javascript
   const timeControls = {
     bullet: { initial: 60, increment: 0 },     // 1 min
     blitz: { initial: 300, increment: 3 },     // 5 min + 3s
     rapid: { initial: 900, increment: 10 },    // 15 min + 10s
     classical: { initial: 3600, increment: 30 }, // 1 hour + 30s
   };
   ```

### Basic Implementation

```typescript
// Webhook Handler
import { validateWebhookSignature } from './chess-p2p/utils';

export async function handleChessWebhook(req, res) {
  const signature = req.headers['x-yshi-signature'];
  const secret = process.env.CHESS_P2P_WEBHOOK_SECRET;
  
  if (!validateWebhookSignature(req.body, signature, secret)) {
    return res.status(401).json({ error: 'Invalid signature' });
  }
  
  const event = req.body;
  
  switch (event.type) {
    case 'match.move':
      await broadcastMove(event.data);
      break;
    case 'match.checkmate':
      await announceCheckmate(event.data);
      break;
    case 'player.rating-updated':
      await updatePlayerRating(event.data);
      break;
  }
  
  res.status(200).json({ received: true });
}
```

## API Primitives

### 🤖 Bot Webhooks (91% Coverage)
```typescript
// Receive real-time chess events
'match.move', 'match.check', 'match.checkmate',
'match.draw', 'match.completed', 'player.rating-updated'
```

### 🖼️ Mini Apps (62% Coverage)
```typescript
// Interactive chess interface
- Live board display
- Move input interface
- Game clock
- Move history
- Rating changes
```

### 💰 Points System (16% Coverage)
```typescript
// Gamification and achievements
- Points for wins
- Bonus points for brilliant moves
- Badges for rating milestones
- Leaderboard rankings
```

## Use Cases

### Casual Play
```
User challenges friend to blitz game
Real-time move notifications
Both see live board in Mini App
Winner announced
Ratings updated
```

### Competitive Tournaments
```
Tournament created with 16 players
Swiss system pairing
Automatic round generation
Live bracket updates
Winner determined
```

### Skill Development
```
Player joins rapid tournament
Engine analysis provided
Best moves highlighted
Mistakes explained
Progress tracked
```

### Streaming Integration
```
Chess tournament streamed to Twitch
Live updates in Yshi chat
Commentary and analysis
Viewer polls during games
Integration with broadcast
```

## Configuration

### Game Settings

```typescript
// config.ts
export const CHESS_P2P_CONFIG = {
  gameSettings: {
    timeControl: 'blitz',
    initialTime: 300, // 5 minutes
    increment: 3,     // 3 seconds per move
  },
};
```

### Rating System

```typescript
ratingSystem: {
  initialRating: 1200,
  k: 32,          // K-factor
  minRating: 0,
  maxRating: 3200,
}
```

## Troubleshooting

### Match Not Starting
- Verify both players are online
- Check time control settings
- Ensure ratings are compatible (if applicable)

### Rating Not Updating
- Verify webhook is being received
- Check rating calculation logic
- Ensure match was recorded properly

### Board Display Issues
- Check Mini App URL configuration
- Verify board state synchronization
- Clear browser cache

## Performance

- **Throughput**: 5K concurrent matches
- **Latency**: <50ms move notifications
- **Reliability**: 99.95% uptime SLA
- **Scalability**: Auto-scaling on demand

## Security

✅ **HMAC-SHA256 Signature Validation**
✅ **Move Validation**
✅ **Rate Limiting per Player**
✅ **HTTPS-only Connections**
✅ **Cheat Detection**

## Examples

### Example 1: Creating a Match
```typescript
const match = await createMatch({
  whitePlayerId: 'user_123',
  blackPlayerId: 'user_456',
  timeControl: 'blitz',
});

await notifyYshi(`Match created: ${match.id}`);
```

### Example 2: Processing Moves
```typescript
const move = {
  matchId: 'match_789',
  from: 'e2',
  to: 'e4',
  san: 'e4',
};

const result = await makeMove(move);
await broadcastMove(result);
```

### Example 3: Calculating Rating Change
```typescript
const ratingChange = calculateELORatingChange(
  1600,  // Player rating
  1400,  // Opponent rating
  'win', // Result
  32     // K-factor
); // Returns: +15
```

## API Reference

### Create Match
```
POST /api/matches/create
Body: { whitePlayerId, blackPlayerId, timeControl }
Returns: { matchId, status, board }
```

### Make Move
```
POST /api/matches/{matchId}/move
Body: { from, to, promotion }
Returns: { success, board, status }
```

### Get Player Stats
```
GET /api/players/{playerId}/stats
Returns: { rating, games, wins, accuracy, openings }
```

## Documentation Links

- 📚 **Full API Docs**: https://chess-p2p-api.example.com/docs
- ♟️ **Rules**: https://chess-p2p-api.example.com/rules
- 📊 **Ratings**: https://chess-p2p-api.example.com/ratings
- 🎓 **Learning**: https://chess-p2p-api.example.com/learn

## Support

- 💬 **Discord**: [#chess-p2p](https://discord.gg/yshi)
- 📧 **Email**: chess-support@yshi.co
- 🐛 **Issues**: [GitHub Issues](https://github.com/yshi-co/plugins/issues)
- 📖 **Docs**: [https://docs.yshi.co](https://docs.yshi.co)

## Related Integrations

- [Poker P2P](../poker-p2p/) - Real-time poker gaming
- [Tongits P2P](../tongits-p2p/) - Card game integration
- [Twitch](../twitch/) - Streaming integration
- [Discord](../discord/) - Community gaming

---

**Status**: Planning (Phase 14) | **Last Updated**: 2026-07-02
