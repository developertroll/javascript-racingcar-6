import { moveRules } from "../checker/list/rules";
import movePossible from "../checker/movementCheck";
const move = (current) => {
  if (movePossible(current)) {
    return (
      Math.floor(Math.random() * (moveRules.max - moveRules.min + 1)) +
      moveRules.min
    );
  }
  return current;
};

export default move;
