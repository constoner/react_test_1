const listConfig: {
  BLOCK_HEIGHT: number;
  ROW_GAP: number;
  ROW_HEIGHT: number;
  TEXT_LENGTH: number;
} = {
  BLOCK_HEIGHT: 180,
  ROW_GAP: 16,
  get ROW_HEIGHT() {
    return this.BLOCK_HEIGHT + this.ROW_GAP;
  },
  TEXT_LENGTH: 160,
};

export default listConfig;
