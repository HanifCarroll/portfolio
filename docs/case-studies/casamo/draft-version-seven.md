# Casamo: From my own apartment search to a product for other travelers

I wanted a washing machine inside my apartment. As a digital nomad booking apartments for weeks at a time, I preferred doing laundry at home to leaving the apartment to use shared facilities.

An Airbnb listing could advertise laundry without making clear whether the machine was inside the apartment or shared with the building. I had to open listings and flip through photos to find out for myself.

I built a small tool that searched Airbnb and used AI image analysis to check for an in-unit washing machine. I then wanted to search for more of the details that matter when choosing somewhere to live.

That became Casamo. Travelers enter a destination or listing links and specify their requirements. The product checks Airbnb and Booking.com listings and returns a saved shortlist with evidence from listing details, photos, and reviews. Travelers can browse the options, see them on a map, and compare them before returning to the marketplace to book.

I handle the product strategy, UI/UX, engineering, testing, and operations. Using it myself and asking other people to test it have changed some of my original ideas about how it should work.

In the sample report, one property lists Wi-Fi, but we don’t know how fast it is. Casamo marks it as listed and suggests asking the host for a recent speed test. For air conditioning, the report shows an excerpt from a guest’s review, with links to the full review and original text.

![Sample listing detail showing listed Wi-Fi, a guest review mentioning air conditioning, and a suggested question about internet speed](/Users/hanifcarroll/projects/portfolio/src/assets/img/projects/casamo/evidence-desktop.png)

*Saved sample report: listed amenities, guest evidence, and questions for the host appear together.*

## Giving people enough choice

My original idea was to make the decision as simple as possible: recommend one apartment and offer two backups.

People testing Casamo wanted more options to compare before trusting that the search had been thorough. That made sense to me: choosing housing can mean committing thousands of dollars and weeks of your life.

I expanded the shortlist, eventually settling on a target of five to ten options. I wanted enough choice for someone to make their own judgment without recreating the experience I was trying to avoid: opening dozens of tabs and spending hours comparing them.

I also changed what happens when the search finds fewer options. At first, Casamo didn’t show a report when too few properties qualified. Now it shows the qualifying results, even if there’s only one. A search uses one credit, which is restored if fewer than five properties qualify. A smaller report may still help someone, even if the search hasn’t found as many options as I wanted it to.

## Making comparison easier to reach

A cluttered interface makes me uncomfortable, and sometimes that feeling persists after I’ve made an improvement. The report had list and map views, and the comparison grid sat below the list. Reaching it meant scrolling past the properties someone was trying to compare.

I moved comparison into its own view alongside list and map, giving all three equal prominence. Someone who wants to compare can go directly to the grid and examine the properties side by side.

![Sample report with List, Map, and Compare navigation above a side-by-side property comparison](/Users/hanifcarroll/projects/portfolio/src/assets/img/projects/casamo/comparison-desktop.png)

*Comparison has its own view alongside list and map, with the traveler’s priorities above general property details.*

## Letting the search continue without the traveler

A search collects listings and checks their details, reviews, and photos against the traveler’s requirements. I had shown live progress and results as they arrived, but people testing Casamo complained about how long searches took. I thought the progress screen encouraged them to sit and watch, so I changed the message to say I’d email when the report was ready. I wanted to make clear that they could leave and do something else.

Casamo runs searches in background Cloudflare Workflows, independently of the browser request. Each completed stage and its evidence are saved, so a retry can resume without repeating all the data collection and AI analysis. The finished report goes into the traveler’s account, and the completion email is queued separately.

Later, when adding a queue for searches waiting for capacity, I had to correct when the search timer started. It began as soon as the application accepted a request, so waiting could consume time intended for searching.

I gave queueing and execution separate deadlines and used Cloudflare’s existing scheduling. A queued search receives its full time allowance when it starts. If a search waits too long in the queue, the application cancels it and restores the credit. If the search starts just as its queue deadline expires, only one of those actions can take effect: start the search or cancel it and return the credit.

I tested this in staging by allowing one search to run at a time and submitting two through the normal signed-in search flow. The second queued, then started automatically with its full time allowance. Both completed with saved reports and one credit used each. Automated tests checked that a search could not both start and expire, or restore the same credit twice.

## Try Casamo

I continue inviting friends to test Casamo and using their feedback alongside my own experience to improve it. You can [explore a sample trip](https://casamo.app/sample-trip) or [try the product](https://casamo.app).
