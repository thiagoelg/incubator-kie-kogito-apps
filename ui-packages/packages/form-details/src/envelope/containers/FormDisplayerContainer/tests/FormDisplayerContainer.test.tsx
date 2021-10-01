/*
 * Copyright 2021 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { mount } from 'enzyme';
import FormDisplayerContainer from '../FormDisplayerContainer';
import { formContent } from '../../../tests/mocks/MockedFormDetailsDriver';
import RuntimeToolsFormDetailsContext, {
  FormDetailsContextImpl
} from '../../../components/contexts/FormDetailsContext';
describe('FormDisplayerContainer', () => {
  const props = {
    formContent: formContent,
    formData: {
      name: 'form1',
      type: 'HTML' as any,
      lastModified: new Date('2020-07-11T18:30:00.000Z')
    }
  };
  it('render embeded formdisplayer', () => {
    const wrapper = mount(
      <RuntimeToolsFormDetailsContext.Provider
        value={new FormDetailsContextImpl()}
      >
        <FormDisplayerContainer {...props} />
      </RuntimeToolsFormDetailsContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});