import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const mappedItem = fromJS(object);

  return mappedItem.getIn(array, undefined);
}
