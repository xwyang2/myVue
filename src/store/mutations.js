import { VIEW_NAV,VIEW_FOOTER,VIEW_HEADER,CHECK_USER,SHOPPING,DEL_SHOPPING} from './types'

let mutations={ 

  [VIEW_NAV]:(state,payload)=> state.bNav=payload,
  [VIEW_FOOTER]:(state,payload)=> state.bFooter=payload,
  [VIEW_HEADER]:(state,payload)=> state.bHeader=payload,
  [CHECK_USER]:(state,payload)=> state.user=payload,
  [SHOPPING]:(state,payload)=> state.shopping=payload,
  [DEL_SHOPPING]:(state,payload)=> state.shopping=payload,
};
export default mutations;