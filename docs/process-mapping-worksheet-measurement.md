# Process-Mapping Worksheet Measurement

This is the operating record for the ungated process-mapping worksheet funnel. It measures whether the worksheet attracts relevant visitors, helps them reach a useful decision, and creates qualified interest in the Business Systems Audit.

The live GA4 property contains an open funnel exploration named `Process-Mapping Worksheet Funnel`, with a tab named `Worksheet funnel`.

## Privacy boundary

Analytics must never receive worksheet field names or values, workflow names, draft content, local-storage content, or any other user-entered text. Events contain only the page, event location, section number, and link metadata already visible in the interface.

## Events

| Event                         | Trigger                                                            | Properties                                | Decision supported                                  |
| ----------------------------- | ------------------------------------------------------------------ | ----------------------------------------- | --------------------------------------------------- |
| `resource_clicked`            | A contextual internal link opens the worksheet                     | `event_location`, `link_text`, `link_url` | Which internal surfaces send engaged visitors       |
| `worksheet_started`           | The first user-generated worksheet input on the current page visit | Automatic page properties                 | Whether the hero and first section create action    |
| `worksheet_section_4_reached` | Section 4 becomes substantially visible                            | Automatic page properties                 | Whether visitors begin the detailed walkthrough     |
| `worksheet_section_7_reached` | Section 7 becomes substantially visible                            | Automatic page properties                 | Whether visitors reach the decision step            |
| `worksheet_print_clicked`     | A visitor uses either print/save action                            | `event_location` (`hero` or `completion`) | Whether visitors keep a usable artifact             |
| `worksheet_example_clicked`   | The completed-example link is opened                               | `event_location`, link metadata           | Whether visitors need more guidance before starting |
| `worksheet_audit_clicked`     | The completed-workflow CTA opens the Audit page                    | `event_location`, link metadata           | Whether the worksheet creates service intent        |
| `worksheet_restored`          | A valid local draft is restored                                    | Automatic page properties                 | Whether visitors return to continue                 |

`page_view` and `book_call_clicked` already exist. GA4 campaign attribution should use lowercase UTM values when external promotion begins.

## Funnel

Use a GA4 funnel exploration with these ordered steps:

1. `page_view` where `page_path` equals `/resources/process-mapping-worksheet/`
2. `worksheet_started`
3. `worksheet_section_7_reached`
4. `worksheet_print_clicked`
5. `worksheet_audit_clicked`
6. `book_call_clicked`

Keep the exploration open rather than requiring every step. Segment it by session source/medium, campaign, device category, and the `event_location` values documented above.

## Baseline and decisions

The baseline starts after the instrumented page is deployed. Review after the first of:

- Four complete weeks of production data.
- 100 qualified worksheet page views.

Record page views, starts, Section 7 reaches, print/save actions, Audit clicks, and downstream fit-call clicks. Calculate start rate, Section 7 reach rate, print/save rate, Audit click-through rate, and worksheet-assisted booking rate.

Use the first complete baseline as the comparison period; do not assign arbitrary conversion targets before that data exists.

- Low start rate: test the hero promise or first action.
- Strong starts with weak Section 7 reach: reduce worksheet effort or clarify the walkthrough.
- Strong Section 7 reach with weak Audit clicks: improve the transition to the service.
- Weak engagement isolated to one source: stop or revise that distribution path.

## Internal distribution locations

The first distribution test uses only high-intent, contextually relevant pages:

- `process_mapping_article`
- `business_systems_audit_fit`
- `services_workflow_principle`
- `desarmadero_case_study`
- `acquire_case_study`

Do not add a broad process-mapping content cluster until Search Console shows relevant impressions or queries that justify it.
