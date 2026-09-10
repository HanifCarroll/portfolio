# Casamo: From my own apartment search to a product for other travelers

I wanted a washing machine inside my apartment. As a digital nomad, I was booking somewhere to live for weeks at a time, and I preferred doing laundry at home to leaving the apartment to use shared facilities.

A listing could advertise laundry without making clear whether the machine was inside the apartment or shared with the building. I would open listings and flip through photos to find out for myself.

I built a small tool that searched Airbnb and used AI image analysis to check for an in-unit washing machine. Once I had that, I wanted to search for more of the details that matter when choosing somewhere to live.

That became Casamo. Travelers enter a destination or listing links and specify their requirements. The product checks Airbnb and Booking.com listings and returns a saved shortlist with evidence from listing details, photos, and reviews. Travelers can browse the options, see them on a map, and compare them before returning to the marketplace to book.

I handle the product strategy, UI/UX, engineering, testing, and operations. As I use Casamo and invite other people to test it, I continue reconsidering decisions about what it should do and how it should work.

## Giving people enough choice

My original idea was to make the decision as simple as possible: recommend one apartment and offer two backups.

Feedback changed that. People wanted to see more options before trusting the recommendation. Housing is an expensive decision that affects weeks of someone's life. Three listings gave them too little room to compare and too little confidence that the search had been thorough.

I expanded the shortlist, eventually settling on a target of five to ten options. I wanted enough choice for someone to make their own judgment without recreating the experience I was trying to avoid: opening dozens of tabs and spending hours comparing them.

I also changed what happens when the search finds fewer options. Initially, a search below the minimum did not show a report. Now Casamo shows whatever qualifies, even if there is only one result, and restores the search credit when there are fewer than five. A small report may still help someone, even when it falls short of the choice I intend the service to provide.

## Making comparison easier to reach

A cluttered interface gives me a feeling of discomfort, and sometimes that feeling persists after I have made an improvement. Using Casamo myself helps me identify specific things to change.

One was the comparison grid. The report had list and map views, with the grid placed below the list. Reaching it meant scrolling past the properties someone was trying to compare.

I moved comparison into its own view alongside list and map, giving all three equal prominence. Someone who wants to compare can go directly to the grid and examine the properties side by side.

## Letting the search continue without the traveler

Testing also changed how I approached waiting. I had shown live progress and results as they arrived, but people complained about how long searches took. I thought the progress screen encouraged them to sit and watch. Telling them I would email when the report was ready made it explicit that they could leave and do something else.

Casamo runs searches in background Cloudflare Workflows, separately from the web request. It saves completed stages and their evidence so a retry can resume without repeating all the provider and AI work. The finished report is saved to the account, and completion email is handled separately.

Later, when adding queueing for searches waiting for capacity, I had to correct when the execution clock started. It began as soon as a request was accepted, so time spent waiting could consume time intended for searching.

I separated the queue-wait deadline from the execution deadline and used Cloudflare's existing scheduling. A queued search receives its full execution window when it starts. The application also coordinates startup with queue expiry and credit restoration, so a search cannot both start and receive a refund for waiting too long.

I tested this by limiting staging to one running search and submitting two through the normal authenticated route. The second waited about two minutes and 37 seconds, then started automatically with its full execution window. Both completed with saved reports, one credit debit each, and completion-email receipts. Automated tests separately covered competing start and expiry operations and duplicate refund attempts.

## Try Casamo

I continue inviting friends to test Casamo and incorporating their feedback alongside my own experience of the interface. You can [explore a sample trip](https://casamo.app/sample-trip) or [try the product](https://casamo.app).

If you need help delivering product engineering work, I'd like to hear what you're building.
