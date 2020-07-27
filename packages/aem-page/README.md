# AEM Page Extension


### 💻 Demo the AEM page

- Pre-requisites

1. AEM is up and running.
2. SPA project is added and running in AEM (eg: We Retail Journal).


- Setup

1. ⚠️ Have the [companion PWA Studio pull request][pr_content-targets] checked out in your `/path/to/pwa` directory. **This will not work on the develop branch of PWA Studio.**

2. Run yarn install in the repository root.

3. Make sure you have run `yarn run studiolink /path/to/pwa` in this repo root.

3. Open a terminal in `/path/to/pwa` and run:

    ```sh
    AEM_API_HOST=http://localhost:4502 \
    AEM_MODEL_PATH=/content/we-retail-journal/react/en/blog \
    BUILDBUS_DEPS_ADDITIONAL=@magento-research/pwa-contentful-blog,@magento-research/aem-page \
    yarn watch:venia
    ```

    _⚠️ Your local AEM may be running on a different URL than this example. Update `AEM_API_HOST` to the expected one. Also, this example displays the Blog page of We Retail Journal - hence the path as set above._

4. View site in browser.

5. Open the left nav. Observe the new nav item. Click it.

6. The Blog page of We Retail Journal is displayed.

[pr_content-targets]: https://github.com/magento/pwa-studio/pull/2461
