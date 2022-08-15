import { getSeparatePoolFactoryABI } from "@/utils/common/contractABI";

import { getContract } from "@/utils/common";

export const initSeparatePoolFactoryContract = async () => {
  return await getContract(await getSeparatePoolFactoryABI(), '');
}
