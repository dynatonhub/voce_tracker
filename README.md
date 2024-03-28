# voce_tracker
Snowplow tracker to be installed on the 'voce' platform projects for tracking events.

# How to use it:
1. Install it:
```sh
npm install https://github.com/dynatonhub/voce_tracker
```
2. Instantiate the `SnowplowService` class:
```js
import { SnowplowService } from 'voce_tracker'

new SnowplowService()

// You can set a custom app_id in the initialization:
new SnowplowService("custom-app-id")
```
- It'll emit a page view event on instantiation.
- It'll add listeners to links and buttons (covering both `<button>` and `<input type="button">`) to automatically track them and emit events when they're clicked.
- It's recommended to instantiate the `SnowplowService` class when the page is fully loaded, so it would be the last thing to be executed.
- More about it on the [Snowplow documentation](https://docs.snowplow.io/docs/collecting-data/collecting-from-own-applications/javascript-trackers/web-tracker/) and the `src/tracker.ts` file.
