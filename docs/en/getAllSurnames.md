# getAllSurnames

Retrieve all surnames with optional filters for rarity and type. The default rarity is `'all'` (all surnames).

## API

```ts
getAllSurnames(surnameRarity?: SurnameRarity, surnameType?: SurnameType): string[]
```

**Parameters:**

1. `[surnameRarity='all']` _(SurnameRarity)_: Surname rarity.
2. `[surnameType]` _(SurnameType)_: Surname type.

**SurnameRarity:**

- `all` All surnames
- `common` Common surnames
- `rare` Rare surnames

**SurnameType:**

- `single` Single-character surnames
- `compound` Compound surnames

**Returns:**

_(Array)_: A list of surnames.

## Example

```js
import { getAllSurnames } from 'cnname';

getAllSurnames(); // ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', ...]
getAllSurnames('common', 'compound'); // ['上官', '欧阳', '司马', ...]
```
