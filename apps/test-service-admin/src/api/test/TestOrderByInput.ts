import { SortOrder } from "../../util/SortOrder";

export type TestOrderByInput = {
  createdAt?: SortOrder;
  customField?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
