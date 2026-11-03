# Security Policy

LibreCoding is a platform for young learners, so a security problem here is not
only a technical bug: it can put children and teenagers at risk. Please treat
reports accordingly, and please report them privately.

## Reporting a vulnerability

**Do not open a public issue, discussion or pull request for a security problem.**

Report it privately to the maintainer:

- GitHub profile: <https://github.com/Reaccionador2Jeje>

Use a private channel (for example GitHub's *Report a vulnerability* feature on
the repository's **Security** tab, if it is enabled) and include:

- what the problem is and why it matters;
- steps to reproduce it, or a proof of concept;
- which part of the platform is affected;
- how you would like to be credited, or if you prefer to stay anonymous.

Please **do not** include other people's personal data in your report, and
**do not** test against accounts or data that are not yours.

## What to expect

This is a project maintained by one person in their spare time, so response
times are not guaranteed. In good faith, you can expect:

1. an acknowledgement that the report arrived, when possible;
2. an honest assessment of whether it is in scope and how severe it looks;
3. a fix, or an explanation of why it will not be fixed;
4. credit in the release notes if you want it.

Please give a reasonable amount of time for a fix before disclosing the problem
publicly. Reports about the safety of a minor are handled first, ahead of
everything else.

## In scope

Once the application exists, examples of what counts as a security issue:

- authentication, session or account-takeover problems;
- access to another learner's data, projects or private messages;
- exposure of credentials, tokens or personal data;
- injection flaws in anything that renders user content;
- unsafe execution of user-submitted code (the playground is a high-risk area);
- bypasses of moderation, blocking or privacy settings;
- anything that lets an adult contact a minor against that minor's settings.

## Out of scope

- Missing security headers or best-practice suggestions with no demonstrated
  impact.
- Vulnerabilities in third-party services we merely link to — report those to
  the service.
- Automated scanner output pasted without analysis.
- Social engineering of the maintainer.

## Safe harbour

Good-faith security research on this project is welcome. If you follow this
policy — private report, no data exfiltration, no disruption for other users, no
access to other people's accounts — the maintainer will not pursue action against
you, and will say so publicly if needed.

## Supported versions

The project is in early development and has no released versions yet. Once there
are releases, this section will list which ones receive security fixes.
