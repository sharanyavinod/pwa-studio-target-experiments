import React from 'react';
import { Page, MapTo, withModel } from '@adobe/cq-react-editable-components';

import AEMPage from './Page';
import Navigation from './Navigation';
import Text, { TextEditConfig } from './Text';

import classes from '../styles/common.css';

// This component is the application entry point
class PageContainer extends Page {
    render() {
      return (<div className={classes.page}>{ this.childComponents }</div>);
    }
}
export default withModel(PageContainer);


MapTo('we-retail-journal/react/components/structure/page')(AEMPage);
MapTo("we-retail-journal/components/navigation")(Navigation);
MapTo('we-retail-journal/components/text')(Text, TextEditConfig);
