import React from 'react';
import { Page, MapTo } from '@adobe/cq-react-editable-components';
import Navigation from './Navigation';
import Text, { TextEditConfig } from './Text';

class AppPage extends Page {
  get containerProps() {
      let attrs = super.containerProps;
      attrs.className = (attrs.className || '') + ' page ' + (this.props.cssClassNames || '');
      return attrs
  }
};

export default Page;


MapTo('we-retail-journal/react/components/structure/page')(AppPage);
MapTo("we-retail-journal/components/navigation")(Navigation);
MapTo('we-retail-journal/components/text')(Text, TextEditConfig);
