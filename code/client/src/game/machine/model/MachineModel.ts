export default class MachineModel {
  _landscapeTexture: string;
  _portraitTexture: string;
  _isRestarted: boolean;
  _areMatchesPlaying: boolean;
  private _spinCount: number; // Добавляем счетчик спинов

  constructor() {
    this._isRestarted = true;
    this._areMatchesPlaying = false;
    this._spinCount = 0; // Инициализируем счетчик
  }

  public get isRestarted() {
    return this._isRestarted;
  }

  public set isRestarted(value: boolean) {
    this._isRestarted = value;
  }

  public get areMatchesPlaying() {
    return this._areMatchesPlaying;
  }

  public set areMatchesPlaying(value: boolean) {
    this._areMatchesPlaying = value;
  }

  // Добавляем методы для управления счетчиком спинов
  public incrementSpinCount(): void {
    this._spinCount++;
  }

  public getSpinCount(): number {
    return this._spinCount;
  }

  public resetSpinCount(): void {
    this._spinCount = 0;
  }

  // Метод для проверки, является ли текущий спин победным
  public isWinSpin(): boolean {
    return this._spinCount % 5 === 0 && this._spinCount !== 0;
  }
}
