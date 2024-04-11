import { carName } from "./list/rules";

const spellingCheck = (name) => {
  if (name.length > carName.max) {
    throw new Error("[Error] 이름은 5자 이하로 입력해주세요.");
  }
  return true;
};

export default spellingCheck;
