import React from 'react';
import Button from './index';

export default { title: 'Button', component: Button };

const Template = (args) => <Button {...args} />;

export const withText = Template.bind({});
withText.args = { children: 'hello' };

export const withEmoji = Template.bind({});
withEmoji.args = {
  children: (
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  ),
};
