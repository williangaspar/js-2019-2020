export default class PrivateData {
  #invisibleToExtenalEnv = "Greetings";

  greet(name) {
    return this.#privateMethod(name);
  }

  #privateMethod(name) {
    return `${this.#invisibleToExtenalEnv}, ${name}`;
  }
}
