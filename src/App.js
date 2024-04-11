class App {
  NameCheck = (name) => {
    if (name.length > 5) {
      return false;
    }
    return true;
  };
  async play() {
    const ins = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)"
    );
    const carNames = ins.split(",");
    for (let i = 0; i < carNames.length; i++) {
      if (!this.NameCheck(carNames[i])) {
        Console.error("이름은 5자 이하로 입력해주세요.");
        return;
      }
    }
  }
}

export default App;
