# Contributing to LibreCoding

Thanks for wanting to help. LibreCoding is a small, independent project, so every
clear bug report, small fix or thoughtful idea makes a real difference.

Because LibreCoding is used by young people, contributions are also reviewed with
safety and clarity in mind.

## Before you start

- **Small changes** (typos, docs, obvious bugs): just open a pull request.
- **Anything larger** (a new feature, a refactor, a change in direction): open an
  issue first so we can agree on the approach before you spend time coding.

## Workflow

1. **Fork** the repository and clone your fork.
2. **Create a branch** with a descriptive name:

   ```sh
   git checkout -b feat/lesson-progress
   git checkout -b fix/login-redirect
   ```

3. **Make your change** in small, focused commits.
4. **Test it.** If the project has tests, run them. If it does not yet, describe
   in the pull request how you verified the change.
5. **Open a pull request** against `main`, filling in what changed and why.

## Commit messages

Short and imperative, describing the change:

```
add lesson progress endpoint
fix crash when profile has no avatar
docs: clarify local setup
```

## Pull requests

A good pull request:

- does one thing and says so in the title;
- explains *why* the change is needed, not only *what* it does;
- links the related issue, if there is one;
- includes screenshots or recordings for any change a learner will see.

## What is especially welcome

- Fixes for accessibility problems (keyboard navigation, contrast, screen
  readers). Learners are young and diverse; this matters.
- Translations and wording improvements.
- Documentation and examples.
- Bug reports with steps to reproduce.

## What to avoid

- Pull requests that mix unrelated changes.
- New dependencies without a reason stated in the pull request.
- Code copied from another project without checking its license. Only code that
  can legally be distributed under the Apache License 2.0 may be contributed.

## Licensing of contributions

LibreCoding is licensed under the Apache License 2.0. By submitting a
contribution you agree that your contribution is licensed under the same terms,
as described in section 5 ("Submission of Contributions") of the license.

Please do not contribute code you do not have the right to license this way.

## Reporting security issues

Please do **not** open a public issue for a security problem. Contact the
maintainer privately at <https://github.com/Reaccionador2Jeje> and give a
reasonable amount of time for a fix before disclosing it publicly. See
[`SECURITY.md`](SECURITY.md) for what to include and what to expect.

## Code of conduct

By participating you agree to follow the
[`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).
