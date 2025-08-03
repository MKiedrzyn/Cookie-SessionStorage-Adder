# 🏋️ Cookies and SessionStorage Adder

Rozszerzenie przeglądarki Chrome umożliwiające szybkie dodawanie zdefiniowanych ciasteczek oraz wpisów do `sessionStorage` na aktywnej karcie. Ułatwia testowanie i debugowanie aplikacji webowych.
![Cookie-SessionStorage-Adder](https://github.com/user-attachments/assets/73d2922d-e166-46d4-8726-1024f1776ba1)

## 🔧 Funkcje

* Dodaje zdefiniowane ciasteczka (`cookies`) do bieżącej strony.
* Dodaje wpisy do `sessionStorage` dla bieżącej karty.
* Automatycznie przeładowuje stronę po każdej akcji.

## 🖼️ Interfejs

Interfejs użytkownika (`popup.html`) zawiera dwa przyciski:

* `addAllCookies` – dodaje wszystkie zdefiniowane ciasteczka.
* `addToSessionStorage` – dodaje wpisy do `sessionStorage`.

## 📂 Struktura plików

* `manifest.json` – manifest rozszerzenia zgodny ze specyfikacją Manifest V3.
* `popup.html` – prosty interfejs użytkownika z dwoma przyciskami.
* `popup.js` – skrypt JavaScript dodający funkcjonalność przyciskom. Używa:

  * `chrome.cookies.set` do ustawiania ciasteczek,
  * `chrome.scripting.executeScript` do dodawania danych do `sessionStorage`.

## ✍️ Przykład konfiguracji

```javascript
const cookiesToAdd = [
  {
    name: 'cookieName',
    value: 'cookieValue',
  },
];
```

```javascript
sessionStorage.setItem('SessionStorageName', 'SessionStorageValue');
```

Zmodyfikuj powyższe wartości w `popup.js` według własnych potrzeb.

## 🛠️ Wymagane uprawnienia

```json
"permissions": ["cookies", "activeTab", "scripting"],
"host_permissions": ["<all_urls>"]
```

Uprawnienia te są potrzebne do dodawania ciasteczek oraz modyfikowania zawartości aktywnej strony.

## 🚀 Instalacja (tryb deweloperski)

1. Wejdź na `chrome://extensions/`.
2. Włącz tryb deweloperski (Developer Mode).
3. Kliknij "Załaduj rozszerzenie bez pakietu" (Load unpacked).
4. Wskaż folder zawierający pliki `manifest.json`, `popup.html` i `popup.js`.

## 📌 Uwagi

* Rozszerzenie działa tylko na aktywnej karcie przeglądarki.
* Ciasteczka i dane `sessionStorage` muszą być uprzednio skonfigurowane w kodzie źródłowym (`popup.js`).
* Rozszerzenie nie zapisuje danych dynamicznie – wartości muszą być ręcznie podane w kodzie.
