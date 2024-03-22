import {
    newTracker,
    trackPageView,
    enableActivityTracking,
} from "@snowplow/browser-tracker";

import {
    enableButtonClickTracking,
    ButtonClickTrackingPlugin,
} from "@snowplow/browser-plugin-button-click-tracking";

import {
    LinkClickTrackingPlugin,
    enableLinkClickTracking,
} from "@snowplow/browser-plugin-link-click-tracking";

export class SnowplowService {
    tracker = newTracker("dynMainTracker", "https://neo.dynaton.com.br", {
        appId: "voce-lojinha",
        platform: "web",
        cookieSameSite: "Lax",
        contexts: {
            webPage: true,
        },
        plugins: [ButtonClickTrackingPlugin(), LinkClickTrackingPlugin()],
    });

    constructor() {
        enableActivityTracking({
            minimumVisitLength: 5,
            heartbeatDelay: 10,
        });
        enableButtonClickTracking();
        enableLinkClickTracking({ pseudoClicks: true });
        trackPageView();
    }
}
