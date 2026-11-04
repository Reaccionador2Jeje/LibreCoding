# LibreCoding

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-early%20development-orange.svg)](#status)

**LibreCoding** is a platform and social network where young people of all ages
learn and study any programming language digitally.

Built and maintained by **Atdev Dev**, a one-person organization.

- Repository: <https://github.com/Reaccionador2Jeje/LibreCoding>
- Maintainer: <https://github.com/Reaccionador2Jeje>

---

## Overview

LibreCoding brings *learning* and *community* into a single place. Instead of
juggling a course site, an editor and a chat app, learners get one platform where
they can study a language, practice it, show what they build and meet other
people who are learning the same thing.

The goal is simple: make learning to program free, accessible and social for
young people, regardless of age, background or the language they want to learn.

## Vision

These are the pillars the project is being built around:

- **Learn** — structured lessons and exercises for any programming language, from
  first steps to more advanced topics.
- **Practice** — write and run code in the browser, no local setup required.
- **Share** — a social feed to publish projects, snippets and progress, and to get
  feedback from the community.
- **Connect** — profiles, follows and conversations with other learners and with
  people who already know the language you are studying.
- **Track** — progress, streaks and achievements that keep learners motivated.
- **Free and open** — the source code is public and licensed under Apache 2.0, so
  anyone can read it, learn from it, self-host it or improve it.

## Status

LibreCoding is in **early development**, but it is already runnable in two ways:

- **Static site** — open `index.html` in a browser. Lessons, the code editor and
  the community demo work without a build step or dependencies. Progress and
  local posts stay in your browser.
- **Full server** — a single Go binary serves the site and a JSON API for shared
  projects and the community wall, with data persisted on disk.

## Run the Go server

Requires Go 1.22 or newer.

```bash
go run .                 # http://localhost:8080
go test ./...            # run the test suite
go build -o librecoding  # build a single deployable binary
```

Configuration:

| Variable        | Default                 | Meaning                                      |
| --------------- | ----------------------- | -------------------------------------------- |
| `LC_ADDR`       | `:8080`                 | Address the HTTP server listens on           |
| `LC_DATA`       | `data/librecoding.json` | JSON file where posts and snippets are saved |
| `LC_CORS_ORIGIN`| empty                   | Allowed origin for API calls (or `*`)        |

The site is embedded in the binary, so the built file runs on its own. Clean URLs
are available (`/aprender`, `/editor`, `/comunidad`), and the API exposes:

- `GET /api/health` — service status and version.
- `GET /api/stats` — counters for posts, likes and snippets.
- `GET /api/posts` — community feed.
- `POST /api/posts` — publish a post (`X-Client-Id` required).
- `DELETE /api/posts/{id}` — delete your own post.
- `POST /api/posts/{id}/like` — toggle a like.
- `GET /api/snippets` — recent shared projects.
- `POST /api/snippets` — save a project and get a permanent link.
- `GET /api/snippets/{id}` — load a shared project.

The server only needs the standard library. `Snippet` bodies are sandboxed in the
editor with `sandbox="allow-scripts"` (never `allow-same-origin`), and community
input is length-limited and rate-limited per IP.

## Safety and privacy

LibreCoding is meant to be used by minors, so safety and privacy are treated as
requirements, not features:

- Accounts for underage learners are expected to work without exposing personal
  data publicly.
- Community features are meant to be moderated.
- A written privacy and safety policy will be published before the platform is
  opened to the public.

To report a security problem, read [`SECURITY.md`](SECURITY.md). Please report it
privately, never in a public issue.

## Contributing

Contributions, bug reports and ideas are welcome — especially from young
learners, since they are the people this platform is for.

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) for the workflow, and
[`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md) for the community rules.

In short:

1. Open an issue to discuss what you want to change.
2. Fork the repository and create a branch for your work.
3. Keep changes focused and describe them clearly in the pull request.

By submitting a contribution you agree that it is licensed under the Apache
License 2.0, as described in section 5 of the license.

## License

Copyright 2026 Atdev Dev

Licensed under the **Apache License, Version 2.0**. You may obtain a copy of the
License at:

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the [`LICENSE`](LICENSE)
file for the full text and the [`NOTICE`](NOTICE) file for attribution notices.

## Trademarks

The Apache 2.0 license covers the code, but it does not grant permission to use
the **LibreCoding** name or logo (see section 6 of the license). If you fork the
project, please use a different name for your distribution.

---

Made with care by **Atdev Dev**.
