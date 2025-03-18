import { Test as TTest } from "../api/test/Test";

export const TEST_TITLE_FIELD = "customField";

export const TestTitle = (record: TTest): string => {
  return record.customField?.toString() || String(record.id);
};
