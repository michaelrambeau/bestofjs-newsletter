# Best of JavaScript Newsletter (Work in progress)

GOAL: generate the weekly reports sent by email to the users who subscribed to _Best of JavaScript_ newsletter, from [JavaScript Rising Stars](https://risingstars.js.org) web site.

Commands:

* `npm run build-report`: build JSON files in `./reports` folder. To be launched once a week.
* `npm run build-html`: from JSON reports generated during the previous step, build HTML content that will be sent by email to subcribers.

Built with [MJML](https://mjml.io/) "the only framework that makes responsive-email easy".
