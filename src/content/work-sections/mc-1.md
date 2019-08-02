---
title: Fork Moloch, Improve the DAO Experience
relatedWorkItem: MetaCartel
className: WorkCenter
sortOrder: 1
---

### Mobile First Design
Within the design space, we kept to a mobile-first UX-UI process, wrapping interactions into microinteractions. Technically, we began planning a native app but moved to a progressive web app (PWA) so we could iterate on one interface first, collect usability test feedback, and when stable ship to native if desired.

![](/img/work/MC__Micro.gif)

### Contract Wallets via Abridged SDK
A PWA is a great start, but we would still be locked into mobile DApp browsers if we used Metamask or other web3 authentication. Instead, we’re using contract wallets via the Abridged SDK. This has enabled us to use a familiar web2 registration process, where users sign up with a username and password and we initialize a contract wallet. We prompt the user to deposit funds into the wallet, at which point the wallet auto deploys to Mainnet, and the user can interact freely through the DApp on any device/browser.

![](/img/work/MC__Account.gif)

### Data Visualization for DAO Metrics
We’re starting by visualizing the historical data of transactions in and out of the DAO Bank, but look to expand this into many visualizations of useful data to help the DAO understand the current state of its health, and inform members towards what is needed to become even healthier (more sustainable).

![](/img/work/MC__DataViz.gif)


