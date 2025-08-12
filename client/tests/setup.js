import { vi } from 'vitest'
vi.mock('../src/services/api.js', () => ({
  recordVisit: vi.fn(),
  getStats: vi.fn().mockResolvedValue({ visitors: 0, avgRating: 0, commentsCount: 0 }),
  // Mock other functions
}))