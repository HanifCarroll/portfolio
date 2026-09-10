# Casamo: From my own apartment search to a product for other travelers

I wanted a washing machine inside my apartment. As a digital nomad, I was booking somewhere to live for weeks at a time, and I preferred doing laundry at home to leaving the apartment to use shared facilities.

Finding one took more effort than I expected. A listing could advertise laundry without making clear whether the machine was inside the apartment or shared with the building. I would open listings and flip through photos to find out for myself.

I built a small tool that searched Airbnb and used AI image analysis to check for an in-unit washing machine. Once I had that, I wanted to search for more of the details that matter when choosing somewhere to live.

That became Casamo, a product for researching and comparing furnished stays on Airbnb and Booking.com. I handle the product strategy, UI/UX, engineering, testing, and operations. Its development has involved repeatedly reconsidering what the product should do as I use it and invite other people to test it.

## Giving people enough choice

My original idea was to make the decision as simple as possible: recommend one apartment and offer two backups.

Feedback changed that. People wanted to see more options before trusting the recommendation. Housing is an expensive decision that affects weeks of someone's life. Three listings gave them too little room to compare and too little confidence that the search had been thorough.

I expanded the target to six to ten options, then settled on five to ten. I wanted enough choice for someone to make their own judgment without recreating the experience I was trying to avoid: opening dozens of tabs and spending hours comparing them.

I also changed what happens when the search finds fewer options. Initially, a search below the minimum did not show a report. Now Casamo shows whatever qualifies, even if there is only one result, and restores the search credit when there are fewer than five. A small report may still help someone, even when it falls short of the choice I intend the service to provide.

## Making comparison easier to reach

I spend a lot of time looking at and interacting with Casamo's interface. A cluttered screen gives me a feeling of discomfort, and sometimes that feeling persists after I have made an improvement. I continue adjusting the interface until I can identify and address what is getting in the way.

One example was the comparison grid. The report had list and map views, with the grid placed below the list. Comparison was available, but reaching it meant scrolling past the properties someone was trying to compare.

I moved it into its own view alongside list and map. Someone who wants to compare can go directly to that task. The list supports browsing individual stays, the map shows where they are, and comparison puts their details side by side.

## Letting the search continue without the traveler

Testing also changed how I approached waiting. I had shown live progress and results as they arrived, but people complained about how long searches took. I thought the progress screen encouraged them to sit and watch. Telling them I would email when the report was ready made it explicit that they could leave and do something else.

That experience needs engineering behind it. Casamo runs searches in background Cloudflare Workflows, separately from the web request. It saves completed stages and their evidence so a retry can resume without repeating all the provider and AI work. The finished report is saved to the account, and completion email is handled separately.

Waiting for capacity required another distinction. A search accepted into a queue should receive its full execution time when it starts. I implemented separate queue-wait and execution deadlines, using Cloudflare's scheduling rather than building another scheduler. The application tracks whether a search is queued or running, and coordinates expiry with credit restoration so the same search cannot start and receive a queue-timeout refund.

To test that, I temporarily limited staging to one running search and submitted two through the normal authenticated route. The second waited about two minutes and 37 seconds, then started automatically with its full execution window. Both completed with saved reports, one credit debit each, and completion-email receipts. Separate automated tests covered competing start and expiry operations and duplicate refund attempts.

## Continuing to build with feedback

Casamo grew from a specific inconvenience I knew personally. Building it for other people has meant changing assumptions I started with, including how much choice to offer and what a search should give someone when it finds too little.

I continue inviting friends to test it and using their feedback alongside my own experience of the interface. The product gives us something concrete to examine: the options it finds, the evidence it presents, and the effort it takes to make a decision.

[Explore a sample trip](https://casamo.app/sample-trip) or [try Casamo](https://casamo.app). If you need help delivering product engineering work, I'd like to hear what you're building.
