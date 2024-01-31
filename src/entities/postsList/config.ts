import { detectMob } from "../../shared/utils/utils";

const isMobile = detectMob();

const listConfig: {
  BLOCK_HEIGHT: number;
  ROW_GAP: number;
  ROW_HEIGHT: number;
  ROW_OFFSET: number;
  CARD_WIDTH: number;
  TEXT_LENGTH: number;
} = {
  BLOCK_HEIGHT: isMobile ? 230 : 175,
  ROW_GAP: 16,
  get ROW_HEIGHT() {
    return this.BLOCK_HEIGHT + this.ROW_GAP;
  },
  ROW_OFFSET: isMobile ? 1 : 4,
  CARD_WIDTH: isMobile ? 88 : 50,
  TEXT_LENGTH: isMobile ? 100 : 160,
};

export default listConfig;
