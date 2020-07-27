import React from 'react';
import Navigation from './Navigation';

function getComponentFromModel(aemModel, cqPath) {
  const pageItems = aemModel[':items'];
  const componentPath = cqPath.split('jcr:content/')[1];
  let componentModel = pageItems;
  if (componentPath) {
    const depth = componentPath.split('/').length;
    const keys = componentPath.split('/');
    for(let i = 0; i < depth; i++) {
			componentModel = componentModel[keys[i]];
      if(componentModel[':items']) {
      	componentModel = componentModel[':items'];
      }
    }
  }
 	return componentModel;
}

const NavigationContainer = (props) => {
  const { aemModel, cqPath } = props;
  const componentModel = getComponentFromModel(aemModel, cqPath);
  return <Navigation cqPath={cqPath} cqType={componentModel[':type']} items={componentModel.items}/>;
};

export default NavigationContainer;
