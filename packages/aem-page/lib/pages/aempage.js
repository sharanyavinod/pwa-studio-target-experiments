import React, { useState, useEffect } from 'react';
import { CustomModelClient } from '../server/CustomModelClient';
import Page from '../components/Page';

import { ModelManager, Constants } from "@adobe/cq-spa-page-model-manager";
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import classes from '../styles/common.css';

const AEMPage = () => {
  const [aemModel, setAemModel] = useState();
  useEffect(() => {
    const modelClient = new CustomModelClient(process.env.AEM_API_HOST);
    ModelManager.initialize({
      modelClient,
      path: process.env.AEM_MODEL_PATH
    }).then((model) => {
        setAemModel(model);
    });
  }, []);

    return aemModel ? (
        <Page
          cqPath={aemModel[':path']}
          cqType={aemModel[':type']}
          cqItems={aemModel[':items']}
          cqItemsOrder={aemModel[':itemsOrder']} />
    ) : fullPageLoadingIndicator;
}

export default AEMPage;
