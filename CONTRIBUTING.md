# Contributing

Everyone is welcome to contribute to **cnname**!

If you are changing the docs or fixing a bug, feel free to fork and open a PR.

If you want to add a new feature, please create an issue first so we can decide if the feature is inline with the vision for cnname.

## Important

Please make sure that you run `pnpm run preflight` before making a PR to ensure that everything is working from the start.
This is a shorthand for running the following scripts in order:

- `pnpm install` - installs npm packages defined in package.json.
- `pnpm dict` - update the dict data if you have added surnames.
- `pnpm example` - update example content.
- `pnpm test:run` - runs all tests.
- `pnpm lint` - runs [boime](https://biomejs.dev/) to format code.
- `pnpm build` - builds the code, both CommonJS and ESM versions.

## Good to know

- The project is being built by [tsup](https://tsup.egoist.dev) (see [tsup.config.ts](tsup.config.ts)).
- The tests are executing `vitest` against `test/**/*.test.ts`.
- If you update the dict, make sure to run `pnpm run dict` and `pnpm run example` to update the related files.

## Update Dict Resources

### Add surnames

If you need to add surnames to the dictionary resources, please add them directly to `/dict/surnames/all.json`. After adding, run the `pnpm dict` command — it will automatically update the related files in the `dict` directory.

### Add words

If you need to add a word to the dictionary resources and it has a certain attribute, you can add it under the attribute in `/dict/words/attributes.json`. If you believe the word has no specific attributes, simply add it to `/dict/words/normal.json`. If you need to add a new attribute, please update the relevant sections in `/docs/xx/givenNameAttributes.md` and `/scripts/words.mjs`, and add test cases.

## Building

The project is being built by [tsup](https://tsup.egoist.dev) (see [tsup.config.ts](tsup.config.ts))

```shell
pnpm run build
```

## Testing

Before you can run the tests, you need to install all dependencies and build the project, because some tests depend on the bundled content.

```shell
pnpm install
pnpm run build

pnpm run test
# or
pnpm run test:cov
```

You can view a generated code coverage report at `/coverage/lcov-report/index.html`.

## Committing

Pull Request titles need to follow our semantic convention.

PR titles are written in following convention: `type(scope): subject`

**type** is required and indicates the intent of the PR

> The types `feat` and `fix` will be shown in the changelog as `### Features` or `### Bug Fixes`
> All other types wont show up except for breaking changes marked with the `!` in front of `:`

Allowed types are:

| type     | description                                                               |
| -------- | ------------------------------------------------------------------------- |
| feat     | A new feature is introduced                                               |
| fix      | A bug was fixed                                                           |
| chore    | No user affected code changes were made                                   |
| refactor | A refactoring that affected also user (e.g. log a deprecation warning)    |
| docs     | Docs were changed                                                         |
| test     | Test were changed                                                         |
| ci       | CI were changed                                                           |
| build    | Build scripts were changed                                                |
| infra    | Infrastructure related things were made (e.g. issue-template was updated) |
| revert   | A revert was triggered via git                                            |

**scope** is optional and indicates the scope of the PR

> The scope will be shown in the changelog in front of the _subject_ in bold text
> Also as the commits are sorted alphabetically, the scope will group the commits indirectly into categories

Allowed scopes are:

| scope           | description                                                                  |
| --------------- | ---------------------------------------------------------------------------- |
| dict            | When only `dict` are added/updated/removed                                   |
| deps            | Will mostly be used by Renovate                                              |
