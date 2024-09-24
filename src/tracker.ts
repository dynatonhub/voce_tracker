import {
    newTracker,
    trackPageView,
    enableActivityTracking,
    trackSelfDescribingEvent,
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
    public tracker: any;

    constructor(appId: string) {
        this.tracker = newTracker("dynMainTracker", "https://neo.dynaton.com.br", {
            appId: appId,
            platform: "web",
            cookieSameSite: "Lax",
            contexts: {
                webPage: true,
            },
            plugins: [ButtonClickTrackingPlugin(), LinkClickTrackingPlugin()],
        });

        enableActivityTracking({
            minimumVisitLength: 5,
            heartbeatDelay: 10,
        });
        enableButtonClickTracking();
        enableLinkClickTracking({ pseudoClicks: true });
    }

    public trackPageView() {
        trackPageView();
    }

    public trackSelfDescribingEvent(event: any) {
        trackSelfDescribingEvent(event);
    }
}
