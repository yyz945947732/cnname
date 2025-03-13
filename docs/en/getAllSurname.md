# getAllSurname

Returns all surnames, with an optional surname type. Defaults to `'all'` (all surnames).

## API

```ts
getAllSurname(surnameType?: SurnameType): string[]
```

**Parameters:**

1. `[surnameType='all']` _(SurnameType)_: Type of surname.

**SurnameType:**

- `all` All surnames
- `all-single` All single-character surnames
- `all-compound` All compound surnames
- `common` Common surnames
- `common-single` Common single-character surnames
- `common-compound` Common compound surnames

**Returns:**

_(Array)_: A list of surnames.

## Example

```js
import { getAllSurname } from 'cnname';

getAllSurname(); // ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', ...]
getAllSurname('common-compound'); // ['上官', '欧阳', '司马', ...]
```
