import { detectMob } from "../../shared/utils/utils";

const isMobile = detectMob();

const listConfig: {
  BLOCK_HEIGHT: number;
  ROW_GAP: number;
  ROW_HEIGHT: number;
  CARD_WIDTH: number;
  TEXT_LENGTH: number;
} = {
  BLOCK_HEIGHT: isMobile ? 260 : 180,
  ROW_GAP: 16,
  get ROW_HEIGHT() {
    return this.BLOCK_HEIGHT + this.ROW_GAP;
  },
  CARD_WIDTH: isMobile ? 88 : 50,
  TEXT_LENGTH: 160,
};

export default listConfig;
