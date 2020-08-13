import * as React from 'react'
import RadioButton from '../components/RadioButton'


const Default: React.FC = () => {
  return (
    <>
      <RadioButton id={1} checked={false} />
    </>
  )
};

const Checked: React.FC = () => {
  return (
    <>
      <RadioButton id={1} checked={true} />
    </>
  )
};

export { Default, Checked }

export default {
  title: 'Common/RadioButton',
}
