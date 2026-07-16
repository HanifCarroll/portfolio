# A Working Theory email delivery

The portfolio owns the public signup page and the React Email source. Resend owns the contact list, topic preferences, welcome automation, broadcast drafts, delivery, and unsubscribe handling. The vault remains the editorial source of truth.

## Public issue archive

The public newsletter has three distinct web surfaces:

- `/newsletter/` remains the conversion-focused publication home. It shows the latest issue as proof and links to the archive without turning the first viewport into a content index.
- `/newsletter/archive/` lists every real issue in reverse chronological order with its issue number, publication date, description, and topics.
- `/newsletter/issues/<slug>/` gives each real issue a stable canonical URL with Article structured data, readable long-form typography, approved images and captions, and an in-context subscribe form.

`/newsletter/archive-preview/` is a `noindex, nofollow, noarchive` filled-state design preview. It may contain clearly labeled sample entries, but those entries are not publication records, do not get issue pages, and must never appear in the real archive, sitemap as canonical content, Resend, or the vault publishing ledger.

The vault issue remains canonical editorial state. The project-local Astro content entry is the public snapshot used by the deployed issue page; its reader-visible prose must match the approved vault body, while public-site image paths may be relative equivalents of the same manifest-backed HTTPS assets.

## Local template previews

Run the React Email development server to review the confirmation, welcome, and newsletter issue templates with hot reload, desktop and mobile presets, editable preview props, compatibility checks, and spam checks:

```sh
bun run email:dev
```

The gallery opens at `http://localhost:3001`. Each production email exports `PreviewProps` so the gallery has representative content without sending or creating anything in Resend. Shared layout components remain named exports only, which keeps them out of the preview sidebar.

## Runtime flow

1. `/newsletter/` posts an email address to `/api/newsletter/subscribe`.
2. The rate-limited Netlify function sends a 24-hour encrypted confirmation link. The honeypot and origin check reject the simplest automated submissions.
3. `/api/newsletter/confirm` creates the Resend contact in the configured segment and topic, then emits `awt_subscribed`.
4. The Resend automation sends the welcome template in response to that event.

No contact is added before confirmation. `NEWSLETTER_TOKEN_SECRET` and `RESEND_API_KEY` must exist only in Netlify environment variables, never in the repository.

## Resend bootstrap

After the sending domain is verified and `RESEND_API_KEY` is available locally for the one-time setup:

```sh
bun run newsletter:bootstrap
```

The command is idempotent by object name. It creates or reuses:

- segment `A Working Theory`;
- topic `A Working Theory issues`, default opt-out;
- event `awt_subscribed`;
- published template `A Working Theory welcome`; and
- enabled automation `A Working Theory welcome`.

Copy the returned segment and topic IDs into Netlify as `RESEND_SEGMENT_ID` and `RESEND_TOPIC_ID`. The command does not create or send a broadcast.

## Broadcast draft gate

The draft command reads canonical `issue.md` and computes one digest over its title, selected subject, preview text, and exact `Final Body`. Draft creation requires both the issue's recorded `approved_digest` and the command-line approval digest to match that computed value:

```sh
bun run newsletter:draft /absolute/path/to/issue.md \
  --approved-digest sha256:approved-issue-digest
```

It creates a Resend broadcast with `send: false`. There is intentionally no send command in this repository; sending remains a separate, exact approval and verification step under the vault publishing workflow.

A controlled test email is not a broadcast send. When Hanif explicitly authorizes one, render the exact approved digest and send it transactionally to the one named test address only. Do not add or select a segment, and do not treat the test delivery as publication evidence.

## Sending identity

- Domain: `newsletter.hanifcarroll.com`
- From: `A Working Theory <hanif@newsletter.hanifcarroll.com>`
- Reply-To: `hanif@hanifcarroll.com`

Resend domain verification records belong in Cloudflare DNS. The production form should not be enabled until the domain, Resend objects, Netlify secrets, and confirmation flow have all been verified end to end.
