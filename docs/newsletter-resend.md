# A Working Theory email delivery

The portfolio owns the public signup page and the React Email source. Resend owns the contact list, topic preferences, welcome automation, broadcast drafts, delivery, and unsubscribe handling. The vault remains the editorial source of truth.

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

The draft command reads the canonical vault Markdown packet, recomputes the exact `Final Body` SHA-256 digest, and requires the explicitly approved issue-package digest:

```sh
bun run newsletter:draft /absolute/path/to/issue-packet.md \
  --approved-digest sha256:approved-package-digest
```

It creates a Resend broadcast with `send: false`. There is intentionally no send command in this repository; sending remains a separate, exact approval and verification step under the vault publishing workflow.

## Sending identity

- Domain: `newsletter.hanifcarroll.com`
- From: `A Working Theory <hanif@newsletter.hanifcarroll.com>`
- Reply-To: `hanif@hanifcarroll.com`

Resend domain verification records belong in Cloudflare DNS. The production form should not be enabled until the domain, Resend objects, Netlify secrets, and confirmation flow have all been verified end to end.
