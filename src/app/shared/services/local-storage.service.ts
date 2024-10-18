import {Injectable} from '@angular/core';
import {LocalStorageEntities} from "../enums";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  /**
   * Установить значение в localStorage
   * @param key ключ : string
   * @param value значение : any
   */
  public set(key: LocalStorageEntities, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   *
   * Получить значение из localStorage
   * @param key ключ : string
   * @param value значение или null, если ключ не найден : any
   *
   */

  public get(key: LocalStorageEntities): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  /**
   * Удаление значения из localStorage
   * @param key ключ : string
   *
   */
  remove(key: LocalStorageEntities): void {
    localStorage.removeItem(key);
  }

  /**
   *  Проверка существует ли значение в localStorage
   *  @param key ключ : string
   *  @returns true, если ключ есть, false в противном случае
   *
   */
  has(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }

  /**
   * DANGER!, очистка localstorage
   */
  clear(): void {
    localStorage.clear();
  }

}
