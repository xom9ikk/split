# split@v1
> Github Action for splitting strings into parts by separator with limit

## 🔥 Usage
```yaml
jobs:
  build:
    runs-on: ubuntu-16.04

    steps:
      - name: Split version code
        uses: xom9ikk/split@v1.2
        id: split
        with:
          string: 2.17.3
          separator: .
          limit: -1

      - name: Some other action
        with:
          major: ${{ steps.split.outputs._0 }}
          minor: ${{ steps.split.outputs._1 }}
          patch: ${{ steps.split.outputs._2 }}
```

## ✨ Features
* 🧲 splitting a string by separator;
* 📎 setting a limit for the resulting array;
* 💎 simple API;

## 💡 Input

| property   | isRequired | default | comment                                                                                   | example
|------------|:----------:|:-------:|-------------------------------------------------------------------------------------------|:--------:
| `string`   |      ✓     |         | string to split.                                                                          | 2.17.3
| `separator`|            | space   | separator to split a string.                                                              | .
| `limit`    |            | -1      | limit on the number of substrings to be included in the array (use -1 to save all parts). | -1

## 📦 Output

| property    | comment                                      | example
|-------------|----------------------------------------------|---------
| `_${index}` | part that has been separated by a separator. | **_0**: 2, <br> **_1**: 17, <br> **_2**: 3
| `length`    | output array length.                         | 3
