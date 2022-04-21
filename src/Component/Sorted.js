import React from 'react'
import { response } from '../response';
import LeaderBoard from './LeaderBoard'

function Sorted(props) {
    const {type} = props;
    switch (type) {
        case 'name':
            response.list.sort((a,b) => a[type].localeCompare(b[type]));
            break;
    
        default:
            response.list.sort((a,b) => a[type] - b[type]);
            break;
    }

  return (
    <LeaderBoard response={response} />
  )
}

export default Sorted