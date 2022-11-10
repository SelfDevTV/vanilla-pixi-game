export type moveDirectionType = {
  moveForward: boolean;
  moveBackward: boolean;
  moveLeft: boolean;
  moveRight: boolean;
  [key: string]: boolean;
};

class Keyboard {
  moveDirection: moveDirectionType;
  listenerFn: Function;

  constructor(listenerFn: Function) {
    this.listenerFn = listenerFn;
    this.moveDirection = {
      moveForward: false,
      moveBackward: false,
      moveRight: true,
      moveLeft: false,
    };

    this.setupEventHandlers();
  }

  getActionByKey = (key: string): string => {
    const actionMap: { [key: string]: string } = {
      KeyW: "moveForward",
      KeyS: "moveBackward",
      KeyA: "moveLeft",
      KeyD: "moveRight",
    };

    return actionMap[key];
  };

  handleKeyDown = (e: KeyboardEvent) => {
    const action = this.getActionByKey(e.code);
    const currentMoveDirection = this.getCurrentMoveDirection();
    this.moveDirection[currentMoveDirection!] = false;
    this.moveDirection[action] = true;
    this.listenerFn(this.moveDirection);
  };

  //   handleKeyUp = (e: KeyboardEvent) => {
  //     const action = this.getActionByKey(e.code);
  //     this.moveDirection[action] = false;
  //     this.listenerFn(this.moveDirection);
  //   };

  getCurrentMoveDirection = () => {
    const pressedKey = Object.keys(this.moveDirection).find((key) => {
      return this.moveDirection[key] === true;
    });

    return pressedKey;
  };

  setupEventHandlers = () => {
    document.addEventListener("keydown", this.handleKeyDown);
    // document.addEventListener("keyup", this.handleKeyUp);
  };
}

export default Keyboard;
